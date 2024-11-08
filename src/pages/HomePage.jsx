import React, { useRef, useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import hobbiton from '../images/hobbiton.jpg'
import stingrayIcon from '../images/DGreenIcon.png'
import oneRing from '../images/oneRing.png'
import mordor from '../images/mordor.png'
import imperials from '../images/imperials.jpeg'
import pelenorFields from '../images/pelenorFields.jpeg'


const HomePage = () => {

    useEffect(() => {
        AOS.init({
            duration: 750,
            once: false,
        })
    }, [])


    // const appContainerRef = useRef(null)
    const scenicOptionsRef = useRef(null)
    const bannerRef = useRef(null)
    const introRef = useRef(null)
    const stingrayRef = useRef(null)

    const parallaxElements = [
        { ref: bannerRef, speed: 0.20, direction: 'down' },
        { ref: introRef, speed: 0.3, direction: 'up' },
        { ref: stingrayRef, speed: 0.75, direction: 'up' },
    ];
    const [opacity, setOpacity] = useState(0)



    const handleParallax = () => {
        const scrollPosition = window.scrollY
        // Loop through each element and apply the parallax effect
        parallaxElements.forEach(({ ref, speed, direction }) => {
            if (ref.current) {
                // If the direction is 'up', we apply negative translation, otherwise, apply positive
                const translation = scrollPosition * speed

                ref.current.style.transform = `translateY(${direction === 'up' ? -translation : translation}px)`
            }
        })
        // Fade effect for oneRing based on scroll position
        if (scenicOptionsRef.current) {
            const scenicOptionsRect = scenicOptionsRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            // Calculate the center of the `scenicOptions` div
            const scenicOptionsCenter = (scenicOptionsRect.top + scenicOptionsRect.bottom) / 2;
            // Calculate the middle of the viewport
            const windowCenter = windowHeight / 2;
            // Calculate opacity based on how close the center of the div is to the middle of the viewport
            const distanceFromCenter = Math.abs(windowCenter - scenicOptionsCenter);
            const newOpacity = Math.min(Math.max(1 - distanceFromCenter / windowHeight, 0), 1);
            setOpacity(newOpacity);
        }
    }
    useEffect(() => {
        // Add event listener to handle scroll
        window.addEventListener('scroll', handleParallax)
        // Cleanup event listener on unmount
        return () => window.removeEventListener('scroll', handleParallax)
    }, [parallaxElements])



    return (
        <>
            <img className='bannerImage' ref={bannerRef} src={hobbiton} alt='banner image' />

            <div className='scrollContent'>
                <img className='stingrayIcon' src={stingrayIcon} alt='brandIcon' ref={stingrayRef} />

                <div className='introduction' ref={introRef}>
                    <h2>Introduction</h2>
                    <p>Hello! I'm Ben!</p>
                </div>

                {/* Scenic options */}
                <img className='oneRing' src={oneRing} alt='the one ring' style={{ opacity: opacity, }} />
                <div className='scenicOptions' ref={scenicOptionsRef}>
                    <div data-aos="flip-down" data-aos-offset="300" className='scenicItem'>
                        <h1>Miniatures</h1>
                        <img className='linkIcon' src={imperials} alt='warriors' />
                    </div>
                    <div data-aos="flip-down" data-aos-offset="300" className='scenicItem'>
                        <h1>Terrain</h1>
                        <img className='linkIcon' src={pelenorFields} alt='warriors' />
                    </div>
                    <div data-aos="flip-down" data-aos-offset="300" className='scenicItem'>
                        <h1>Store</h1>
                        <img className='linkIcon' src={imperials} alt='warriors' />
                    </div>
                    <div data-aos="flip-down" data-aos-offset="300" className='scenicItem'>
                        <h1>Contact</h1>
                        <img className='linkIcon' src={imperials} alt='warriors' />
                    </div>
                </div>

            </div>

            <div className='copyright'>
                <p>@barbed_stingray 2024</p>
                <img className='mordor' src={mordor} alt='the one at mordor' />
            </div>
        </>
    )
}

export default HomePage
