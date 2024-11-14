import React, { useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  useEffect(() => {
    axios.get('http://localhost:5000')
      .then(response => {
        console.log(response.data);
      })
      .catch(err => console.error('Error:', err));
  }, []);

  return <div>Welcome to Campus Connect!</div>;
};
