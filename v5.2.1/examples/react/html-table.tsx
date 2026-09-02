/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default () => {
  return (
    <table className="ix-table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Type</th>
          <th scope="col">Status</th>
          <th scope="col">HW Version</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Equipment</td>
          <td>Normal</td>
          <td>2.0</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Positioner</td>
          <td>Maintenance</td>
          <td>1.0</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Pressure sensor</td>
          <td>Unknown</td>
          <td>N/A</td>
        </tr>
      </tbody>
    </table>
  );
};
