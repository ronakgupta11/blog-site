import Crousel from "@/components/Crousel";

import PostCard from "@/components/PostCard";
import {client} from "../sanityClient"

 const posts = await client.fetch(`*[_type == "post"]`);


export default function Home() {
  const renderedPosts = posts?.map(
    p=>
  <PostCard image = {p.mainImage} title = {p.title} desc = {p.short_description} id ={p.slug.current} key = {p.slug.current} date = {p.publishedDate} time = {p.reatTime}/>
  )
return (
<main className=" px-6 my-12 flex flex-col space-y-10">

<h2 className="text-center text-2xl font-semibold text-gray-600 m-4 underline tracking-wide">Featured Blogs</h2>
<div className="h-64 px-8 md:px-32 !cursor-pointer">

<Crousel/>
</div>
<h2 className="text-center text-2xl font-semibold text-gray-600 m-4 underline tracking-wide mt-4">All Blogs</h2>
<div className="flex flex-wrap items-center justify-center ">

  {/* <PostCard/>
  <PostCard/>
  <PostCard/>
  <PostCard/>
  <PostCard/>
  <PostCard/>
  <PostCard/> */}
  {renderedPosts}

</div>
{/* <FooterDef/> */}
</main>
  )
}
