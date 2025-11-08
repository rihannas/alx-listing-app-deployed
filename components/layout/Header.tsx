import React, { useState } from 'react';
import { Search } from 'lucide-react';

const ACCOMMODATION_TYPES = [
  'Rooms',
  'Mansion',
  'Countryside',
  'Villa',
  'Apartment',
  'Chalet',
];

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className='bg-white shadow-sm border-b sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <h1 className='text-2xl font-bold text-blue-600'>PropertyHub</h1>
          </div>

          {/* Search Bar */}
          <div className='flex-1 max-w-md mx-8'>
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
              <input
                type='text'
                placeholder='Search properties...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
            </div>
          </div>

          {/* Accommodation Types */}
          <div className='hidden lg:flex items-center space-x-6 mr-8'>
            {ACCOMMODATION_TYPES.slice(0, 4).map((type) => (
              <button
                key={type}
                className='text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors'
              >
                {type}
              </button>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className='flex items-center space-x-4'>
            <button className='text-gray-600 hover:text-blue-600 font-medium transition-colors'>
              Sign In
            </button>
            <button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors'>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
