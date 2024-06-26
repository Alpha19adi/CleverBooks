/* eslint-disable no-unused-vars */
import React from 'react'
import "./Hero.css"
import icon from "../../assets/icon.png"
import right from "../../assets/right.svg"
const Hero = () => {
    return (
        <div className='max-w-[100vw] overflow-hidden'>
            <div>
            <nav className='bg-[#151218] text-white flex justify-start items-start w-screen overflow-hidden min-h-20 lg:justify-around pl-0 -mt-2 lg:items-center'>
                <div className='flex'>
                    {/* <img className='bg-transparent w-10' src={icon} alt="" /> */}
                    <h1 className='text-3xl .raleway-bold font-semibold mt-2 pl-7 lg:-pl-10  lg:mt-0 '>CleverBooks</h1>
                </div>
                <div className='hidden lg:flex lg: text-base gap-8 font-normal -pl-8 lg:items-center cursor-pointer'>
                    <h3 className='hover:text-[#C67266] hover:transition ease-in-out'>Product</h3>
                    <h3 className='hover:text-[#C67266] hover:transition ease-in-out'>Pricing</h3>
                    <h3 className='hover:text-[#C67266] hover:transition ease-in-out'>Industry</h3>
                    <h3 className='hover:text-[#C67266] hover:transition ease-in-out'>Customer Stories</h3>
                    <h3 className='hover:text-[#C67266] hover:transition ease-in-out'>About</h3>
                    <h3 className='hover:text-[#C67266] hover:transition ease-in-out'>Blog</h3>
                </div>
                <div className='hidden lg:flex gap-10 cursor-pointer justify-center items-center'>
                    <h2 className='bg-mygra bg-clip-text text-transparent font-medium'>Login</h2>
                    <button className='px-6 py-3 rounded-3xl font-medium text-base bg-gradient-to-r from-[#EA8993] to-[#B375D4]'>Talk to Us</button>
                </div>
            </nav>
            <div className='bg-[#151218] text-white w-screen flex flex-row pt-8 pl-7 lg:max-h-[90vh] rounded-br-[130px] rounded-bl-[100px] lg:pl-36 lg:pt-32'>
                <div className='flex flex-col lg:flex-row'>
                    <div className=''>
                        <div>
                            <div className='text-4xl font-semibold w-80 leading-snug lg:text-7xl lg:w-[35rem] lg:leading-snug'>
                                <h1>Every order fulfilled,<span className='bg-mygra text-transparent bg-clip-text'> on time.</span></h1>
                            </div>
                            <div className='text-lg mt-5 w-[93%] lg:w-[87%]'>
                                <p>Eliminate overstocking and under-stocking with CleverBooks . Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.</p>
                            </div>
                            <div className='flex'>
                                <button className='mt-11 px-4 border-2  py-3 rounded-3xl hover:bg-mygra   '>Get Started with CleverBooks</button>
                                <img className='relative top-14 left-4' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d1777671aadb7b8492b5f9_hero-home-cta%20right%20to%20left.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mt-20 lg:-mt-96 overflow-x-hidden'>
                    <img className='absolute right-0' src={right} alt="" /> 
                        <img className='h-[420px] lg:h-[80rem] object-fill' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg" alt="" />
                    </div>
                </div>
            </div>
            </div>
            <div>
             
            </div>
        </div>
    )
}

export default Hero