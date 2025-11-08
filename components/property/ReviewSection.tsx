import axios from 'axios';
import { useState, useEffect } from 'react';

interface Review {
  id: number;
  comment: string;
  rating?: number;
  user?: {
    name?: string;
  };
}

interface ReviewSectionProps {
  propertyId: string | number;
}

const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // ✅ Replace with your backend API base URL if needed
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${propertyId}/reviews/`
        );
        setReviews(response.data);
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError('Failed to load reviews. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (propertyId) {
      fetchReviews();
    }
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (error) {
    return <p className='text-red-500'>{error}</p>;
  }

  if (reviews.length === 0) {
    return <p>No reviews yet for this property.</p>;
  }

  return (
    <div className='space-y-4'>
      <h3 className='text-lg font-semibold mb-2'>Guest Reviews</h3>
      {reviews.map((review) => (
        <div
          key={review.id}
          className='p-4 border rounded-lg bg-gray-50 shadow-sm'
        >
          {review.user?.name && (
            <p className='font-medium text-gray-800'>{review.user.name}</p>
          )}
          {review.rating && (
            <p className='text-yellow-500 text-sm mb-1'>
              {'⭐'.repeat(review.rating)}
            </p>
          )}
          <p className='text-gray-700'>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
