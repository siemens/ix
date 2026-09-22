/* eslint-disable */
/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * Luxon counts months 1-12 and weekdays 1-7 (Monday = 1), while the name
 * arrays from `Info.months()` / `Info.weekdays()` are 0-based. Rather than
 * convert between the two bases, the date components carry a `DateTime` for
 * every calendar position and derive names by formatting it, so neither base
 * is ever written down.
 *
 * Passing a `DateTime` is enforced by the signatures in
 * `utils/calendar-units.ts`; this rule covers what those types cannot, by
 * banning the ways a bare unit number gets manufactured in the first place.
 *
 * The receiver's type decides: `someDateTime.month` is reported, while a
 * `.month` read on any other object is left alone. That needs type
 * information, so the consuming config must set `parserOptions.project`.
 */

const LUXON_SOURCE = /[\\/]node_modules[\\/](@types[\\/])?luxon[\\/]/;

const ORDINAL_ACCESSORS = {
  month: 'month',
  weekday: 'weekday',
};

const INFO_NAME_ARRAYS = new Set([
  'months',
  'monthsFormat',
  'weekdays',
  'weekdaysFormat',
]);

function declaredInLuxon(symbol) {
  const declarations = symbol.getDeclarations() || [];

  return declarations.some((declaration) =>
    LUXON_SOURCE.test(declaration.getSourceFile().fileName)
  );
}

function isLuxonType(type, name) {
  if (!type) {
    return false;
  }

  if (type.isUnionOrIntersection()) {
    return type.types.some((part) => isLuxonType(part, name));
  }

  const symbol = type.getSymbol() || type.aliasSymbol;

  return (
    Boolean(symbol) && symbol.getName() === name && declaredInLuxon(symbol)
  );
}

function staticPropertyName(node) {
  if (!node.computed) {
    return node.property.type === 'Identifier' ? node.property.name : null;
  }

  return node.property.type === 'Literal' &&
    typeof node.property.value === 'string'
    ? node.property.value
    : null;
}

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Disallow manufacturing bare calendar unit numbers from Luxon, whose ordinals do not line up with the 0-based Info name arrays.',
    },
    schema: [],
    messages: {
      month:
        "Don't read Luxon's 1-based .month. Keep the month as a DateTime: compare with hasSame(other, 'month') and render with monthNameOf() from utils/calendar-units.ts.",
      weekday:
        "Don't read Luxon's 1-based .weekday. Use weekdayColumnOf() from utils/calendar-units.ts to place a date in a grid column.",
      infoNameArray:
        'Info.{{name}}() returns a 0-based array, and indexing one with a Luxon ordinal shifts the calendar by one. Build months with monthsOfYear() and names with monthNameOf() / weekdayNamesFrom() from utils/calendar-units.ts.',
      dateConstructor:
        'new Date(year, month, day) takes a 0-based month and resolves in local time. Use monthsOfYear() / dayOfMonth() from utils/calendar-units.ts.',
    },
  },

  create(context) {
    const sourceCode = context.sourceCode || context.getSourceCode();
    const services = sourceCode.parserServices;

    if (!services || !services.program || !services.esTreeNodeToTSNodeMap) {
      throw new Error(
        'ix/no-luxon-calendar-ordinals needs type information. Set parserOptions.project for the files this rule runs on.'
      );
    }

    const checker = services.program.getTypeChecker();

    const typeOf = (node) =>
      checker.getTypeAtLocation(services.esTreeNodeToTSNodeMap.get(node));

    /* `Date` resolving to a variable with a definition means it is shadowed,
     * so the global 0-based constructor is not what is being called. */
    const isGlobalDate = (node) => {
      const variable = sourceCode
        .getScope(node)
        .references.find((reference) => reference.identifier === node.callee);

      return (
        !variable || !variable.resolved || variable.resolved.defs.length === 0
      );
    };

    return {
      MemberExpression(node) {
        const name = staticPropertyName(node);
        const messageId = ORDINAL_ACCESSORS[name];

        if (!messageId) {
          return;
        }

        if (isLuxonType(typeOf(node.object), 'DateTime')) {
          context.report({ node, messageId });
        }
      },

      'CallExpression > MemberExpression.callee'(node) {
        const name = staticPropertyName(node);

        if (!INFO_NAME_ARRAYS.has(name)) {
          return;
        }

        if (isLuxonType(typeOf(node.object), 'Info')) {
          context.report({
            node: node.parent,
            messageId: 'infoNameArray',
            data: { name },
          });
        }
      },

      NewExpression(node) {
        if (
          node.callee.type !== 'Identifier' ||
          node.callee.name !== 'Date' ||
          node.arguments.length < 2 ||
          !isGlobalDate(node)
        ) {
          return;
        }

        context.report({ node, messageId: 'dateConstructor' });
      },
    };
  },
};
