/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Form from '../../Components/Form';

const CTA = () => {
  const [form, setForm] = useState(false);

  return (
    <div className='min-w-full flex justify-center items-center min-h-screen bg-[#151218] text-white'>
      <div className='bg-gradient-to-r from-[#EA8993] to-[#B375D4] mx-3 py-4 lg:mx-0 lg:w-[85%] lg:max-h-[10%] lg:py-40 rounded-3xl flex flex-col text-center gap-8 justify-center items-center'>
        <h1 className='text-4xl lg:text-[3.2rem] font-semibold mb-5'>You can grow faster than you think!</h1>
        <p className='w-3/4 text-base lg:w-1/2'>Plan with Crest to fulfil your demand today, and dreams tomorrow. We bring the methods and technologies of large global companies to help brands of all sizes scale.</p>
        <button onClick={() => setForm(true)} className='bg-black w-52 h-12 mt-2 font-medium rounded-full'>Get started with Crest</button>
      </div>
      {form && <Form onClose={() => setForm(false)} />}
    </div>
  );
};

export default CTA;