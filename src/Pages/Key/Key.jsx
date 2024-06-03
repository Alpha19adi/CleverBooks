/* eslint-disable no-unused-vars */
import React from 'react'
import './Key.css'
import Key_card from '../../Components/Key_card'
const Key = () => {
    return (
        <div>
            <div className='text-xl lg:text-5xl font-bold flex justify-center my-16 lg:my-32'>
                <h1>Four key questions answered by CleverBooks</h1>
            </div>
            <div className='flex flex-col gap-4 justify-center ml-5 mt-5 lg:flex-row mb-28 lg:mx-12'>
                <Key_card tag="What to order" para="Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle." />
                <Key_card tag="When to order" para="Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing." />
                <Key_card tag="How much to stock" para="Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes." />
                <Key_card tag="Where to place" para="Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities." />
            </div>
        </div>
    )
}

export default Key