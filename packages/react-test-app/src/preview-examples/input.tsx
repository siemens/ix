import { IxInput, IxButton, IxDateInput, IxTimeInput, IxNumberInput } from '@siemens/ix-react';
import { useRef } from 'react';

export default () => {
  const emailInputRef = useRef<HTMLIxInputElement>(null);
  const passwordInputRef = useRef<HTMLIxInputElement>(null);

  const handleSubmit = (e: React.FormEvent, formType: string) => {
    e.preventDefault();
    console.log(`${formType} form submitted`);
  };

  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
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
      {/* IxInput Form */}
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
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-end' }}>
          <IxInput required ref={emailInputRef}  name="email" placeholder="Email" value="test@example.com" />
          <IxButton onClick={() => emailInputRef.current?.clear()}>Clear</IxButton>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-end' }}>
          <IxInput ref={passwordInputRef} name="password" placeholder="Password" value="password123" />
          <IxButton onClick={() => passwordInputRef.current?.clear()}>Clear</IxButton>
        </div>
        <IxNumberInput name="age" placeholder="Age" />
        <IxDateInput name="dob" placeholder="Date of Birth" />
        <IxTimeInput name="appointment" placeholder="Appointment Time" />
        <IxButton type="submit">Submit</IxButton>
      </form>

      {/* Native Input Form */}
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
        <input
          type="email"
          name="email"
          placeholder="Email"
          style={{
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          style={{
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '8px',
            backgroundColor: '#007acc',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          Submit
        </button>
        <input type="submit" value="Native Submit Input" />
      </form>
    </div>
  );
};
