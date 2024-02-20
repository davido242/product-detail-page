import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className='py-48 text-center'>
      <p className='py-8'>Your Page is not found dawg!</p>
      <Link href="/" className='border-2 p-4 border-gray-500 mt-4 rounded-lg'>Back to Home</Link>
    </div>
  )
}

export default NotFoundPage;