import React from 'react'
import '../content/content.css'
import content_pic from '../../../Components/Assets/images/content.png'

const Content = () => {
  return (
    <div className='content'>
        <div className="left">
            <h1>Sustainable Upcycling for a Better Tomorrow</h1>
            <p>A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete</p>
            <div className="buttons">
            <div className="giver">
            <button>Become a Giver</button>

            </div>
            <div className="seller">
            <button>Become a Seller</button>
            </div>

            </div>
            
            
        </div>
        <div className="right">
            <img src={content_pic} alt="" />
        </div>
    </div>
    
  )
}

export default Content