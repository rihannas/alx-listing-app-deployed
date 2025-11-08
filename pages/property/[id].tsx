import { useRouter } from 'next/router';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PropertyDetail from '@/components/property/PropertyDetail';
import { PropertyProps } from '@/interfaces';

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<PropertyProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return; // Wait for router to provide id

      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${id}`
        );
        setProperty(response.data);
      } catch (err) {
        console.error('Error fetching property details:', err);
        setError('Failed to load property details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen text-lg text-gray-600'>
        Loading property details...
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex justify-center items-center h-screen text-red-500'>
        {error}
      </div>
    );
  }

  if (!property) {
    return (
      <div className='flex justify-center items-center h-screen text-gray-600'>
        Property not found.
      </div>
    );
  }

  return <PropertyDetail property={property} />;
}
