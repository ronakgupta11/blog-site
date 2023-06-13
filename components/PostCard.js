'use client';

import { Card } from 'flowbite-react';
import { urlFor } from '@/sanityClient';

export default function PostCard(props) {
  return (
    <div className='md:w-3/12 m-5 w-3/4'>

    <Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc = {urlFor(props.image).url()}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          {props.title}
        </p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>
          {props.desc}
        </p>
      </p>
      <p className='text-xs text-gray-500'>
        
            <span>{props.date}</span> <span>&bull; </span><span>{props.time}</span>
      </p>

    </Card>
    </div>

  )
}

// add post time and time taken to read blog

