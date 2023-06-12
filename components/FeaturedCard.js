'use client';

import { Card } from 'flowbite-react';

export default function FeaturedCard() {
  return (
    <div className='flex items-center justify-between h-full space-x-2 p-2'>

    <div className='md:w-1/4 '>

      <img className='w-full rounded' src="image.jpg">
      
      </img>
    </div>
    <div className='flex flex-col justify-center h-full space-y-4 md:max-w-3/4 max-w-1/2 '>

      <h5 className="md:text-4xl text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          Noteworthy technology acquisitions 2021
        </p>
      </h5>
      <p className="font-normal text-sm md:text-lg text-gray-700 dark:text-gray-400">
        <p>
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </p>
      </div>
    
    </div>

  )
}


