import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-5 pb-2 text-center text-secondary">
      Designed with &hearts; by{' '}
      <a
        href="https:\\github.com\cypher-adi"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: 'none' }}
      >
        Cypher
      </a>{' '}
      &copy; {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
