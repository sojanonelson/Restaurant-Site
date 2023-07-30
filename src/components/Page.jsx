import React from 'react'
import image from '../image/image.jpg'

const Page = () => {
  return (
    <div className='page'>
      <img className='image' src={image} alt="bgimg"></img>
        
      <div className='page-content'>
      <h1>Its all about good food & taste</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab odit, nam voluptatem atque ratione sapiente voluptate facilis. Quod eos facilis iure ipsum non dolore, distinctio consequatur animi nisi nostrum aspernatur.</p>

      </div>
    </div>
  )
}

export default Page
