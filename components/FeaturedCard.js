'use client';

import { Card } from 'flowbite-react';
import { urlFor } from '@/sanityClient';

export default function FeaturedCard(props) {
  return (
    <div className='flex items-center justify-around h-full space-x-2 p-2'>

    <div className='md:w-1/4 '>

      <img className='w-full rounded' src = {urlFor(props.image).url()}>
      
      </img>
    </div>
    <div className='flex flex-col justify-center h-full space-y-4 md:max-w-3/4 max-w-1/2 '>

      <h5 className="md:text-4xl text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          {props.title}
        </p>
      </h5>
      <p className="font-normal text-sm md:text-lg text-gray-700 dark:text-gray-400">
        
{props.desc}        
      </p>
      </div>
    
    </div>

  )
}


