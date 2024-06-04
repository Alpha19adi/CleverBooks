/* eslint-disable no-unused-vars */
import React from 'react'
import Colorbg from '../../Components/Colorbg'

const Metrices = () => {
    let val1=85;

  return (
    <div>
        <div className='max-w-[100vw] min-h-screen min-w-full bg-[#151218] flex justify-center items-center flex-col '>
           <h1 className='text-white text-[10rem] font-bold'>{val1}<span className='text-5xl'>%</span></h1>
           <h2 className='text-4xl text-white'>Reduction in out-of-stock</h2>
        </div>
        <div className='max-w-[100vw] min-h-screen min-w-full bg-[#151218] flex justify-center items-center flex-col '>
           <h1 className='text-white text-[10rem] font-bold'>25<span className='text-5xl'>Days</span></h1>
           <h2 className='text-4xl text-white'>Reduction in cash recovery time</h2>
        </div>
        <div className='max-w-[100vw] min-h-screen min-w-full bg-[#151218] flex justify-center items-center flex-col '>
           <h1 className='text-white text-[10rem] font-bold'>15<span className='text-5xl'>%</span></h1>
           <h2 className='text-4xl text-white'>Growth in revenue</h2>
        </div>
    </div>
  )
}

export default Metrices