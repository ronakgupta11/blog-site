import React, { useEffect } from 'react'
import { client, urlFor } from '@/sanityClient'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Placeholder from '@/components/placeholder'
import {PortableText} from '@portabletext/react'

const PostPage = () => {
  const router = useRouter()
  // const id = router.asPath.slice(7)
  const id = router.query.id || router.asPath.slice(7)

  const [data,setData] = useState(null)
  useEffect(()=>{
    async function fetchD(){

      
      const postData = await client.fetch(`*[_type == "post" && slug.current == "${id}"]`)
      setData(postData[0])
    }

    fetchD()
  },[data])
  console.log(data)


  return (
    <main className="min-h-screen md:w-3/4 m-auto">
    {!data && <Placeholder/>}
   {data && <div className='w-full sm:px-24 p-4 flex flex-col space-y-4'>
      <div className='text-black font-bold text-xl sm:text-4xl m-auto text-center'>
        {data?.title}
      </div>
      <div className='font-semibold text-gray-600 mx-auto text-lg text-center'>
        {data?.short_description}
      </div>
      <img src={urlFor(data?.mainImage).url()}></img>
      <div className='my-16 text-justify '>

      <PortableText
  value={data?.body}
  
/>
  </div>
    </div>}
    </main>

  )
}

export default PostPage