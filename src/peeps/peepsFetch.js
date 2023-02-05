import React, { useEffect, useState } from 'react';
import Peeps from './peeps';
import { useAppContext } from '../lib/contextLib';

const PeepsFetch = (newPost) => {
  const { reload, setReload } = useAppContext();
  const [peeps, setPeeps] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      setLoading(true);
      console.log('requested fetch');
      const data = await (
        await fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
      ).json();

      // set state when the data received
      setLoading(false);

      setPeeps(data);
      setReload(false);
    };

    dataFetch();
  }, [reload]);

  return <Peeps peeps={peeps} loading={loading} />;
};

export default PeepsFetch;
