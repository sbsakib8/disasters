import React from 'react'
import Incidentdata from '../data/incident/Incidentdata'
function Incident() {
  return (
    <>
    {/* main div */}
      <div className=' flex flex-col justify-center items-center py-10'>
        {/* title div */}
        <div>
        <h1 className=' incident_title'>Which of these best describes the incident?</h1>
        </div>
        {/* icon div */}
        <div className='incident_div'>
           {
              Incidentdata.map((item) => (
                <div className=' incident_icon_div ' key={item.id}>
                  <img className=' inline-block' src={item.icon} alt={item.title} />
                  <h2 className='incident_text'>{item.title}</h2>
                  
                </div>
              ))
           }
        </div>
      </div>
    </>
  )
}

export default Incident