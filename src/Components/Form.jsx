/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

const Form = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className='fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center backdrop-blur'>
      <div className='w-3/4 bg-purple-100 lg:w-[38rem] py-2 lg:h-[44rem] text-center rounded-3xl flex flex-col items-center justify-start relative'>
        <button onClick={onClose} className='absolute top-4 right-4 text-xl text-black font-bold'>&times;</button>
        <div className='flex flex-col gap-6 w-full'>
          <h1 className='text-4xl font-semibold'>Get Started with Crest</h1>
          <h4 className='text-lg font-normal'>Take a free tour of the platform</h4>
          <div className='flex flex-col w-full items-start px-12 gap-2'>
            <h4 className='text-lg'>First name*</h4>
            <input className='w-full rounded-3xl h-12 px-3' type="text" placeholder='Neil' />
            <h4>Last name*</h4>
            <input className='w-full rounded-3xl h-12 px-3' type="text" placeholder='Nair' />
            <h4>Work email*</h4>
            <input className='w-full rounded-3xl h-12 px-3' type="text" placeholder='neil@getclever.ai' />
            <h4>Phone number*</h4>
            <input className='w-full rounded-3xl h-12 px-3' type="text" placeholder='Enter Your Phone Number Here' />
            <h4>Company name*</h4>
            <input className='w-full rounded-3xl h-12 px-3' type="text" placeholder='CleverBooks' />
            <div className='w-full flex flex-col items-center mt-3 gap-4'>
              <button className='px-5 py-2 rounded-3xl text-white bg-mygra'>Submit</button>
              <h1 className='font-semibold'>Already have an account? <a className='bg-mygra bg-clip-text text-transparent' href="#">Log In</a></h1>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Form;