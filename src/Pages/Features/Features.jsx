import React from 'react'
import "./Features.css"

const Features = () => {
    const fet = [{
        title: 'Accurate Demand Forecasting',
        desc: 'Dynamically predict future demand across all channels, with high accuracy and lowest granularity. CleverBooks  takes into account what traditional forecasts dont: trends, real-time market signals, promotional activities, and even logistics disruptions.'
    },
    {
      title: 'HELIX: Workflow Automation',
      desc: 'Build and automate custom S&OP workflows to enhance productivity and streamline your processes. CleverBooks  helps you get a bird eye view of your supply chain, and help you do things a spreadsheet never can.'
  },
    {
      title: 'Automated Purchase Planning',
      desc: 'Never miss an order, and know exactly how much to order, when, and from whom. This is made possible with constant inventory tracking and automated PO generation. What more, CleverBooks  improves with every planning cycle as the data set gets richer.'
  },
  ]

    return (
        <div className='min-w-full min-h-screen flex flex-col gap-8 overflow-x-hidden my-14 lg:my-2'>
            <div className='w-full text-center mt-4 mb-6'>
                <h1 className='text-2xl font-bold lg:text-5xl'>Things your spreadsheet wishes it could do</h1>
            </div>
            <div className='flex flex-col items-center lg:flex-row-reverse'>
                <div className='w-[95%] flex justify-center px-5 bg-mygra py-8 rounded-3xl lg:py-36'>
                    <img className='w-[90%] lg:w-[100%]' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-800.webp" alt="" />
                </div>
                <div className='flex flex-col items-start w-full ml-14 mt-2 gap-7 lg:-mt-40 md:-mt-20'>
                    {fet.map((item, index) => (
                        <div key={index} className='flex flex-col w-full gap-2'>
                            <h1 className='bg-mygra bg-clip-text text-transparent text-2xl font-semibold'>{item.title}</h1>
                            <p className='w-3/4'>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features