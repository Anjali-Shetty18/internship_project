
import React from 'react';

function Registration({ setRegistered }) {
  const handleRegistration = () => {
    setRegistered(true);
  }

  return (
    <div>
      <h2>Registration</h2>
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
}

export default Registration;
