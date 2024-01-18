import React from 'react'
import './home.css'
import Hero from '../../Components/Hero/hero'
import Popular from '../../Components/popular/popular'
import Content from '../../Components/content/Content'


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