import React from 'react'
import './content.css'
import content_pic from '../Assets/images/circuit.png'

const Content = () => {
  return (
    <div className='content'>
        <div className="left">
            <h1>Upcycling for the Win!</h1>
            <p>A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete</p>
            <button>Become a Seller</button>
            <button>Become a Giver</button>
        </div>
        <div className="right">
            <img src={content_pic} alt="" />
        </div>
    </div>
    
  )
}

export default Content