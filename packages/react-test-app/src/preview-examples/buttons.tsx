/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { CwButton } from '@siemens/ix-react';

export default function Buttons() {
  return (
    <>
      <CwButton className="m-1" variant="Primary">
        Webcomponents button
      </CwButton>
      <CwButton className="m-1" variant="Secondary">
        Webcomponents button
      </CwButton>
      <CwButton className="m-1" outline>
        Webcomponents button
      </CwButton>
      <CwButton className="m-1" invisible>
        Webcomponents button
      </CwButton>
    </>
  );
}
