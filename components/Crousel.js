'use client';
import React from 'react'

import { Carousel } from 'flowbite-react';
import NavbarDef from './NavbarDef';
import FeaturedCard from './FeaturedCard';

const Crousel = () => {
  return (


    <Carousel className='shadow-md' >
      <div className=" h-full  bg-gray-50 items-center justify-center dark:text-white">
        <FeaturedCard/>
      </div>
      <div className=" h-full  bg-gray-50 items-center justify-center  dark:text-white">
      <FeaturedCard/>
        
      </div>
      <div className=" h-full  bg-gray-50 items-center justify-center  dark:text-white">
      <FeaturedCard/>

      </div>
    </Carousel>
  )
}





export default Crousel