import React, { useEffect } from 'react'
import { client } from '@/sanityClient'
import { useRouter } from 'next/router'
import { useState } from 'react'

const PostPage = () => {
  const router = useRouter()
  const id = router.query.id
  const [data,setData] = useState([])
  useEffect(()=>{
    async function fetchD(){

      
      const postData = await client.fetch(`*[_type == "post" && slug.current == "${id}"]`)
      setData(postData)
    }

    fetchD()
  })


  return (
    <div>{console.log(data[0])}</div>
  )
}

export default PostPage