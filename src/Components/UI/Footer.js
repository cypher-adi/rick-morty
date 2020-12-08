import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-5 pb-2 text-center text-secondary">
      Designed with &hearts; by{' '}
      <Link
        to="https:\\github.com\cypher-adi"
        style={{ textDecoration: 'none' }}
      >
        Cypher
      </Link>{' '}
      &copy; {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
