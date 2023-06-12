import Crousel from "@/components/Crousel";

import PostCard from "@/components/PostCard";





export default function Home() {
  return (
<main className=" px-6 my-4">

<h2 className="text-center text-3xl font-bold m-4">Featured Blogs</h2>
<div className="h-64 px-8 md:px-32">

<Crousel/>
</div>
<h2 className="text-center text-3xl font-bold m-4">All Blogs</h2>
<div className="flex flex-wrap items-center justify-center ">

  <PostCard/>
  <PostCard/>
  <PostCard/>
  <PostCard/>
  <PostCard/>
  <PostCard/>
  <PostCard/>

</div>
{/* <FooterDef/> */}
</main>
  )
}
