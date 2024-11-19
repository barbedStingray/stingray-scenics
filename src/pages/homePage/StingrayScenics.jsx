import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useSpring, useInView, useTransform, useScroll, useMotionTemplate, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom'
import './homePage.css'
import NavBar from '../../components/navigationBar/NavBar';


import hobbiton from '../../images/hobbiton.jpg'
import stingrayIcon from '../../images/DGreenIcon.png'
import oneRing from '../../images/oneRing.png'
import mordor from '../../images/mordor.png'
import imperials from '../../images/imperials.jpeg'
import pelennorFields from '../../images/pelennorFields.jpeg'
import trolls from '../../images/trolls.jpeg'
import rivendellCharge from '../../images/rivendellCharge.jpeg'
import droids from '../../images/droids.png'
import smugglers from '../../images/smugglers.jpeg'
import empireLogo from '../../images/empireLogo.png'



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

    const yBanner = useTransform(mainContainer, [0, 0.4], [0, 100])
    const yHeader = useTransform(mainContainer, [0, 0.4], [0, -100])
    const magicAct = useTransform(mainContainer, [0, 0.075], [1, 0])



    const targetRef = useRef()
    const isModelSectionInView = useInView(targetRef, { offset: ['start end', 'end start'] })
    console.log('in view', isModelSectionInView)

    const flip = useTransform(mainContainer, [0.15, 0.2], ['90deg', '0deg'])
    const opacity = useTransform(mainContainer, [0.15, 0.2], [0, 1])
    const h1Width = useTransform(mainContainer, [0.1, 0.15], [0, 200])
    // const h1Opacity = useTransform(mainContainer, [0.15, 0.2], [0, 1])
    // console.log('flip', flip)

    return (
        <div className='homePage' ref={containerRef}>

            <NavBar mainContainer={mainContainer} />

            <div className='bannerDisplay'>
                <motion.img className='bannerImage' src={pelennorFields} style={{ y: yBanner }} />
                <motion.div className='homeHeader' style={{ y: yHeader }}>
                    <h1>Stingray Scenics</h1>
                    <p>{openingLine}</p>
                    <p>Custom Wargamming since 2020</p>
                    <motion.h3 style={{ opacity: magicAct }}>Keep scrolling to learn more!</motion.h3>
                </motion.div>
            </div>


            <div className='modelSection'>
                <motion.h1 className='sectionTitle'
                    style={{
                        background: '#0ff',
                        width: h1Width,
                        // opacity: h1Opacity,
                    }}
                >
                    Miniatures
                </motion.h1>

                <motion.img src={droids} className='coverPhoto'
                    // ref={targetRef}
                    style={{
                        rotateX: flip,
                        opacity: opacity
                    }}
                />
            </div>



            <div className='emptyElement' />

            <div className='emptyElement' />

        </div>
    )
}

export default StingrayScenics
