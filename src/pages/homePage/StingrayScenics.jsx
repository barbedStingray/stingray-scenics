import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useSpring, useInView, useTransform, useScroll, useMotionTemplate, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom'
import './homePage.css'
import NavBar from '../../components/navigationBar/NavBar';


import SectionTitle from './components/SectionTitle';

import Big from '../../images/BIG.svg'

import hobbiton from '../../images/hobbiton.jpg'
import stingrayIcon from '../../images/DGreenIcon.png'
import blueStingray from '../../images/blueStingray.svg'
import oneRing from '../../images/oneRing.png'
import mordor from '../../images/mordor.png'
import imperials from '../../images/imperials.jpeg'
import pelennorFields from '../../images/pelennorFields.jpeg'
import trolls from '../../images/trolls.jpeg'
import rivendellCharge from '../../images/rivendellCharge.jpeg'
import droids from '../../images/droids.png'
import smugglers from '../../images/smugglers.jpeg'
import empireLogo from '../../images/empireLogo.png'
import { main } from 'framer-motion/client';


const StingrayScenics = () => {

    const containerRef = useRef()
    const { scrollYProgress: mainContainer } = useScroll({
        container: containerRef,
        offset: ['start start', 'end end']
    })
    const openingLine = 'Welcome to Stingray Scenics, the intersection of passion, creativity, and art! We specialize in crafting unique terrain and custom-painted miniatures, all tailored to your personal vision. Whether its a modular battlefield, a dramatic scene, or custom work on a personal hero, our versatile commissions ensure your tabletop is as epic as your imagination.'

    useMotionValueEvent(mainContainer, 'change', (latest) =>
        console.log('mainY', latest)
    )

    const yBannerDown = useTransform(mainContainer, [0, 0.15], [0, 20])
    const yBannerUp = useTransform(mainContainer, [0, 0.15], [0, -20])


    const xMove = useTransform(mainContainer, [0, 0.1], ['0%', '-100%'])
    const opacity = useTransform(mainContainer, [0, 0.1], [1, 0])
    const xMoveA = useTransform(mainContainer, [0, 0.1], ['0%', '-100%'])
    const opacityA = useTransform(mainContainer, [0, 0.1], [0, 1])


    const targetRef = useRef()
    const isModelSectionInView = useInView(targetRef, { offset: ['start end', 'end start'] })
    console.log('in view', isModelSectionInView)


    // Box manuvers 
    const box1w = useTransform(mainContainer, [0, 0.1], ['35dvw', '25dvw'])
    const box1h = useTransform(mainContainer, [0, 0.1], ['40dvh', '40dvh'])
    const box1Left = useTransform(mainContainer, [0, 0.1], ['0dvhw', '0dvw'])
    const box1Top = useTransform(mainContainer, [0, 0.1], ['0dvh', '0dvh'])

    const box2w = useTransform(mainContainer, [0, 0.1], ['25dvw', '15dvw'])
    const box2h = useTransform(mainContainer, [0, 0.1], ['10dvh', '30dvh'])
    const box2Left = useTransform(mainContainer, [0, 0.1], ['35dvhw', '25dvw'])
    const box2Top = useTransform(mainContainer, [0, 0.1], ['0dvh', '0dvh'])

    const box3w = useTransform(mainContainer, [0, 0.1], ['25dvw', '15dvw'])
    const box3h = useTransform(mainContainer, [0, 0.1], ['30dvh', '10dvh'])
    const box3Left = useTransform(mainContainer, [0, 0.1], ['35dvhw', '25dvw'])
    const box3Bottom = useTransform(mainContainer, [0, 0.1], ['0dvh', '0dvh'])


    const box4w = useTransform(mainContainer, [0, 0.1], ['35dvw', '55dvw'])
    const box4h = useTransform(mainContainer, [0, 0.1], ['25dvh', '15dvh'])
    const box4Left = useTransform(mainContainer, [0, 0.1], ['60dvhw', '40dvw'])
    const box4Top = useTransform(mainContainer, [0, 0.1], ['0dvh', '0dvh'])


    const box5w = useTransform(mainContainer, [0, 0.1], ['35dvw', '55dvw'])
    const box5h = useTransform(mainContainer, [0, 0.1], ['15dvh', '25dvh'])
    const box5Left = useTransform(mainContainer, [0, 0.1], ['60dvw', '40dvw'])
    const box5Bottom = useTransform(mainContainer, [0, 0.1], ['0dvh', '0dvh'])


    const smallO = useTransform(mainContainer, [0, 0.045], [1, 0])
    const bigO = useTransform(mainContainer, [0.05, 0.1], [0, 1])


    const gradientColor = useTransform(mainContainer, [0, 1], [
        'linear-gradient(90deg, #ff7eb3, #ff758c)', // Gradient at start
        'linear-gradient(90deg, #6a11cb, #2575fc)', // Gradient at end
    ])
    const defaultGradient = 'linear-gradient(90deg, #ff7eb3, #ff758c)'
    const gradientStyle = useMotionTemplate`${gradientColor}`



    // Transformations for the circle
    const circleRadius = useTransform(mainContainer, [0.0, 0.1], ['30dvw', '60dvw']);



    return (
        <div className='homePage' ref={containerRef}
        // style={{ background: gradientStyle || defaultGradient}}
        >

            <NavBar mainContainer={mainContainer} />





            <div className='displayContainer'>



                <div className='displayFrame'
                    style={{ clipPath: "url(#circleClip)" }}
                >
                    <div className='websiteTitle'>
                        {/* <SectionTitle homeTitle='Stingray' /> */}
                        <h1>Stingray Scenics</h1>
                    </div>

                    <div className='displayImages'>

                        <motion.div className='dImage1' style={{
                            height: box1h, width: box1w, top: box1Top, left: box1Left
                        }}>
                            {/* <div className='box'></div> */}
                            Box 1
                        </motion.div>

                        <motion.div className='dImage2' style={{
                            height: box2h, width: box2w, top: box2Top, left: box2Left
                        }}>
                            <motion.div className='smallDiv' style={{ opacity: smallO }}><p>Small</p></motion.div>
                            <motion.div className='bigDiv' style={{ opacity: bigO }}><p>BIG</p></motion.div>
                        </motion.div>

                        <motion.div className='dImage3' style={{
                            height: box3h, width: box3w, bottom: box3Bottom, left: box3Left
                        }}>
                            {/* <div className='box'></div> */}
                            <motion.div className='figureDiv' style={{ opacity: smallO }}><p>Figures</p></motion.div>

                        </motion.div>

                        <motion.div className='dImage4' style={{
                            height: box4h, width: box4w, top: box4Top, left: box4Left
                        }}>
                            {/* <div className='box'></div> */}
                            Box 4

                        </motion.div>

                        <motion.div className='dImage5' style={{
                            height: box5h, width: box5w, bottom: box5Bottom, left: box5Left
                        }}>
                            {/* <div className='box'></div> */}
                            Box 5

                        </motion.div>

                    </div>







                    <div className='bannerScroll'>
                        <div className='banner'>
                            <div className='tinySwap'>
                                <motion.p style={{ x: xMove, opacity: opacity }} className='wordSwap'>Epic</motion.p>
                                <motion.p style={{ x: xMoveA, opacity: opacityA }} className='wordSwap'>Tiny</motion.p>
                            </div>
                            <p>Worlds</p>
                        </div>
                        <div className='banner'>
                            <div className='tinySwap'>
                                <motion.p style={{ x: xMove, opacity: opacity }} className='wordSwap'>Tiny</motion.p>
                                <motion.p style={{ x: xMoveA, opacity: opacityA }} className='wordSwap'>Epic</motion.p>
                            </div>
                            <p>Details</p>
                        </div>
                    </div>
                </div>

            </div>


            <div className='emptyElement' />

            <div className='emptyElement' />
            <p>Custom Wargamming since 2020</p>

        </div >
    )
}

export default StingrayScenics
