import React from 'react';
import "./About.css"
import Navbar from './Navbar';
import Footer from './Footer';
import about_bg from "../assets/about_bg.png"

const About = () => {
  return (
    <div>
      <Navbar/>
      <div className='about_main'>
        <div className='about_left'>
            <img src={ about_bg }/>

        </div>
        <div className='about_right'>
            <h1>Best food in town awaits you</h1>
            <p>We offer a delightful fusion of Indian and international cuisines, crafted with the finest ingredients to bring a world of taste to your table. Join us for a memorable dining experience that satisfies every palate</p>
            <h2>Opening hours</h2>
            <p>Weekdays : 9am - 10pm</p>
            <p>Weekends : 8am - 1am</p>


        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
