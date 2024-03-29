// App.js
import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import SignInForm from './SignInForm';

const App = () => {
  const [showSignInForm, setShowSignInForm] = useState(false);

  const handleSignInOptionClick = () => {
    setShowSignInForm(true);
  };

  const handleCloseSignInForm = () => {
    setShowSignInForm(false);
  };

  return (
    <div>
      {!showSignInForm && <RegistrationForm onSignInOptionClick={handleSignInOptionClick} />}//registrationform
      {showSignInForm && <SignInForm onClose={handleCloseSignInForm} />}//signinform
    </div>
  );
};

export default App;
