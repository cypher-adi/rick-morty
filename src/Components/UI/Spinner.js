import React from 'react';
import loader from './Rick_Morty_loader.svg';

const Spinner = () => {
  return (
    <>
      <img src={loader} className="loader mx-auto d-block mt-5" alt="" />
    </>
  );
};

export default Spinner;
