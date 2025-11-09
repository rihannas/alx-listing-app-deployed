import React from 'react';
import { Star, Bed, Bath, Users, MapPin } from 'lucide-react';
import { PropertyProps } from '@/interfaces';

interface PropertyDetailProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  // Comprehensive safety checks
  if (!property) {
    return (
      <div className='max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8'>
        <div className='text-center py-20'>
          <h1 className='text-2xl font-bold text-gray-900 mb-4'>
            Property Not Found
          </h1>
          <p className='text-gray-600'>
            The property you're looking for doesn't exist or is unavailable.
          </p>
        </div>
      </div>
    );
  }

  // Safe property data with fallbacks
  const safeProperty = {
    id: property.id || '',
    name: property.name || 'Unnamed Property',
    image: property.image || '/default-property.jpg',
    description:
      property.description || 'No description available for this property.',
    rating: property.rating || 0,
    price: property.price || 0,
    discount: property.discount || '',
    category: property.category || [],
    address: property.address || { city: '', country: '' },
    offers: property.offers || { bed: 0, shower: 0, occupants: 0 },
  };

  // Calculate discounted price safely
  const calculatePrice = () => {
    if (safeProperty.discount) {
      const discountValue = parseInt(safeProperty.discount) || 0;
      return Math.round(safeProperty.price * (1 - discountValue / 100));
    }
    return safeProperty.price;
  };

  const displayPrice = calculatePrice();

  return (
    <div className='max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Property Image */}
        <div className='rounded-xl overflow-hidden shadow-md'>
          <img
            src={safeProperty.image}
            alt={safeProperty.name}
            className='w-full h-96 object-cover'
          />
        </div>

        {/* Property Info */}
        <div className='flex flex-col justify-between'>
          <div>
            <h1 className='text-3xl font-bold text-gray-900 mb-3'>
              {safeProperty.name}
            </h1>

            <div className='flex items-center text-gray-600 mb-2'>
              <MapPin className='h-4 w-4 mr-1' />
              <span>
                {safeProperty.address.city || 'Unknown City'},{' '}
                {safeProperty.address.country || 'Unknown Country'}
              </span>
            </div>

            <div className='flex items-center mb-4'>
              <Star className='h-5 w-5 text-yellow-400 fill-current mr-1' />
              <span className='font-semibold'>{safeProperty.rating}</span>
              <span className='ml-2 text-gray-500 text-sm'>
                (Customer Rating)
              </span>
            </div>

            <div className='flex flex-wrap gap-2 mb-6'>
              {safeProperty.category.map((cat, index) => (
                <span
                  key={index}
                  className='px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-md'
                >
                  {cat}
                </span>
              ))}
              {safeProperty.category.length === 0 && (
                <span className='px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-md'>
                  No categories
                </span>
              )}
            </div>

            <p className='text-gray-700 leading-relaxed mb-6'>
              {safeProperty.description}
            </p>

            <div className='flex items-center justify-between text-sm text-gray-700 mb-3'>
              <div className='flex items-center'>
                <Bed className='h-4 w-4 mr-1' />
                <span>{safeProperty.offers.bed} beds</span>
              </div>
              <div className='flex items-center'>
                <Bath className='h-4 w-4 mr-1' />
                <span>{safeProperty.offers.shower} baths</span>
              </div>
              <div className='flex items-center'>
                <Users className='h-4 w-4 mr-1' />
                <span>{safeProperty.offers.occupants} guests</span>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className='border-t pt-4 mt-4'>
            {safeProperty.discount && (
              <p className='text-gray-500 line-through mb-1'>
                ${safeProperty.price}
              </p>
            )}
            <p className='text-3xl font-bold text-gray-900'>
              ${displayPrice}
              <span className='text-base font-normal text-gray-600'>
                /night
              </span>
            </p>

            <button className='mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all'>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
