import React from 'react'
import blog from '../assets/blog.jpeg'
function Logo({width = '100px'}) {
  return (
    <div>
      <img 
      src={blog} alt="logo" className='rounded-2xl w-20 duration-200 hover:scale-105' />
    </div>
  )
}
 
export default Logo