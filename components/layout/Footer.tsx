import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-900 text-white text-center p-6 mt-10'>
      <p>© {new Date().getFullYear()} ALX Listing. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
