import React, { useEffect, useState } from 'react'
import axios from "axios";
const BlogPage = () => {
  
  const [blogs, setBlogs] = useState([]);

  const fetchblogs=async()=>{
     
    const {data}=await axios.get("./api/blogs");

    setBlogs(data);


  }

  useEffect(() => {
     
    fetchblogs();
  
  }, [])
  


  return (


    <div>
     {
      blogs.map((blogs)=>(
        
       <div key={blogs._id}>{blogs.chatName} </div>

      ))
     }

    </div>


  )
}


export default BlogPage