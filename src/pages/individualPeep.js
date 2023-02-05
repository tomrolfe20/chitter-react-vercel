import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Peep from '../peeps/peep';
import './individualPeep.css';

const IndividualPeep = () => {
  const [indPeep, setIndPeep] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      setLoading(true);

      const data = await (
        await fetch(
          `https://chitter-backend-api-v2.herokuapp.com/peeps/${params.id}`
        )
      ).json();

      // set state when the data received
      setLoading(false);

      setIndPeep(data);
      // console.log(data[0]);
    };

    dataFetch();
  }, []);

  return (
    <div className='individual-peep-container'>
      <Peep peep={indPeep} loading={loading} />
      <Link to={`/`}>Back</Link>
    </div>
  );
};

export default IndividualPeep;
