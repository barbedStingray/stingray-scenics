
// old StingrayScenics

import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useSpring, useInView, useTransform, useScroll, useMotionTemplate, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

import hobbiton from '../images/hobbiton.jpg'
import stingrayIcon from '../images/DGreenIcon.png'
import oneRing from '../images/oneRing.png'
import mordor from '../images/mordor.png'
import imperials from '../images/imperials.jpeg'
import pelennorFields from '../images/pelennorFields.jpeg'
import trolls from '../images/trolls.jpeg'
import rivendellCharge from '../images/rivendellCharge.jpeg'
import droids from '../images/droids.png'



const StingrayScenics = () => {

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
        { ref: bannerRef, speed: 0.15, direction: 'down' },
        { ref: introRef, speed: 0.3, direction: 'up' },
        { ref: stingrayRef, speed: 0.75, direction: 'up' },
    ];
    const [opacity, setOpacity] = useState(0)

    const linkElements = [
        {
            title: 'Miniatures',
            photo: imperials,
            alt: 'Imperial Troopers',
            path: '/miniatures'
        },
        {
            title: 'Terrain',
            photo: trolls,
            alt: 'Three Trolls',
            path: '/'
        },
        {
            title: 'Commission',
            photo: droids,
            alt: 'Droid Squad',
            path: '/'
        },
        {
            title: 'The Hobby',
            photo: rivendellCharge,
            alt: 'Rivendell Charge',
            path: '/'
        },
    ]


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
                    {linkElements.map((item, i) => (
                    <Link key={i} to={item.path} data-aos="flip-down" data-aos-offset="300" className='scenicItem'>
                        <h1>{item.title}</h1>
                        <img className='linkIcon' src={item.photo} alt={item.alt} />
                    </Link>
                    ))}
                </div>


            </div>

            <div className='copyright'>
                <p>@barbed_stingray 2024</p>
                <img className='mordor' src={mordor} alt='the one at mordor' />
            </div>
        </>
    )
}

export default StingrayScenics






<h2>Paint Removal</h2>
<h2>Damage Repair</h2>
<h2>Prime and Repaint</h2>


<p>The first step in restoration usually involves stripping the old paint. I use a variety of chemicals based on the composition of your original model. In this age, most of the models I come across are a form of plastic, resin, or soft metal. These models are usually based on other plastics or even wood bases such as mdf. </p>
                <p>Next, we repair any damages to the model to make sure all of the details can be seen clearly. </p>


<h4>Acetone</h4>
<p>Found in nail polish removal, acetone has eaten through everything I have applied it to. Even plastics and resin.</p>
<h4>Pro's</h4>
<ul>
    <li>Will shred paint off models very quickly</li>
    <li>Breaks through hard shells of sealant easily</li>
    <li>Does not require the model to soak, but you can if you like</li>
    <li></li>
</ul>
<h4>Con's</h4>
<ul>
    <li>Will ruin your plastic and resin models</li>
    <li>Dries quickly leaving fine particles of paint on your model. It requires a second scrubbing.</li>
</ul>

