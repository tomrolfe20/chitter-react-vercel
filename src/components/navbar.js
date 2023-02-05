import React, { useState } from 'react';
import './navbar';
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
    <div className='navbar-container'>
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
            <>
              {loginHidden ? (
                <button onClick={() => setLoginHidden(false)}>Login</button>
              ) : (
                <button onClick={() => setLoginHidden(true)}>Back</button>
              )}
            </>
          ) : null}

          {loginHidden ? (
            <>
              {registerHidden ? (
                <button onClick={() => setRegisterHidden(false)}>Register</button>
              ) : (
                <button onClick={() => setRegisterHidden(true)}>Back</button>
              )}
            </>
          ) : null}
        </>
      )}
    </div>
  );
};

export default Navbar;
