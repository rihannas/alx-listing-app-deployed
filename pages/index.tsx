import React, { useEffect, useState } from 'react';
import { Star, Bed, Bath, Users, MapPin } from 'lucide-react';
import axios from 'axios';
import { PropertyProps } from '@/interfaces';

const FILTER_OPTIONS = [
  'Top Villa',
  'Self Checkin',
  'Pet Friendly',
  'Free Parking',
  'Mountain View',
  'Beachfront',
  'City View',
  'Private Pool',
];

// Pill Component
interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, active = false, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
      active
        ? 'bg-blue-600 text-white shadow-md'
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
    }`}
  >
    {label}
  </button>
);

// Property Card Component
interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => (
  <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group'>
    <div className='relative'>
      <img
        src={property.image}
        alt={property.name}
        className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
      />
      {property.discount && (
        <div className='absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold'>
          -{property.discount}% OFF
        </div>
      )}
      <div className='absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center'>
        <Star className='h-3 w-3 text-yellow-400 fill-current mr-1' />
        <span className='text-xs font-semibold'>{property.rating}</span>
      </div>
    </div>

    <div className='p-4'>
      <h3 className='font-semibold text-lg mb-2 text-gray-900'>
        {property.name}
      </h3>

      <div className='flex items-center text-gray-600 mb-3'>
        <MapPin className='h-4 w-4 mr-1' />
        <span className='text-sm'>
          {property.address.city}, {property.address.country}
        </span>
      </div>

      <div className='flex flex-wrap gap-1 mb-3'>
        {property.category.slice(0, 2).map((cat, index) => (
          <span
            key={index}
            className='px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md'
          >
            {cat}
          </span>
        ))}
      </div>

      <div className='flex items-center justify-between text-sm text-gray-600 mb-3'>
        <div className='flex items-center'>
          <Bed className='h-4 w-4 mr-1' />
          <span>{property.offers.bed} beds</span>
        </div>
        <div className='flex items-center'>
          <Bath className='h-4 w-4 mr-1' />
          <span>{property.offers.shower} baths</span>
        </div>
        <div className='flex items-center'>
          <Users className='h-4 w-4 mr-1' />
          <span>{property.offers.occupants}</span>
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <div className='text-right'>
          {property.discount && (
            <span className='text-sm text-gray-500 line-through'>
              ${property.price}
            </span>
          )}
          <div className='font-bold text-lg text-gray-900'>
            $
            {property.discount
              ? Math.round(
                  property.price * (1 - parseInt(property.discount) / 100)
                )
              : property.price}
            <span className='text-sm font-normal text-gray-600'>/night</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Main Home Component
const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('');
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<PropertyProps[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch properties from API
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/properties`
        ); // replace with your actual API endpoint
        setProperties(response.data);
        setFilteredProperties(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch properties. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  const handleFilterClick = (filter: string) => {
    if (activeFilter === filter) {
      setActiveFilter('');
      setFilteredProperties(properties);
    } else {
      setActiveFilter(filter);
      const filtered = properties.filter((property) =>
        property.category.some((cat) =>
          cat.toLowerCase().includes(filter.toLowerCase())
        )
      );
      setFilteredProperties(filtered);
    }
  };

  if (loading)
    return <p className='text-center mt-10'>Loading properties...</p>;
  if (error) return <p className='text-center mt-10 text-red-500'>{error}</p>;

  return (
    <>
      {/* Hero Section */}
      <section
        className='relative h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center'
        style={{ backgroundImage: `url('/hero.jpg')` }} // replace with dynamic image if needed
      >
        <div className='absolute inset-0 bg-black/40'></div>
        <div className='relative z-10 text-center text-white px-4'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            Find your favorite place here!
          </h1>
          <p className='text-lg md:text-xl text-gray-200 max-w-2xl mx-auto'>
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className='py-8 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-2xl font-bold mb-6 text-gray-900'>
            Filter by Category
          </h2>
          <div className='flex flex-wrap gap-3'>
            {FILTER_OPTIONS.map((filter) => (
              <Pill
                key={filter}
                label={filter}
                active={activeFilter === filter}
                onClick={() => handleFilterClick(filter)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Listing Section */}
      <section className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center mb-8'>
            <h2 className='text-3xl font-bold text-gray-900'>
              Featured Properties
            </h2>
            <p className='text-gray-600'>
              {filteredProperties.length} properties found
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredProperties.map((property, index) => (
              <PropertyCard
                key={index}
                property={property}
              />
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className='text-center py-12'>
              <p className='text-gray-500 text-lg'>
                No properties found matching your filter.
              </p>
              <button
                onClick={() => {
                  setActiveFilter('');
                  setFilteredProperties(properties);
                }}
                className='mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
              >
                Clear Filter
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
