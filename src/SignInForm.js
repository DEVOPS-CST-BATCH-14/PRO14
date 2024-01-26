// SignInForm.js
import React, { useState } from 'react';
import InputField from './InputField';
import './styles.css'; // Import the styles

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Implement sign-in logic here
    console.log('Sign In:', { email, password });
  };

  return (
    <div>
      <h2>Sign In</h2>
      <InputField label="Email" type="email" placeholder="Enter your email" value={email} onChange={setEmail} />
      <InputField label="Password" type="password" placeholder="Enter your password" value={password} onChange={setPassword} />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignInForm;
