import React, { useState } from 'react';
import { useAppContext } from '../lib/contextLib';
const Login = () => {
  const { userHasAuthenticated, isAuthenticated, setUser } = useAppContext();
  const [handle, setHandle] = useState('');
  const [password, setPassword] = useState('');

  function handleLogout() {
    userHasAuthenticated(false);
    setUser(null);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      'https://chitter-backend-api-v2.herokuapp.com/sessions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session: {
            handle,
            password,
          },
        }),
      }
    );

    if (response.ok) {
      const json = await response.json();
      console.log(json);

      setUser(json);
      console.log('User has logged in');
      userHasAuthenticated(true);
      // Save user_id and session_key in local storage or state, as needed.
    } else {
      console.error('Failed to create session');
    }
  };

  return (
    <>
      {isAuthenticated ? (
        <span>
          User has logged in<button onClick={handleLogout}>logout</button>
        </span>
      ) : (
        <form onSubmit={handleSubmit}>
         
          <label htmlFor='handle'>Handle:</label>
          <input
            type='text'
            id='handle'
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
          />
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Submit</button>
        </form>
      )}
    </>
  );
};

export default Login;
