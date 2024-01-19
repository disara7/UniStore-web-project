import React from 'react'
import './craftsworld.css'
import craftsworld_pic from '../../../Components/Assets/images/craftsworld.png'

const CraftsWorld = () => {
  return (
    <div className='craftsworld'>
      <div className="left">
        <h1>CraftsWorld</h1>
        <p>A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete</p>
        <button>Explore</button>
      </div>
      
        
        <div className="right">
          <img src={craftsworld_pic} alt="" />
        </div>
    </div>
  )
}

export default CraftsWorld