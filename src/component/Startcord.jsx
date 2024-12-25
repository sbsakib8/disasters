import React from 'react'
import Corddata from '../data/cord/Corddata'
import cn from './Cn'
function Startcord() {
  return (
    <div className=' container'>
    {/* main div */}
     <div className='flex flex-col justify-center items-center space-y-7 py-10'>
 {/* title div */}
        <div className='space-y-5'>
            <h1 className='startcordtitle'>Let's get started</h1>
            <p className='startcordparagraph'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>
        </div>
        {/* divide div */}
        <div className=' flex flex-1'>
        <img src="/img/icon/divide.png" alt="divide img" />
        </div>
        {/* cord main div */}
        <div className=' grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {
              Corddata.map((cord) => (
                <div className='startcord ' key={cord.id}>
                 <div> <img src={cord.icon} alt="cord icon" /></div>
                  <div>
                  <h2 className='cordh2'>{cord.title}</h2>
                  <p className='cordp'>{cord.text}</p>
                  </div>

                </div>
              ))
            }

        </div>
     </div>
    </div>
  )
}

export default Startcord