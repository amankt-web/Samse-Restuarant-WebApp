import React from 'react'
import restApi from '../restapi.json';
// import IMage from '../Images/center.jpg';
import Image2 from '../Images/whoweare.jpg';
export const Services = () => {
  return (
    <section className='who_are_we' id="who_are_we">
        <div className="container">
            <div className="text_banner">
                {
                    restApi.data[0].who_we_are.slice(0,2).map(element =>{
                        return(
                            <div className="card" key={element.id}>
                                <h1 style={{fontWeight: "300"}} className='heading'>{element.number}</h1>
                                <p>{element.title}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="image_banner">
                <img src="{IMage}" alt="Center"  className='gradient_bg'/>
                <img src={Image2} alt="Whoweare"  />
            </div>
            <div className="text_banner">
                {
                    restApi.data[0].who_we_are.slice(2).map(element =>{
                        return(
                            <div className="card" key={element.id}>
                                <h1 style={{fontWeight: "300"}} className='heading'>{element.number}</h1>
                                <p>{element.title}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    </section>
  )
}
