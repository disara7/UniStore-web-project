import React, {useEffect, useRef} from 'react'
import './hero.css'
import logo from '../Assets/images/logo.png'

const Hero = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      glowRef.current.style.left = x - 100 + 'px';
      glowRef.current.style.top = y - 100 + 'px';
    };
  
    window.addEventListener('mousemove', handleMouseMove);
  
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  

  return (
    <div className='herotop'>
        <div className="logo">
        <img src={logo} alt="" />

        </div>
        <div className="hero">
        <p>A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete</p>
        <div className="herobtn">
            <button className='Btn y'>Preloved</button>
            <button className='Btn g'>CraftsWorld</button>
        </div>

        </div>
        <div ref={glowRef} className='glow'></div>
    </div>
  )
}

export default Hero