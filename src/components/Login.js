
import React from 'react';

function Login({ setLoggedIn }) {
  const handleLogin = () => {
       setLoggedIn(true);
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
