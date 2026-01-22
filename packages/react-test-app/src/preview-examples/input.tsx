import { IxInput, IxButton, IxDateInput, IxTimeInput, IxNumberInput } from '@siemens/ix-react';

export default () => {
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
        <IxInput
          type="email"
          name="email"
          placeholder="Email"
          onIxChange={(e) => console.log('IxInput email ixChange:', e.detail)}
        />
        <IxInput
          type="password"
          name="password"
          placeholder="Password"
          onIxChange={(e) => console.log('IxInput password ixChange:', e.detail)}
        />
        <IxNumberInput
          name="age"
          placeholder="Age"
          onIxChange={(e) => console.log('IxNumberInput age ixChange:', e.detail)}
        />
        <IxDateInput
          name="dob"
          placeholder="Date of Birth"
          onIxChange={(e) => console.log('IxDateInput dob ixChange:', e.detail)}
        />
        <IxTimeInput
          name="appointment"
          placeholder="Appointment Time"
          onIxChange={(e) => console.log('IxTimeInput appointment ixChange:', e.detail)}
        />
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
