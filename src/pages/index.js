import React from 'react';
import Navbar from '../components/navbar';
import NewPost from '../components/newPost';
import { useAppContext } from '../lib/contextLib';

import PeepsFetch from '../peeps/peepsFetch';
const Home = () => {
  const { user } = useAppContext();

  return (
    <div>
      <Navbar />
      {user ? (
        <>
          <span>Hello {user.user_id}</span>
          <NewPost user_id={user.user_id} session_key={user.session_key} />
        </>
      ) : null}

      <PeepsFetch newPost={<NewPost />} />
    </div>
  );
};

export default Home;
