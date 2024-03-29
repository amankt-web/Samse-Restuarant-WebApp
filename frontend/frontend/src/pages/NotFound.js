import React from 'react'
import notfound from '../Images/notFound.jpg';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
const NotFound = () => {
  return (
    <section className='notFound' id='notFound'>
      <div className="container">
        <img src={notfound} alt="notFound"/>
        <h1>LOOKS LIKE YOU'RE LOST </h1>
        <p>We can't seem to find you </p>
        <Link to={'/'} >Back to Home <span><HiOutlineArrowNarrowRight/></span></Link>
      </div>
    </section>
  )
}

export default NotFound;