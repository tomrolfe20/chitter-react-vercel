import React, { useState } from 'react';
import './peep.css';
import Like from '../components/like';
import { useAppContext } from '../lib/contextLib';
import { Link } from 'react-router-dom';
const Peep = ({ peep, loading }) => {
  const { user, setReload } = useAppContext();
  const [submitting, setSubmitting] = useState(false);

  const deleteButton = async (post_id) => {
    setSubmitting(true);
    console.log('deleting');
    try {
      const response = await fetch(
        `https://chitter-backend-api-v2.herokuapp.com/peeps/${post_id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Token token=${user.session_key}`,
          },
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
    <div data-testid='peep-test' className='peep-container'>
      {loading && <span>Loading</span>}
      {peep && peep.user ? (
        <>
          <div>@{peep.user.handle}</div>

          <div>{peep.body}</div>
          <div>{user ? <Like post_id={peep.id} /> : null}</div>

          <div>Likes: {peep.likes.length}</div>
         

          <Link to={`/peeps/${peep.id}`}>View peep</Link>
          {user ? (
            user.user_id === peep.user.id ? (
              <button
                onClick={() => {
                  deleteButton(peep.id);
                }}
              >
                Delete
              </button>
            ) : null
          ) : null}
        </>
      ) : null}
    </div>
  );
};

export default Peep;
