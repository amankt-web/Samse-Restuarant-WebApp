import React from 'react'
import restApi from '../restapi.json';

export const Team = () => {
  return (
    <section className='team' id=' team'>
        <div className="container">
            <div className="heading_section">
                <h1 className='heading'>OUR TEAM </h1>
                <p>With the help of this team we created a website , where an user creation website searching for an economic web times of 
                    restaurant and leaning towards the pattern behaviour.
                </p>
            </div>
            <div className="team_container">
                {
                    restApi.data[0].team.map((element) =>{
                        return(
                            <div className="card" key={element.id}>
                                <img src={element.image} alt={element.name} />
                                <h3>{element.name}</h3>
                                <p>{element.designation}</p>
                            </div>
                            
                        )
                    })
                }
            </div>
            
        </div>
    </section>
  )
}
