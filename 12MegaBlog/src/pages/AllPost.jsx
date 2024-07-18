import { useEffect, useState } from 'react'
import React  from 'react'
import service from '../appwrite/config'
import { PostCard,Contanier } from '../components'

function AllPost() {
    const [post,setPost]=useState([])
    useEffect(()=>{},[])
    service.gestPosts([]).then((post)=>{
        if (post) {
            setPost(post.documents)
        }
    })
  return (
    <div className='py-8 w-full'>
        <Contanier>
            <div className="flex flex-wrapper
            ">

            {post.map((post)=>(
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard post={post}/>
                </div>
            ))}
            </div>
        </Contanier>
    </div>
  )
}

export default AllPost