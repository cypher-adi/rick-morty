import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <h3 className="text-center">
      Seems Like you are LOST. <br /> There is nothing here. <br />
      <Link to="/" className="banner-button">
        Go Home
      </Link>
    </h3>
  );
};

export default NotFound;
