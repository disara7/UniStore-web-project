import React from 'react'
import './home.css'
import Hero from '../../Components/Hero/hero.jsx'
import Popular from '../../Components/popular/popular.jsx'
import Content from './content/Content.jsx'


const Home = () => {
  return (
    <div className='home'> 
        
        <Hero/>
        <Popular/>
        <Content/>
    </div>
   

  )
}

export default Home