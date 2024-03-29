import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Sandwich  from '../Images/sandwich.jpg';
import { Link } from 'react-router-dom';

import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
const Success = () => {
  const [countdown ,setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(()=>{
    const timeoutId = setInterval(()=>{
      setCountdown((preCount)=>{
        if(preCount === 1){
          clearInterval(timeoutId);
          navigate('/');
        }
        return preCount-1;
      });
    }, 1000);
    return () => clearInterval(timeoutId);
    },[navigate]);
  return (
    <section className='notFound'>
      <div className="container">
        <img src={Sandwich} alt="sandwich" />
        <h1>Redirecting to Home in {countdown} seconds..</h1>
        <Link to='/'>BAck to Home <span><HiOutlineArrowNarrowRight/></span></Link>
      </div>

    </section>
  )
}

export default Success