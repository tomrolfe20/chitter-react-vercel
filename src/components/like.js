import React, { useState } from 'react';
import { useAppContext } from '../lib/contextLib';
import './like.css';
const Like = ({ post_id }) => {
  const { user, setReload } = useAppContext();
  const [submitting, setSubmitting] = useState(false);

  const handleLike = async () => {
    setSubmitting(true);
    console.log('liking post');
    try {
      const response = await fetch(
        `https://chitter-backend-api-v2.herokuapp.com/peeps/${post_id}/likes/${user.user_id}`,
        {
          method: 'PUT',
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
    <div className='like-container'>
      <button
        className='like-button'
        onClick={() => {
          handleLike();
        }}
      >
        Like
      </button>
    </div>
  );
};

export default Like;
