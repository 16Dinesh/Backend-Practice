//test api working

import axios from 'axios';
import { useEffect, useState } from 'react';

const Api = () => {
  const API_URL = 'http://localhost:5000/api/data';
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
};

export default Api;
