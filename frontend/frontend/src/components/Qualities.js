import React from 'react'
import restapiData from '../restapi.json'; 

const Qualities = () => {

  return (
    <section className='qualities' id ="qualities">
        <div className="container">
            {
                restapiData.data[0].qualities.map((element)=>(
                    <div className='card' key={element.id}>
                        <img src={element.image} alt={element.title} />
                        <p className='title'>{element.title}</p>
                        <p className='description'>{element.description}</p>
                    </div>
                ))}
           </div>
    </section>
  );
};

export default Qualities;