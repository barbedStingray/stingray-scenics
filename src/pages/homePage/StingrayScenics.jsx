import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { motion, useSpring, useInView, useTransform, useScroll, useMotionTemplate, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom'
import './homePage.css'
import { displayView } from '../../components/universalFunctions';

import pelennorFields from '../../images/pelennorFields.jpeg'

const StingrayScenics = () => {

    const dispatch = useDispatch()
    const homeContainerRef = useRef()
    const { scrollYProgress: homeContainer } = useScroll({
        container: homeContainerRef,
        offset: ['start start', 'end end']
    })
    useMotionValueEvent(homeContainer, 'change', (latest) =>
        console.log('mainY', latest)
    )



    // home photo
    const homePhotoScale = useTransform(homeContainer, [0, 1], [1.25, 1])
    const homePhotoHeight = useTransform(homeContainer, [0, 0.2355], ['100dvh', '40dvh'])
    // const homePhotoY = useTransform(homeContainer, [0.8, 1], ['0dvh', '100dvh'])
    const grayscaleValue = useTransform(homeContainer, [0, 0.5, 0.78, 0.92], ['0%', '100%', '100%', '0%'])
    const blurValue = useTransform(homeContainer, [0.14, 0.25, 0.78, 0.83], [0, 2, 2, 0]);
    const filterStyle = useMotionTemplate`grayscale(${grayscaleValue}) blur(${blurValue}px)`;



    // mini titles
    const titleOp = useTransform(homeContainer, [0, 0.1], [1, 0])
    const scrollAdventureOp = useTransform(homeContainer, [0, 0.1], [1, 0])

    const tinyFiguresOp = useTransform(homeContainer, [0.13, 0.20, 0.46, 0.50], [0, 1, 1, 0])
    const tinyFiguresY = useTransform(homeContainer, [0.13, 0.5], ['0', '-5dvh'])
    const epicStoriesOp = useTransform(homeContainer, [0.48, 0.52, 0.78, 0.83], [0, 1, 1, 0])
    const epicStoriesX = useTransform(homeContainer, [0.48, 0.8], ['-1dvh', '2dvh'])

    // banner links
    const bannerWidth0 = useTransform(homeContainer, [0.80, 0.94], ['0%', '105%'])
    const bannerWidth1 = useTransform(homeContainer, [0.83, 0.96], ['0%', '105%'])
    const bannerWidth2 = useTransform(homeContainer, [0.86, 0.98], ['0%', '105%'])
    const bannerWidth3 = useTransform(homeContainer, [0.89, 1], ['0%', '105%'])



    const gradientColor = useTransform(homeContainer, [0, 1], [
        'linear-gradient(90deg, #ff7eb3, #ff758c)', // Gradient at start
        'linear-gradient(90deg, #6a11cb, #2575fc)', // Gradient at end
    ])
    const defaultGradient = 'linear-gradient(90deg, #ff7eb3, #ff758c)'
    const gradientStyle = useMotionTemplate`${gradientColor}`


    return (
        <motion.div className='homePage' ref={homeContainerRef}>
            {/* <NavBar /> */}

            <p className='homeTextStyle SStitle glassMorphGreen'
                style={{ opacity: titleOp }}
            >Stingray scenics"</p>
            <motion.p className='homeTextStyle scrollAdventure'
                style={{ opacity: scrollAdventureOp }}
            >Scroll for Adventure</motion.p>


            <div className='homeScrollDiv'>

                <div className='revealPanel'>
                    <img className='homeImage' src={pelennorFields}
                        style={{ scale: homePhotoScale, filter: filterStyle, height: homePhotoHeight }}
                    />
                </div>
                <div className='stickyFooter'>
                    <h1>Custom Wargamming since 2020</h1>
                    <h1 className='SSwelcome'>Welcome</h1>
                    <div className='footerLinks'>
                        <Link to={'/gallery'}>Gallery</Link>
                        <p onClick={() => displayView('SET_CONTACT', true, dispatch)}>Contact</p>
                        <Link to={'/commission'}>Commission</Link>
                        <p>Restore</p>
                        <p>Hobby</p>
                        <p>About Me</p>
                        <p>Reviews</p>
                    </div>
                </div>

            </div>
        </motion.div >
    )
}

export default StingrayScenics