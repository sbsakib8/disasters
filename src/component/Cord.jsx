import React from 'react'
import Deshboarddata from '../data/dashboard/Dashboarddata'
function Cord() {
  return (
    <div className='dashboard'>
       {
        Deshboarddata.map((item) => (
          <div className=' w-[306px] h-[337px]' key={item.id}>
            <img className=' w-306px h-[253px]' src={item.img} alt="" />
            <h2 className='cordtitle'>{item.title}</h2>
            <p className='cordtext'>{item.text}</p>
            <h4 className='cordmoney'>{item.money}</h4>
          </div>
        ))
       }
    </div>
  )
}

export default Cord