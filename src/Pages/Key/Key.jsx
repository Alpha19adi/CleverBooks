/* eslint-disable no-unused-vars */
import React from 'react'
import './Key.css'
import Key_card from '../../Components/Key_card'
const Key = () => {
    return (
        <div className='max-w-[100vw]'>
            <div className='text-xl  lg:text-5xl font-bold flex justify-center my-16 lg:my-32'>
                <h1>Four key questions answered by CleverBooks</h1>
            </div>
            <div className='flex flex-col gap-4 justify-center ml-5 mt-5 lg:flex-row mb-28 lg:mx-12'>
                <Key_card img="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg" tag="What to order" para="Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle." />
                <Key_card img="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0d2fab2e360025df922a_when%20to%20orderr.svg" tag="When to order" para="Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing." />
                <Key_card img="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0cc629ab7f2d8cb0a8bd_how%20much%20to%20stock.svg" tag="How much to stock" para="Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes." />
                <Key_card img="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0c2c27cde81ffea6515b_where%20to%20placee.svg" tag="Where to place" para="Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities." />
            </div>
        </div>
    )
}

export default Key