import React from 'react'
import './hero.css'
import logo from '../Assets/images/logo.png'

const Hero = () => {
  return (
    <div className='herotop'>
        <div className="logo">
        <img src={logo} alt="" />

        </div>
        
        <div className="hero">
        <p>A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete</p>
        <div className="herobtn">
            <button className='pl'>Preloved</button>
            <button className='cw'>CraftsWorld</button>
        </div>

        </div>
        
    </div>
  )
}

export default Hero