import React from 'react'
import Hero1 from '../Images/hero1.jpg';
import threelines from '../Images/threelines.jpg';
import logo from '../Images/logo.jpg';
import Hero2 from '../Images/hero2.jpg';
import Navbar from './Navbar';


const HeroSection = () => {
  return (
    <section className='heroSection' id='herSection'>
        <Navbar/>
        <div className="container">
            <div className="banner">
                <div className="largebox"><h1 className='title'>Delicious</h1></div>
                <div className="combined_boxes">
                    <div className="imageBox">
                        <img src={Hero1} alt="hero1" />
                    </div>
                    <div className="textAndLogo">
                        <div className="textWithSvg">
                            <h1 className='title'>Food</h1>
                            <h1 className='title dishes_title'>Dishes</h1>
                            <img src={threelines} alt="three" />
                            </div>
                            <img src={logo} alt="logo"className='logo' />
                    </div>
                </div>
            </div>

            <div className="banner">
                <div className="imageBox"><img src={Hero2} alt="hero2" /></div>
                <h1 className='title dishes_title'>Dishes</h1>
            </div>
        </div>
    </section>
  )
}

export default HeroSection