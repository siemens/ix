/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  IxApplicationContext,
  IxButton,
  Modal2,
  ModalRef2,
  showModal2,
} from '@siemens/ix-react';
import React, { useRef } from 'react';

const CustomModal: React.FunctionComponent = () => {
  const ref = useRef<ModalRef2>(null);
  return (
    <Modal2 ref={ref}>
      <IxButton onClick={() => ref.current?.close('Close!!!')}>Close</IxButton>
      <IxButton onClick={() => ref.current?.close('Dismiss!!!')}>
        Dismiss
      </IxButton>
    </Modal2>
  );
};

function Demo() {
  return (
    <IxButton
      onClick={async () => {
        const instance = await showModal2({
          content: <CustomModal></CustomModal>,
        });

        instance.onClose.on(console.log);
        instance.onDismiss.on(console.log);
      }}
    >
      ShowModal
    </IxButton>
  );
}

// const Demo2 = class extends React.Component {
//   static contextType = IxContext;

//   render() {
//     return (
//       <IxButton
//         onClick={() => {
//           console.log(this.context);
//         }}
//       >
//         ShowModal2
//       </IxButton>
//     );
//   }
// };

function App() {
  return (
    <IxApplicationContext>
      <Demo />
      {/* <Demo2 /> */}
    </IxApplicationContext>
  );
}

export default App;
