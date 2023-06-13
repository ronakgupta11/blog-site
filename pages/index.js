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
<main className=" px-6 my-4">

<h2 className="text-center text-3xl font-bold m-4">Featured Blogs</h2>
<div className="h-64 px-8 md:px-32">

<Crousel/>
</div>
<h2 className="text-center text-3xl font-bold m-4">All Blogs</h2>
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
