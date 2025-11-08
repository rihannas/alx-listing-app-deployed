import React from 'react';
import { Star, Bed, Bath, Users, MapPin } from 'lucide-react';
import { PropertyProps } from '@/interfaces';

interface PropertyDetailProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className='max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Property Image */}
        <div className='rounded-xl overflow-hidden shadow-md'>
          <img
            src={property.image}
            alt={property.name}
            className='w-full h-96 object-cover'
          />
        </div>

        {/* Property Info */}
        <div className='flex flex-col justify-between'>
          <div>
            <h1 className='text-3xl font-bold text-gray-900 mb-3'>
              {property.name}
            </h1>

            <div className='flex items-center text-gray-600 mb-2'>
              <MapPin className='h-4 w-4 mr-1' />
              <span>
                {property.address.city}, {property.address.country}
              </span>
            </div>

            <div className='flex items-center mb-4'>
              <Star className='h-5 w-5 text-yellow-400 fill-current mr-1' />
              <span className='font-semibold'>{property.rating}</span>
              <span className='ml-2 text-gray-500 text-sm'>
                (Customer Rating)
              </span>
            </div>

            <div className='flex flex-wrap gap-2 mb-6'>
              {property.category.map((cat, index) => (
                <span
                  key={index}
                  className='px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-md'
                >
                  {cat}
                </span>
              ))}
            </div>

            <p className='text-gray-700 leading-relaxed mb-6'>
              {property.description ||
                'No description available for this property.'}
            </p>

            <div className='flex items-center justify-between text-sm text-gray-700 mb-3'>
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
                <span>{property.offers.occupants} guests</span>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className='border-t pt-4 mt-4'>
            {property.discount && (
              <p className='text-gray-500 line-through mb-1'>
                ${property.price}
              </p>
            )}
            <p className='text-3xl font-bold text-gray-900'>
              $
              {property.discount
                ? Math.round(
                    property.price * (1 - parseInt(property.discount) / 100)
                  )
                : property.price}
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
