import React from 'react'
import './preloved.css'
import preloved_pic from '../../../Components/Assets/images/preloved.png'


const Preloved = () => {
  return (
    <div className='preloved'>
      <div className="left">
        <h1>Preloved</h1>
        <p>A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete</p>
        <button>Explore</button>
      </div>
      
        
        <div className="right">
          <img src={preloved_pic} alt="" />
        </div>
    </div>
    
  )
}

export default Preloved