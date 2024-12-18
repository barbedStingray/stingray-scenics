import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useSpring, useInView, useTransform, useScroll, useMotionTemplate, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom'
import './homePage.css'

import DemoPar from '../../components/DemoPar';


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
import { filter, main } from 'framer-motion/client';



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


    const targetRef = useRef()
    const isModelSectionInView = useInView(targetRef, { offset: ['start end', 'end start'] })
    console.log('in view', isModelSectionInView)



    // stingrayScenics
    const titleOp = useTransform(mainContainer, [0, 0.1], [1, 0])
    const scrollAdventureOp = useTransform(mainContainer, [0, 0.1], [1, 0])
    // const titleY = useTransform(mainContainer, [0, 0.1], ['0', '-5dvh'])

    // home photo
    const homePhotoScale = useTransform(mainContainer, [0, 0.5], [1.25, 1])
    const homePhotoY = useTransform(mainContainer, [0.5, 0.7 ], ['0dvh', '100dvh'])
    const grayscaleValue = useTransform(mainContainer, [0, 0.5], ['0%', '100%'])
    const blurValue = useTransform(mainContainer, [0.12, 0.3], [0, 2]);
    const filterStyle = useMotionTemplate`grayscale(${grayscaleValue}) blur(${blurValue}px)`;

    // mini titles
    const tinyFiguresOp = useTransform(mainContainer, [0.10, 0.14, 0.24, 0.28], [0, 1, 1, 0])
    const tinyFiguresY = useTransform(mainContainer, [0.12, 0.3], ['0', '-5dvh'])
    const epicStoriesOp = useTransform(mainContainer, [0.12, 0.16, 0.26, 0.3], [0, 1, 1, 0])
    const epicStoriesY = useTransform(mainContainer, [0.12, 0.3], ['0', '-5dvh'])


    const paraImageY = useTransform(mainContainer, [0.12, 0.4], ['0', '-45dvh'])


    const mainTwoY = useTransform(mainContainer, [0, 0.1], ['0px', '-80px'])

    const secondOp = useTransform(mainContainer, [0, 0.1, 0.2], [0, 1, 0])
    const secondOneY = useTransform(mainContainer, [0, 0.1, 0.2], ['-30px', '0px', '50px'])
    const secondTwoY = useTransform(mainContainer, [0, 0.1, 0.2], ['50px', '0px', '-30px'])

    const smallLeft = useTransform(mainContainer, [0, 0.1], ['18dvw', '20dvw'])
    const smallTop = useTransform(mainContainer, [0, 0.1], ['15dvh', '20dvh'])
    const smallW = useTransform(mainContainer, [0, 0.1], ['15dvw', '15dvw'])
    const smallH = useTransform(mainContainer, [0, 0.1], ['8dvh', '8dvh'])


    const gradientColor = useTransform(mainContainer, [0, 1], [
        'linear-gradient(90deg, #ff7eb3, #ff758c)', // Gradient at start
        'linear-gradient(90deg, #6a11cb, #2575fc)', // Gradient at end
    ])
    const defaultGradient = 'linear-gradient(90deg, #ff7eb3, #ff758c)'
    const gradientStyle = useMotionTemplate`${gradientColor}`



    const parallaxImages = [
        {
            picture: pelennorFields,
            motionValues: [0.05, 0.22],
            yOffset: ['-8dvh', '8dvh'],
            dimensions: ['40dvh', '60dvw'],
        },
        {
            picture: droids,
            motionValues: [0.15, 0.35],
            yOffset: ['-20dvh', '-10dvh'],
            dimensions: ['30dvh', '30dvw'],
        },
        {
            picture: trolls,
            motionValues: [0.175, 0.375],
            yOffset: ['-60dvh', '-20dvh'],
            dimensions: ['60dvh', '40dvw'],
        },
        {
            picture: rivendellCharge,
            motionValues: [0.25, 0.4],
            yOffset: ['-20dvh', '-20dvh'],
            dimensions: ['30dvh', '50dvw'],
        },
        {
            picture: smugglers,
            motionValues: [0.28, 0.475],
            yOffset: ['-40dvh', '-10dvh'],
            dimensions: ['30dvh', '50dvw'],
        },
    ]




    return (
        <motion.div className='homePage' ref={containerRef}
        // style={{ background: gradientStyle || defaultGradient }}
        >

            <div className='scrollingDiv'>

                <div className='homeDisplay'>

                    <div className='menuOptions'>
                        <p>Custom Wargamming since 2020</p>
                        <p>Gallery</p>
                        <p>Commission</p>
                        <p>The Hobby</p>
                        <p>Scenic Materials</p>
                        <p>Products</p>
                        <p>Contact</p>
                        <p>Model Restoration</p>
                        <p>About</p>
                    </div>


                    <motion.img className='homeImage' src={pelennorFields}
                        style={{ scale: homePhotoScale, filter: filterStyle, y: homePhotoY }}
                    />

                    {/* titles */}
                    <motion.p className='parallaxText SStitle'
                        style={{ opacity: titleOp }}
                    >Stingray scenics,</motion.p>

                    <motion.p className='parallaxText scrollAdventure'
                        style={{ opacity: scrollAdventureOp }}
                    >Scroll for Adventure</motion.p>

                    <motion.p className='parallaxText tinyFigures'
                        style={{ y: tinyFiguresY, opacity: tinyFiguresOp }}
                    >Tiny figures"</motion.p>
                    <motion.p className='parallaxText epicStories'
                        style={{ y: epicStoriesY, opacity: epicStoriesOp }}
                    >Epic stories!</motion.p>

                    {/* images */}
                    <motion.img className='parallaxHomeImage' src={droids}
                        style={{ y: paraImageY, opacity: tinyFiguresOp }}
                    />




                </div>




                {/* <div className='demoParallax'>
                    {parallaxImages.map((example, i) => (
                        <DemoPar key={i} scrollContainer={mainContainer} parDetails={example} />
                    ))}
                </div> */}

            </div>

            {/* <div className='emptyElement' /> */}

        </motion.div >
    )
}

export default StingrayScenics
