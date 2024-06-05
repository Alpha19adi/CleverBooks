/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import left from "../../assets/left_icon.svg";
import right from "../../assets/right_icon.svg";
import './Review.css';

const Reviews = () => {
    const reviews = [
        {
            image: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651c00235cd9c2cd10fb1976_Samosa%20Party%20Client%20Image.webp",
            text: "D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. CleverBooks  automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see CleverBooks  unlocking for many companies in the future.",
            name: "Diksha Pande",
            position: "Co-founder, Samosa Party",
            image2:"https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddc11c29c3652662f0739_samosa%20party%20image.webp",
            box1:"upto 95%",
            box1_in:"Demand Fulfilment",
            box2:"< 3%",
            box2_in:"Daily Stock-out",
            },
        {
            image: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddd1080709540ff764308_P-Tal%20founder.jpg",
            text: "As Co-founders, we had zero clue on the real time stock levels in our warehouse. It felt like a battle to manually update invoices from EE to Zoho, so that at least some data points can be tracked.While we had already implemented CleverBooks  I had no clue that they could make this API integration work for us and exactly the way we wanted it to work. Thank you team Rahul Vishwakarma & Yogesh Byahatti for identifying the problem and being so quick with the solution, kudos to the amazing team you have",
            name: "Kirti Goel",
            position: "Co-founder,P-TAL",
            image2:"https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664c90f75b0f0e735016706b_P-tal-p-500.webp",
            box1:"Automated Invoice Reconciliation",
            box1_in:"",
            box2:"Channel wise Sales Classification",
            box2_in:"",
        }
    ];

    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    const handleNext = () => {
        setCurrentReviewIndex((currentReviewIndex + 1) % reviews.length);
    };

    const handlePrev = () => {
        setCurrentReviewIndex((currentReviewIndex - 1 + reviews.length) % reviews.length);
    };

    const currentReview = reviews[currentReviewIndex];

    return (
        <div className='min-h-screen mb-6 min-w-full overflow-hidden'>
            <div className='scroller '>
                <div className='flex gap-28 flex-start my-3 move w-full'>
                    <img className='inline-block w-54 ' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64385aaa30f40ffaa9438ea5_swiss%20beauty%201.svg" alt="" />
                    <img className='inline-block w-54' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64385aaac27309c4dfd77888_pilgrim%201.svg" alt="" />
                    <img className='inline-block w-20' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77cae6da5aab64f973a_P-TAL.svg" alt="" />
                    <img className='inline-block w-36' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb510685690c8d8b1bdc_rr%20cable.svg" alt="" />
                    <img className='inline-block w-32' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb50ec11a19b72a44bdd_happilo.svg" alt="" />
                    <img className='inline-block w-48' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/6526695834fd99c7f319053a_MANOHAR.svg" alt="" />
                    <img className='inline-block w-56' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb44c461952406632e27_UNCOVER.svg" alt="" />
                    <img className='inline-block w-60' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb4280dc875e2081fcc1_PLIX.svg" alt="" />
                    <img className='inline-block w-32' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ebeab55128d85b2a8_zavya.svg" alt="" />
                    <img className='inline-block w-32' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64385aabb032484e3993df3d_wow.svg" alt="" />
                    <img className='inline-block w-60' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/652674569fa5bb751d73487e_furlenco%20.svg" alt="" />
                    <img className='inline-block w-32' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c88f37016d6cd94f5_mosaic.svg" alt="" />
                    <img className='inline-block w-32' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c8d12e2df177eeec2_ajanta.svg" alt="" />
                    <img className='inline-block w-32' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c7ce8d5a488d39c51_maisha.svg" alt="" />
                    <img className='inline-block w-32' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958d1b6be6bd4e44c51_sylvi.svg" alt="" />
                    <img className='inline-block w-32' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/652673d679d1942e616b3675_everloom.svg" alt="" />
                </div>
            </div>
            <div className='bottom flex-col justify-start items-center lg:flex-row-reverse -mt-8 mx-9 transform-cpu transition-opacity duration-500'>
                <div className='lg:flex lg:flex-row-reverse mt-9 '>
                    <div className='right mt-10 mx-2 lg:w-[50%] transition-opacity duration-500 '>
                        <img className='rounded-3xl mx-9 transition-opacity duration-500' src={currentReview.image2}alt="" />
                    </div>
                    <div className='left flex justify-start flex-col ml-4 mt-20 lg:w-1/2 lg:mx-10'>
                        <div>
                            <p className='text-lg font-normal text-gray-600'>{currentReview.text}</p>
                        </div>
                        <div className='flex justify-start items-center'>
                            <div className='mt-10 flex flex-col gap-8 ml-2 '>
                                <div className='flex flex-row ' >
                                    <div>
                                        <img className='w-14 mr-5 rounded-full ' src={currentReview.image} alt="" />
                                    </div>
                                    <div className=''>
                                        <div className='font-semibold'>{currentReview.name}</div>
                                        <div>{currentReview.position}</div>
                                    </div>
                                </div>
                                <div className='gap-3 flex lg:flex lg:gap-4 '>
                                    <button className='w-10 border-pink-400 border-2 rounded-full ' onClick={handlePrev}><img src={left} alt="" /></button>
                                    <button className='w-10 border-pink-400 border-2 rounded-full ' onClick={handleNext}><img src={right} alt="" /></button>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-10 mt-10'>
                            <div className='h-18 w-1/2 bg-mygra bg-clip-text text-transparent shadow-lg py-3 flex-col justify-center text-center items-center rounded-3xl text-4xl  font-semibold'>{currentReview.box1}<br /><span className='text-lg text-black font-normal'>{currentReview.box1_in}</span></div>
                            <div className='h-18 w-1/2 bg-mygra bg-clip-text text-transparent py-3 shadow-lg flex-col justify-center text-center items-center rounded-3xl text-4xl  font-semibold'>{currentReview.box2}<br /><span className='text-lg text-black font-normal'>{currentReview.box2_in}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;