import React from 'react'
import './css/about.css'
import member1 from '../Components/Assets/images/team/disara.jpg'
import member2 from '../Components/Assets/images/team/navindu.jpg'
import member3 from '../Components/Assets/images/team/dushyantha.jpg'
import member4 from '../Components/Assets/images/team/kushana.jpg'

const About = () => {
  return (
    <div className='about'> 
    <div className="intro">
      <h1>About Us </h1>
      
      <p >“UniStore” is an innovative online web-platform designed to foster a vibrant exchange within university 
    communities, aimed to promote sustainable reuse, and support small businesses owned by university 
    undergraduates. UniStore comprises two separate sections: "Preloved" and "CraftsWorld," each 
    dedicated to enhancing and supporting undergraduate experiences and their entrepreneurial endeavors.
    </p>

      </div>
      
    <div className="team">
    <h1>Meet the Team</h1>
      <img src={member1} alt="" />
      <img src={member2} alt="" />
      <img src={member3} alt="" />
      <img src={member4} alt="" />
    </div>
    <h2>What We Aim For...</h2>
    <h3>Facilitating Sustainable Practices by Creating a Platform for Resource Accessibility:</h3>
    <p>UniStore aims to encourage sustainable habits within the student community by promoting the reuse 
and upcycling of preloved items. By providing a platform for sharing and purchasing pre-owned goods, 
it reduces waste and supports a more eco-conscious lifestyle among students. UniStore enables the 
exchange of preloved items, ensuring that crucial resources such as textbooks, electronics, furniture, 
and more are readily available and affordable for all students.
</p>
    <h3>Promoting Creative Expression and Empowering Student Entrepreneurs</h3>
    <p>The platform serves as a Launchpad for undergraduate entrepreneurs by showcasing and selling their 
handmade crafts that express their artistic skills and creativity. UniStore’s CraftsWorld section supports 
and encourages undergraduates to transform their creative skills into viable small businesses, promoting 
entrepreneurship within the undergraduate community.</p>
    <h3>Foster a Sense of Community</h3>
    <p>UniStore aims to create a sense of belonging and community spirit among students by facilitating 
exchanges between seniors and juniors. By sharing preloved items, students establish connections and 
support networks within their university environment.
</p>
    </div>
    
  )
}

export default About