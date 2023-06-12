'use client';

import { Card } from 'flowbite-react';

export default function PostCard() {
  return (
    <div className='md:w-3/12 m-5 w-3/4'>

    <Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="image.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          Noteworthy technology acquisitions 2021
        </p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </p>
      <p className='text-xs text-gray-500'>
        
            <span>7 june 2022</span> <span>&bull;</span><span> 4 min read</span>
      </p>

    </Card>
    </div>

  )
}

// add post time and time taken to read blog

