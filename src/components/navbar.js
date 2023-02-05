import React, { useState } from 'react';
import Login from './logIn';
import Register from './register';
import { useAppContext } from '../lib/contextLib';

const Navbar = () => {
  function handleLogout() {
    userHasAuthenticated(false);
    setUser(null);
  }
  const { user, userHasAuthenticated, setUser } = useAppContext();
  const [loginHidden, setLoginHidden] = useState(true);
  const [registerHidden, setRegisterHidden] = useState(true);
  return (
    <div>
      {user ? (
        <button
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </button>
      ) : (
        <>
          {!registerHidden ? <Register /> : null}
          {!loginHidden ? <Login /> : null}

          {registerHidden ? (
            <button onClick={() => setLoginHidden(false)}>Login</button>
          ) : null}
          {loginHidden ? (
            <button onClick={() => setRegisterHidden(false)}>Register</button>
          ) : null}
        </>
      )}
    </div>
  );
};

export default Navbar;
