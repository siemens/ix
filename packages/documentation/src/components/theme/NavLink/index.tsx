/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Link from '@docusaurus/Link';

export default function NavLink({ value, label }) {
  return (
    <Link className="navbar__item nav-link" to={value}>
      {label}
    </Link>
  );
}
