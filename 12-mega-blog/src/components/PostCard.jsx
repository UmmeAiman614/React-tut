import React from 'react'
import servive from '../appwrite/config'
import { link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
    return (
        <link to = {`/post/${$id}`} >
            <div className='w-full bg-gray-100 mb-4 p-4 rounded-xl'>
                <div className='w-full justify-center mb-4'>
                    <img src={servive.getFilePreview(featuredImage)} alt={title}  className='rounded-lg'/>
                   
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </link >
  )
}

export default PostCard