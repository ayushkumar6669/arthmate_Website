import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const IpAddressDisplay = () => {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    axios
      .get('https://api.ipify.org/?format=json')
      .then((response) => {
        setIpAddress(response.data.ip);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Your IP Address:</h5>
          <p className="card-text">{ipAddress}</p>
        </div>
      </div>
    </div>
  );
};

export default IpAddressDisplay;
