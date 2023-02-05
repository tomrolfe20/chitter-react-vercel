import React, { useState } from 'react';
import { useAppContext } from '../lib/contextLib';
import './newPost.css';

const NewPost = ({ user_id, session_key }) => {
  const { setReload } = useAppContext();
  const [message, setMessage] = useState('');

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(
        'https://chitter-backend-api-v2.herokuapp.com/peeps',
        {
          method: 'POST',
          headers: {
            Authorization: `Token token=${session_key}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            peep: { user_id: user_id, body: message },
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
      setReload(true);
    }
  };

  return (
    <div className='new-post-container'>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Whats on your mind?'
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type='submit' disabled={submitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPost;
