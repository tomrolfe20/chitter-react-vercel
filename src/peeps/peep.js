import React, { useState } from 'react';
import { useAppContext } from '../lib/contextLib';
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
    <div data-testid='peep-test'>
      {loading && <span>Loading</span>}
      {peep && peep.user ? (
        <>
          <div>{peep.body}</div>
          <div>{peep.user.handle}</div>
          <div>{peep.id}</div>
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
