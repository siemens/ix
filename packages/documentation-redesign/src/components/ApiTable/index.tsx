/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function ApiTable(props: { header: string[]; children?: React.ReactNode }) {
  return (
    <div className="container pl-0 pr-0 pt-2 pb-6 rounded-lg">
      <div className="grid gap-4">
        <div className="row-span-1 rounded grid grid-cols-10">
          {props.header.map((header, index) => (
            <div key={index} className="col-span-2 font-bold text-sm">
              {header}
            </div>
          ))}
        </div>
        {props.children}
      </div>
    </div>
  );
}

const ApiTableRow = {
  Property(props: {
    name: string;
    attribute: string;
    type: string;
    default: string;
    description: string;
  }) {
    return (
      <div className="row-span-1 grid grid-cols-10 border-solid border-t-0 border-l-0 border-r-0 border-b pb-2 border-slate-800 border-radius-0">
        <div className="col-span-2">{props.name}</div>
        <div className="col-span-2">
          <code className="p-1">{props.attribute}</code>
        </div>
        <div className="col-span-2">
          <code className="p-1">{props.type}</code>
        </div>
        <div className="col-span-2">
          <code className="p-1">{props.default}</code>
        </div>
        <div className="col-span-2">{props.description}</div>
      </div>
    );
  },

  Event(props: { name: string; type: string; description: string }) {
    return (
      <div className="row-span-1 grid grid-cols-10 border-solid border-t-0 border-l-0 border-r-0 border-b pb-2 border-slate-800 border-radius-0">
        <div className="col-span-2">{props.name}</div>
        <div className="col-span-2">
          <code className="p-1">{props.type}</code>
        </div>
        <div className="col-span-2">{props.description}</div>
      </div>
    );
  },
};

export { ApiTable, ApiTableRow };
