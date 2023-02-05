import React from 'react';
import { Link } from 'react-router-dom';
import Peep from './peep';
import './peeps.css';

const Peeps = ({ peeps, loading }) => {
  // console.log('peeps: ', peeps);
  return (
    <div data-testid='peeps-test' className='peeps-container'>
      {loading && <p>Peeps loading...</p>}
      {peeps.length > 0 && (
        <>
          {peeps.map((eachPeep, id) => (
            <div key={id}>
              <Peep peep={eachPeep} loading={loading} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Peeps;
