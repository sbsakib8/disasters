import React from 'react'

function Newincident() {
  return (
    <div className='container px-8 md:px-0'>
    <div className='flex flex-col items-center py-40 px-4'>
        <div className='mb-10 space-y-4'>
            <h3 className='newincident_title'>Lets give the incident a title?</h3>
            <p className='newincident_paragraph'>Make a title that will easily identify the incidents</p>
            <input className=' w-full h-[50px] rounded-lg py-3 px-2 bg-secondary' type="text" placeholder='Add title here'/>
        </div>

        <div className=' space-y-4'>
            <h3 className='newincident_title'>
            Describe what happened during the incident?
            </h3>
            <p className='newincident_paragraph'>Share some information about the incident. The when, where, how. </p>
            <textarea className='  resize-none rounded-lg py-3 px-2 bg-secondary' rows="4" cols="50" placeholder='Type here'/>
        </div>
    </div>
    </div>
  )
}

export default Newincident