const BookingForm = () => (
  <div className='bg-white p-6 shadow-md rounded-lg'>
    <h2 className='text-xl font-semibold'>Contact Details</h2>
    <form className='mt-4 space-y-4'>
      {/* Contact Information */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>
          <label className='block'>First Name</label>
          <input
            type='text'
            className='border p-2 w-full mt-2 rounded-md'
          />
        </div>
        <div>
          <label className='block'>Last Name</label>
          <input
            type='text'
            className='border p-2 w-full mt-2 rounded-md'
          />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>
          <label className='block'>Email</label>
          <input
            type='email'
            className='border p-2 w-full mt-2 rounded-md'
          />
        </div>
        <div>
          <label className='block'>Phone Number</label>
          <input
            type='text'
            className='border p-2 w-full mt-2 rounded-md'
          />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className='text-xl font-semibold mt-6'>Pay with</h2>
      <div className='mt-4'>
        <label className='block'>Card Number</label>
        <input
          type='text'
          className='border p-2 w-full mt-2 rounded-md'
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
        <div>
          <label className='block'>Expiration Date</label>
          <input
            type='text'
            className='border p-2 w-full mt-2 rounded-md'
          />
        </div>
        <div>
          <label className='block'>CVV</label>
          <input
            type='text'
            className='border p-2 w-full mt-2 rounded-md'
          />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className='text-xl font-semibold mt-6'>Billing Address</h2>
      <div className='mt-4'>
        <label className='block'>Street Address</label>
        <input
          type='text'
          className='border p-2 w-full mt-2 rounded-md'
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
        <div>
          <label className='block'>City</label>
          <input
            type='text'
            className='border p-2 w-full mt-2 rounded-md'
          />
        </div>
        <div>
          <label className='block'>State</label>
          <input
            type='text'
            className='border p-2 w-full mt-2 rounded-md'
          />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
        <div>
          <label className='block'>Zip Code</label>
          <input
            type='text'
            className='border p-2 w-full mt-2 rounded-md'
          />
        </div>
        <div>
          <label className='block'>Country</label>
          <input
            type='text'
            className='border p-2 w-full mt-2 rounded-md'
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type='submit'
        className='mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md w-full transition'
      >
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;
