import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useSpring, useInView, useTransform, useScroll, useMotionTemplate, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom'
import './homePage.css'
import NavBar from '../../components/navigationBar/NavBar';


import StripIt from '../../components/stripIt/StripIt';
import SectionTitle from './components/SectionTitle';

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

    const yBanner = useTransform(mainContainer, [0, 0.15], [0, 50])
    const yHeader = useTransform(mainContainer, [0, 0.4], [0, -100])
    const magicAct = useTransform(mainContainer, [0, 0.075], [1, 0])



    const targetRef = useRef()
    const isModelSectionInView = useInView(targetRef, { offset: ['start end', 'end start'] })
    console.log('in view', isModelSectionInView)

    const flip = useTransform(mainContainer, [0.15, 0.2], ['90deg', '0deg'])
    const opacity = useTransform(mainContainer, [0.15, 0.2], [0, 1])

    const miniHeaderOpacity = useTransform(mainContainer, [0.15, 0.2], [1, 1])
    const miniHeaderY = useTransform(mainContainer, [0.12, 0.2], [0, 100])



    return (
        <div className='homePage' ref={containerRef}>

            <NavBar mainContainer={mainContainer} />

            <div className='bannerDisplay'>
                <motion.img className='bannerImage' src={pelennorFields} style={{ y: yBanner }} />
                <div className='homeHeader' style={{ y: yHeader }}>

                <div className='websiteTitle'>
                    <div className='titleStingray'>
                        <SectionTitle homeTitle='Stingray' />
                    </div>
                    <div className='titleScenics'>
                        <SectionTitle homeTitle='Scenics' />
                    </div>
                </div>

                    <p>{openingLine}</p>
                    <p>Custom Wargamming since 2020</p>
                    <motion.h3 style={{ opacity: magicAct }}>Keep scrolling to learn more!</motion.h3>
                </div>
            </div>

            <div className='miniatureSection'>
                {/* <motion.div className='titleWrapper'
                    style={{ opacity: miniHeaderOpacity, y: miniHeaderY }}
                > */}
                <SectionTitle homeTitle='Miniatures' />
                {/* </motion.div> */}
                <p>Small Figures, Big Adventures</p>
            </div>

            {/* <div className='terrainSection'>
                <SectionTitle homeTitle='Terrain' />
                <p>Tiny Details, Epic Worlds</p>

                <p>Epic Tales in Small Scale</p>
            </div> */}

            {/* <div className='theHobby'>
                <h1>The Hobby</h1>
                <p>Transforming plastic into personality</p>
                <p>From Basecoat to Battle</p>
            </div> */}

            {/* <p>One brush to paint them all</p>
            <p>From the Shire to Mt. Doom, in exquisite detail</p> */}

            {/* <div className='contact'>
                <p>Epic Moments captured in miniature</p>
            </div> */}

            <div className='paintStrip'>
                <h1>Miniature Restoration</h1>
                <p>From Forgotten to Fantastic, Cracked to Classic, Worn to Wonder</p>
                <p>The Process</p>
                <p>Restoring miniatures for tabletop gaming is a satisfying craft that intertwines creativity with chemistry. Over time, models can accumulate layers of old paint, dirt, or damage that obscure their intricate details and original charm. Restoring them to their original condition and preparing them for a repaint requires patience, care, and a thoughtful approach tailored to each model's unique condition and composition.</p>
                <StripIt mainContainer={mainContainer} aniParams={{ enter: 0.125, exit: 0.18, picture: trolls }} />
                <StripIt mainContainer={mainContainer} aniParams={{ enter: 0.145, exit: 0.20, picture: smugglers }} />
                <StripIt mainContainer={mainContainer} aniParams={{ enter: 0.165, exit: 0.22, picture: droids }} />
                <p>Find out more in Miniature Restoration HERE</p>
            </div>




            <div className='modelSection'>

                <motion.h1 className='sectionTitle'
                    style={{
                    }}
                >
                    Miniatures
                </motion.h1>

                <motion.div className='blueSquare'
                    // style={{ opacity: blueOpacity }}
                    initial={{
                        opacity: 1,
                    }}
                    whileInView={{
                        opacity: 0,
                    }}
                    viewport={{
                        // amount: 'all',
                        margin: '-200px',
                        // once: true,
                    }}
                ></motion.div>

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
