import React from 'react';
import { useSelector } from 'react-redux';

const NextScreen = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4">
        <h2>User Details</h2>
        <p className="mb-3">Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default NextScreen;
