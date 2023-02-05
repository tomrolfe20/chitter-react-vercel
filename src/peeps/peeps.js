import React from 'react';
import { Link } from 'react-router-dom';
import Peep from './peep';

const Peeps = ({ peeps, loading }) => {
  // console.log('peeps: ', peeps);
  return (
    <div data-testid='peeps-test'>
      {loading && <p>Peeps loading...</p>}
      {peeps.length > 0 && (
        <>
          {peeps.map((eachPeep, id) => (
            <div key={id}>
              <Peep peep={eachPeep} loading={loading} />
              <Link to={`/peeps/${eachPeep.id}`}>Check me out</Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Peeps;
