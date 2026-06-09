import { useRef } from 'react';
import {
  IxInput,
  IxButton,
  IxDateInput,
  IxTimeInput,
  IxNumberInput,
} from '@siemens/ix-react';

export default () => {
  const emailRef = useRef<HTMLIxInputElement>(null);

  const handleSubmit = (e: React.FormEvent, formType: string) => {
    e.preventDefault();
    console.log(`${formType} form submitted`);
  };

  return (
    <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>
      <div>
        <IxInput ref={emailRef} type="email" label="Email" name="email" />
        <IxButton onClick={() => emailRef.current?.focusInput()}>
          Focus email
        </IxButton>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}
        id="login-form"
      >
        <IxInput type="email" name="email" id="email" />
        <IxButton
          form="login-form"
          type="submit"
          onClick={(evt) => console.log('Clicked Submit!')}
        >
          Login
        </IxButton>
      </form>

      <form
        onSubmit={(e) => handleSubmit(e, 'IxInput')}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '250px',
        }}
      >
        <h3>IxInput Form</h3>
        <IxInput type="email" name="email" placeholder="Email" />
        <IxInput type="password" name="password" placeholder="Password" />
        <IxNumberInput name="age" placeholder="Age" />
        <IxDateInput name="dob" placeholder="Date of Birth" />
        <IxTimeInput name="appointment" placeholder="Appointment Time" />
        <IxButton type="submit">Submit</IxButton>
      </form>

      <form
        onSubmit={(e) => handleSubmit(e, 'Native')}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '250px',
        }}
      >
        <h3>Native Input Form</h3>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
        <input type="submit" value="Native Submit Input" />
      </form>
    </div>
  );
};
