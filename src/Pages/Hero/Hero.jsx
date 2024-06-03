/* eslint-disable no-unused-vars */
import React from 'react'
import "./Hero.css"
import icon from "../../assets/icon.png"
const Hero = () => {
    return (
        <div>
            <nav className='bg-[#151218] text-white flex justify-start items-start w-screen min-h-20 lg:justify-around pl-0 -mt-2 lg:items-center'>
                <div>
                    {/* <img className='bg-transparent' src={icon} alt="" /> */}
                    <h1 className='text-3xl .raleway-bold font-semibold mt-2 pl-7 lg:-pl-10  lg:mt-0 '>CleverBooks</h1>
                </div>
                <div className='hidden lg:flex lg: text-base gap-8 font-normal -pl-8 lg:items-center cursor-pointer'>
                    <h3>Product</h3>
                    <h3>Pricing</h3>
                    <h3>Industry</h3>
                    <h3>Customer Stories</h3>
                    <h3>About</h3>
                    <h3>Blog</h3>
                </div>
                <div className='hidden lg:flex gap-10 cursor-pointer justify-center items-center'>
                    <h2>Login</h2>
                    <button className='px-6 py-3 rounded-3xl font-medium text-base bg-gradient-to-r from-[#EA8993] to-[#B375D4]'>Talk to Us</button>
                </div>
            </nav>

            <div className='bg-[#151218] text-white w-screen flex flex-row pt-8 pl-7 lg :min-h-[cal(100vh-80px)] lg:pl-36 lg:pt-32'>
                <div className='flex flex-col lg:flex-row'>
                    <div className=''>
                        <div>
                            <div className='text-4xl font-semibold w-80 leading-snug lg:text-7xl lg:w-[35rem] lg:leading-snug'>
                                <h1>Every order fulfilled, on time.</h1>
                            </div>
                            <div className='text-lg mt-5 w-[93%] lg:w-[61%]'>
                                <p>Eliminate overstocking and under-stocking with Crest. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.</p>
                            </div>
                            <div className='flex '>
                                <button className='mt-11 px-4 border-2 bg-inherit py-3 rounded-3xl '>Get Started with CleverBooks</button>
                                <img className='relative top-14 left-4' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d1777671aadb7b8492b5f9_hero-home-cta%20right%20to%20left.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mt-20 lg:-mt-96'>
                        <img className='h-[420px] lg:h-[80rem]' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero