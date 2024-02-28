import React from 'react'
import '../content/content.css'
import content_pic from '../../../Components/Assets/images/content.png'
import { Link } from 'react-router-dom'

const Content = () => {
  return (
    <div className='content'>
            <div className='left'>
            <div className='topic'>
            <h1>Sustainable Upcycling for a Better Tomorrow</h1>   
            </div>
            <p>A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete</p>
            <div className="buttons">
              <div className="herobtn">
                <Link to='/signin'><button className='Btn y'>Become a Giver</button></Link>
                <button className='Btn g'>Become a Seller</button>
              </div>
            </div>
            </div>
            <div className="floatingImg">
                <img src={content_pic} alt="" />
            </div>
            
            
    </div>
    
  )
}

export default Content