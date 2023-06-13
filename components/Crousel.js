'use client';
import React from 'react'

import { Carousel } from 'flowbite-react';
import NavbarDef from './NavbarDef';
import FeaturedCard from './FeaturedCard';
import { client } from '@/sanityClient';
const featuredPosts = await client.fetch(`*[_type == "featured"]{post->{
  title,short_description,mainImage,slug
}}`)
const Crousel = () => {


  const renderedCard = featuredPosts?.map((p)=>{
    return(
      <div className=" h-full  bg-gray-50 items-center justify-center dark:text-white">
        <FeaturedCard title = {p.post.title} image = {p.post.mainImage} desc = {p.post.short_description} id ={p.post.slug.current} key ={p.post.slug.current}/>
      </div>

    )
  })
  return (


    <Carousel className='shadow-md' >
      {renderedCard}
    </Carousel>
  )
}





export default Crousel