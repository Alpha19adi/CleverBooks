/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Key_card = ({img, tag, para }) => {
    return (
        <div className='flex items-center justify-center'>
            <div className='bg-[#ece2fc] flex flex-col space-y-5 rounded-3xl w-[90%] max-w-[520px] h-[280px] lg:h-[320px] p-6  ' >
                <img className='w-12' src={img} alt="Decorative icon" />
                <h1 className='text-xl lg:text-2xl font-semibold'>{tag}</h1>
                <p className='text-base font-normal'>{para}</p>
            </div>
        </div>
    )
}

export default Key_card