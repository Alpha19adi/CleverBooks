import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='min-h-screen min-w-full bg-[#151218] text-white flex justify-center items-center px-8 pr-6 lg:gap-96'>
            <div className='left w-1/2 flex items-start -mt-60 lg:flex-col lg:gap-10 lg:-mt-0 lg:w-[33%]'>
                <h1 className='text-3xl font-semibold lg:text-5xl'>CleverBooks</h1>
                <p className='hidden lg:block text-gray-300'>Crest is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimise space and fulfil every order.</p>
            </div>
            <div className='right flex flex-col gap-8 w-[33%]'>
                <h1 className='font-semibold text-lg'>Contact Crest</h1>
                <h1 className='text-gray-300'>sales@getcrest.ai</h1>
                <h1 className='text-gray-300'>Registered Office:
                    1507, Incubex, 11th cross road, 19th Main Road, Bengaluru, India. 560102
                </h1>
                <h1 className='text-gray-300'>
                    Corporate Office:
                    291, All Time Space, 4th Floor,
                    15th A Cross, Sector - 6,
                    HSR Layout, Bengaluru,
                    India. 560102
                </h1>
            </div>
            </div>
        </div>
    )
}

export default Footer