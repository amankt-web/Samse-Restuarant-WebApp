import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import about from '../Images/about.jpg';
const About = () => {
  return (
    <section className='about' id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing we are serious about our food!</p>
                </div>
                <p className='mid'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem molestiae eius non? Nesciunt, aliquid. Adipisci reiciendis magnam fugiat esse provident vel dicta cumque temporibus consectetur qui voluptatem, beatae repellendus quas.</p>
                <Link to={"/"}>Explore Menu <span> <HiOutlineArrowNarrowRight/>   </span></Link>
            </div>
            <div className="banner">
                <img src={about} alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About;