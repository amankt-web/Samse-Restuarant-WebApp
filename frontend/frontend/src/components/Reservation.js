import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Reserved from '../Images/reservation.jpg'

const Reservation = () => {
    const [firstName, setFirstName]  = useState("");
    const [lastName, setLastName]  = useState("");
    const [email, setEmail]  = useState("");
    const [date, setDate]  = useState("");
    const [time, setTime]  = useState("");
    const [phone, setPhone]  = useState(0);
    const navigate = useNavigate();
    const handleReservation = async(e) =>{
        e.preventDefault();
        try {
            const {data} = await axios.post("http://localhost:5044/api/v1/reservation/send",{firstName, lastName, email, phone,date,time},
            {
                headers:{'Content-Type':'application/json'},
                withCredentials:true
            });
            toast.success(data.message);
            setFirstName("");
            setLastName("");
            setPhone(0);
            setDate("");
            setEmail("");
            setTime("");
            navigate("/success");

        } catch (error) {
            toast.error(error.response.data.message);   
        }
    }

  return (
    <section className='reservation' id='reservation'>
        <div className="container">
            <div className="banner">
                <img src={Reserved} alt="Reservation" />
            </div>
            <div className="banner">
                <div className="reservation_form_box">
                    <h1>Make a Reservation</h1>
                    <p>For Further questions, please Call</p>
                    <form action="">
                        <div>
                            <input type="text" placeholder='First Name' value={firstName} onChange={(e)=>
                            setFirstName(e.target.value)
                            } />
                            <input type="text" placeholder='Last Name' value={lastName} onChange={(e)=>
                            setLastName(e.target.value)
                            } />
                            

                        </div>
                        <div>
                        
                            
                            <input type="text" placeholder='Date' value={date} onChange={(e)=>
                            setDate(e.target.value)
                            } />
                            <input type="text" placeholder='Time' value={time} onChange={(e)=>
                            setTime(e.target.value)
                            } />
                        </div>
                        <div>
                        <input type="text" placeholder='Email' value={email} onChange={(e)=>
                            setEmail(e.target.value)
                            } />
                            <input type="text" placeholder='Phone' value={phone} onChange={(e)=>
                            setPhone(e.target.value)
                            } />
                            
                        </div>
                        <button type='submit' onClick={handleReservation}>
                                RESERVE NOW 
                                <span>
                                    <HiOutlineArrowNarrowRight/>
                                </span>
                            </button>
                    </form>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Reservation