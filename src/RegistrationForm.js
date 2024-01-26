// RegistrationForm.js
import React, { useState } from 'react';
import InputField from './InputField';
import './styles.css'; // Import the styles

const RegistrationForm = ({ onSignInOptionClick }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    // Implement registration logic here
    console.log('Registration:', { username, email, password });
  };

  return (
    <div>
      <h2>Registration</h2>
      <InputField label="Username" type="text" placeholder="Enter your username" value={username} onChange={setUsername} />
      <InputField label="Email" type="email" placeholder="Enter your email" value={email} onChange={setEmail} />
      <InputField label="Password" type="password" placeholder="Enter your password" value={password} onChange={setPassword} />
      <button onClick={handleRegistration}>Register</button>
      <p>
        Already have an account? <span onClick={onSignInOptionClick} style={{ cursor: 'pointer', color: 'blue' }}>Sign In</span>
      </p>
    </div>
  );
};

export default RegistrationForm;
