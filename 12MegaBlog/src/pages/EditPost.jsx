import React from 'react'
import { useEffect,useState } from 'react'
import { Contanier,PostForm } from '../components'
import service from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'


function EditPost() {
    const [post,setPost]=useState([])
    const {slug}=useParams()
    const navigate=useNavigate()
    useEffect(()=>{
        if (slug) {
            service.gestPosts(slug).then((post)=>{
                if (post) {
                    setPost(post)
                }
            })
        }else{
            navigate('/')
        }
    },[slug,navigate])
      return post ? (
    <div className='py-8'>
        <Contanier>
            <PostForm post={post}/>
        </Contanier>
    </div>
  ) :null
}

export default EditPost