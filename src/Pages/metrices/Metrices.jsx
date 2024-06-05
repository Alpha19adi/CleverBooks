/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import right from '../../assets/right.svg'
gsap.registerPlugin(ScrollTrigger);

const Metrices = () => {
    const val1Ref = useRef(null);
    const val2Ref = useRef(null);
    const val3Ref = useRef(null);

    useEffect(() => {
        const animateValue = (ref, start, end, duration) => {
            gsap.fromTo(
                ref,
                { textContent: start },
                {
                    textContent: end,
                    duration: duration,
                    ease: 'power1.inOut',
                    snap: { textContent: 1 },
                    scrollTrigger: {
                        trigger: ref,
                        start: 'top 80%',
                        toggleActions: 'restart none none none',
                    },
                    onUpdate: function () {
                        ref.textContent = Math.floor(ref.textContent);
                    },
                }
            );
        };

        animateValue(val1Ref.current, 0, 85, 1);
        animateValue(val2Ref.current, 0, 25, 1);
        animateValue(val3Ref.current, 0, 15, 0.5);
    }, []);

    return (
        <div>
            <div className='max-w-[100vw] min-h-screen min-w-full bg-[#151218] flex justify-center items-center flex-col'>
                <h1 className='text-white text-[10rem] font-bold'>
                    <span className='bg-mygra bg-clip-text text-transparent font-extrabold' ref={val1Ref}>0</span><span className='text-5xl'>%</span>
                </h1>
                <h2 className='text-4xl text-white'>Reduction in out-of-stock</h2>
            </div>
            <div className='max-w-[100vw] min-h-screen min-w-full bg-[#151218] flex justify-center items-center flex-col'>
                <h1 className='text-white text-[10rem] font-bold'>
                    <span className='bg-mygra bg-clip-text text-transparent font-extrabold' ref={val2Ref}>0</span><span className='text-5xl'>Days</span>
                </h1>
                <h2 className='text-4xl text-white'>Reduction in cash recovery time</h2>
            </div>
            <div className='max-w-[100vw] min-h-screen min-w-full bg-[#151218] flex justify-center items-center flex-col'>
                <h1 className='text-white text-[10rem] font-bold'>
                    <span className='bg-mygra bg-clip-text text-transparent font-extrabold' ref={val3Ref}>0</span><span className='text-5xl'>%</span>
                </h1>
                <h2 className='text-4xl text-white'>Growth in revenue</h2>
            </div>
        </div>
    );
};

export default Metrices;
