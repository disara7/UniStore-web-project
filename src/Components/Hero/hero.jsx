import React, {useEffect, useRef} from 'react'
import './hero.css'
import logo from '../Assets/images/logo.png'
import { Link } from 'react-router-dom';

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
        <p>We aim to foster a vibrant exchange within university
          communities, promoting sustainable reuse and supporting
          small businesses owned by university undergraduates,
          enhancing and supporting undergraduate experiences and
          their entrepreneurial endeavors.</p>
        <div className="herobtn">
          <Link to='/Preloved' style={{ textDecoration: 'none' }}>
            <button className='Btn y'>Preloved</button>
          </Link>
          <Link to='/CraftsWorld' style={{ textDecoration: 'none' }}>
            <button className='Btn g'>CraftsWorld</button>
          </Link>

        </div>

        </div>
        <div ref={glowRef} className='glow'></div>
    </div>
  )
}

export default Hero
