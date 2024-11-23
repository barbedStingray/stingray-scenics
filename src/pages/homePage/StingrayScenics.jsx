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


    const xMove = useTransform(mainContainer, [0, 0.15], ['0%', '-100%'])
    const opacity = useTransform(mainContainer, [0, 0.1], [1, 0])
    const xMoveA = useTransform(mainContainer, [0, 0.15], ['0%', '-100%'])
    const opacityA = useTransform(mainContainer, [0, 0.1], [0, 1])


    const bigImageWidth = useTransform(mainContainer, [0, 0.1, 0.2], ['25%', '50%', '100%'])
    const mediumImageWidth = useTransform(mainContainer, [0, 0.1, 0.2], ['25%', '50%', '0%'])
    const smallImageWidth = useTransform(mainContainer, [0, 0.1], ['25%', '0%'])


    const targetRef = useRef()
    const isModelSectionInView = useInView(targetRef, { offset: ['start end', 'end start'] })
    console.log('in view', isModelSectionInView)





    const gradientColor = useTransform(mainContainer, [0, 1], [
        'linear-gradient(90deg, #ff7eb3, #ff758c)', // Gradient at start
        'linear-gradient(90deg, #6a11cb, #2575fc)', // Gradient at end
    ])
    const defaultGradient = 'linear-gradient(90deg, #ff7eb3, #ff758c)'
    const gradientStyle = useMotionTemplate`${gradientColor}`




    return (
        <div className='homePage' ref={containerRef}
        // style={{ background: gradientStyle || defaultGradient}}
        >

            <NavBar mainContainer={mainContainer} />
            <div className='displayContainer'>

                <div className='displayFrame'>
                    <div className='websiteTitle'>
                        {/* <SectionTitle homeTitle='Stingray' /> */}
                        <h1>Stingray Scenics</h1>
                    </div>
                    <div className='displayImages'>
                        <motion.div className='imageContainer' style={{ width: smallImageWidth }}>
                            <motion.img className='heroImage' src={droids} style={{}} />
                        </motion.div>
                        <motion.div className='imageContainer' style={{ width: mediumImageWidth }}>
                            <motion.img className='heroImage' src={trolls} style={{}} />
                        </motion.div>
                        <motion.div className='imageContainer' style={{ width: bigImageWidth }}>
                            <motion.img className='heroImage' src={pelennorFields} style={{}} />
                        </motion.div>
                        <motion.div className='imageContainer' style={{ width: smallImageWidth }}>
                            <motion.img className='heroImage' src={imperials} style={{}} />
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
