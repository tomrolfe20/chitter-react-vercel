import React, { useState } from 'react';

const Register = () => {
  const [handle, setHandle] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(
        'https://chitter-backend-api-v2.herokuapp.com/users',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: { handle, password },
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      REGISTER FORM
      <div>
        <input
          type='text'
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type='submit' disabled={submitting}>
        Submit
      </button>
    </form>
  );
};

export default Register;
