/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './buttons.scoped.css';

import { IxButton, IxInput } from '@siemens/ix-react';
import { FormEvent, useState } from 'react';

export default () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [_, setError] = useState<string>('');
  const [uploading, setUploading] = useState<boolean>(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setUploading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setUploading(false);
    setName('');
    setEmail('');
  };

  return (
    <>
      <div>
        <div>
          <form onSubmit={submit}>
            <IxInput
              name="name"
              label="Contact name"
              onValueChange={(e) => setName(e.target.value)}
              value={name}
            ></IxInput>

            <IxInput
              name="email"
              label="Contact email"
              onValueChange={(e) => setEmail(e.target.value)}
              value={email}
            ></IxInput>

            <div>
              <IxButton
                disabled={!name || !email || uploading}
                type="submit"
              >
                {uploading ? 'Uploading...' : 'Upload'}
              </IxButton>
              <button disabled={!name || !email || uploading} type="submit">
                {uploading ? 'Uploading...' : 'Upload'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
