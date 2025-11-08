import axios from 'axios';
import { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    billingAddress: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Basic form validation
    for (const key in formData) {
      if (!formData[key as keyof typeof formData]) {
        setError('Please fill in all fields.');
        setLoading(false);
        return;
      }
    }

    try {
      // ✅ Use environment variable for API base URL
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings/`,
        formData
      );

      if (response.status === 201 || response.status === 200) {
        setSuccess('✅ Booking confirmed successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          cardNumber: '',
          expirationDate: '',
          cvv: '',
          billingAddress: '',
        });
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error('Axios error:', err.response?.data || err.message);
      } else {
        console.error('Unexpected error:', err);
      }
      setError('❌ Failed to submit booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-sm'>
      <h2 className='text-xl font-semibold mb-4 text-center'>Booking Form</h2>

      <form
        onSubmit={handleSubmit}
        className='space-y-4'
      >
        {Object.keys(formData).map((field) => (
          <input
            key={field}
            type='text'
            name={field}
            value={formData[field as keyof typeof formData]}
            onChange={handleChange}
            placeholder={field.replace(/([A-Z])/g, ' $1')}
            className='w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
        ))}

        <button
          type='submit'
          disabled={loading}
          className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400'
        >
          {loading ? 'Processing...' : 'Confirm & Pay'}
        </button>
      </form>

      {error && <p className='text-red-500 mt-3 text-center'>{error}</p>}
      {success && <p className='text-green-500 mt-3 text-center'>{success}</p>}
    </div>
  );
}
