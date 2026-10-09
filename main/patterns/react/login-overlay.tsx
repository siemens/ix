/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IxButton, IxInput, IxTypography } from '@siemens/ix-react';
import { useState } from 'react';
import styles from './login-overlay.module.css';

export default function LoginOverlay() {
  const [username, setUsername] = useState('john.doe@company.com');
  const [password, setPassword] = useState('password123');

  return (
    <div className={styles.overlay}>
      <header className={styles.nameSection}>
        <p className={styles.systemName}>SYSTEM NAME</p>
        <h1 className={styles.productName}></h1>
        <IxTypography format="display-xl">Product Name</IxTypography>
      </header>

      <form
        className={styles.loginFormSection}
        onSubmit={(event) => event.preventDefault()}
      >
        <IxInput
          type="email"
          label="Username*"
          value={username}
          onInput={(event) =>
            setUsername((event.target as HTMLInputElement).value)
          }
        />

        <div className={styles.passwordSection}>
          <IxInput
            type="password"
            label="Password*"
            value={password}
            onInput={(event) =>
              setPassword((event.target as HTMLInputElement).value)
            }
          />
          <a className={styles.link} href="#">
            Forgot password
          </a>
        </div>

        <IxButton type="submit" className={styles.fullWidthButton}>
          Log in
        </IxButton>
      </form>

      <div className={styles.registerSection}>
        <p className={styles.registerText}>Don’t have an account?</p>
        <a className={styles.link} href="#">
          Register now
        </a>
      </div>

      <div className={styles.alternativeLoginSection}>
        <div className={styles.separator}>
          <span className={styles.separatorLine}></span>
          <span className={styles.separatorText}>or</span>
          <span className={styles.separatorLine}></span>
        </div>

        <IxButton variant="secondary" className={styles.fullWidthButton}>
          Log in with Siemens ID
        </IxButton>
        <IxButton variant="secondary" className={styles.fullWidthButton}>
          Log in with Lorem Ipsum
        </IxButton>
        <IxButton variant="secondary" className={styles.fullWidthButton}>
          Log in with Dolor
        </IxButton>
      </div>
    </div>
  );
}
