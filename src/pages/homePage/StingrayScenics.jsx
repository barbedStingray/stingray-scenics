import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useSpring, useInView, useTransform, useScroll, useMotionTemplate, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom'
import './homePage.css'

import ParallaxImage from '../../components/ParallaxImage';

import SectionTitle from './components/SectionTitle';

import Big from '../../images/BIG.svg'

import hobbiton from '../../images/hobbiton.jpg'
import stingrayIcon from '../../images/DGreenIcon.png'
import blueStingray from '../../images/blueStingray.svg'
import oneRing from '../../images/oneRing.png'
import mordor from '../../images/mordor.png'

import sBattleDroid from '../../images/sBattleDroid.png'
import sBattleDroid2 from '../../images/sBattleDroid2.png'
import sBattleDroid3 from '../../images/sBattleDroid3.png'
import rohan from '../../images/rohan.png'
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


    const targetRef = useRef()
    const isModelSectionInView = useInView(targetRef, { offset: ['start end', 'end start'] })
    console.log('in view', isModelSectionInView)



    // stingrayScenics
    const titleOp = useTransform(mainContainer, [0, 0.1], [1, 0])
    const scrollAdventureOp = useTransform(mainContainer, [0, 0.1], [1, 0])
    // const titleY = useTransform(mainContainer, [0, 0.1], ['0', '-5dvh'])

    // home photo
    const homePhotoScale = useTransform(mainContainer, [0, 0.8], [1.25, 1])
    const homePhotoY = useTransform(mainContainer, [0.8, 1], ['0dvh', '100dvh'])
    const grayscaleValue = useTransform(mainContainer, [0, 0.5], ['0%', '100%'])
    const blurValue = useTransform(mainContainer, [0.14, 0.20], [0, 2]);
    const filterStyle = useMotionTemplate`grayscale(${grayscaleValue}) blur(${blurValue}px)`;



    // mini titles
    const tinyFiguresOp = useTransform(mainContainer, [0.13, 0.18, 0.37, 0.42], [0, 1, 1, 0])
    const tinyFiguresY = useTransform(mainContainer, [0.13, 0.42], ['0', '-5dvh'])

    const epicStoriesOp = useTransform(mainContainer, [0.48, 0.52, 0.75, 0.8], [0, 1, 1, 0])
    const epicStoriesY = useTransform(mainContainer, [0.42, 0.6], ['0', '5dvh'])

    const tinyFiguresImages = [
        {
            photoType: 'miniImage',
            picture: rohan,
            position: ['5%', '10%'],
            dimensions: ['25dvh', '75dvw'],
            motionValues: [0.18, 0.5],
            yOffset: ['0dvh', '-3dvh'],
        },
        {
            photoType: 'miniImage',
            picture: sBattleDroid,
            position: ['35%', '5%'],
            dimensions: ['45dvh', '40dvw'],
            motionValues: [0.23, 0.5],
            yOffset: ['0dvh', '12dvh'],
        },
        {
            photoType: 'miniImage',
            picture: sBattleDroid2,
            position: ['65%', '45%'],
            dimensions: ['35dvh', '50dvw'],
            motionValues: [0.28, 0.5],
            yOffset: ['0dvh', '-8dvh'],
        },
        {
            photoType: 'miniImage',
            picture: sBattleDroid3,
            position: ['40%', '38%'],
            dimensions: ['20dvh', '55dvw'],
            motionValues: [0.33, 0.5],
            yOffset: ['0dvh', '10dvh'],
        },
    ]

    const epicStoriesImages = [
        {
            photoType: 'landscapeImage',
            picture: smugglers,
            position: ['5%', '10%'],
            dimensions: ['25dvh', '75dvw'],
            motionValues: [0.55, 0.8],
            yOffset: ['0dvh', '-3dvh'],
        },
        {
            photoType: 'landscapeImage',
            picture: trolls,
            position: ['35%', '5%'],
            dimensions: ['45dvh', '40dvw'],
            motionValues: [0.60, 0.8],
            yOffset: ['0dvh', '12dvh'],
        },
        {
            photoType: 'landscapeImage',
            picture: droids,
            position: ['60%', '45%'],
            dimensions: ['35dvh', '50dvw'],
            motionValues: [0.65, 0.8],
            yOffset: ['0dvh', '-8dvh'],
        },
        {
            photoType: 'landscapeImage',
            picture: rivendellCharge,
            position: ['30%', '38%'],
            dimensions: ['20dvh', '55dvw'],
            motionValues: [0.70, 0.8],
            yOffset: ['0dvh', '10dvh'],
        },
    ]







    const gradientColor = useTransform(mainContainer, [0, 1], [
        'linear-gradient(90deg, #ff7eb3, #ff758c)', // Gradient at start
        'linear-gradient(90deg, #6a11cb, #2575fc)', // Gradient at end
    ])
    const defaultGradient = 'linear-gradient(90deg, #ff7eb3, #ff758c)'
    const gradientStyle = useMotionTemplate`${gradientColor}`

    const bannerWidth0 = useTransform(mainContainer, [0.8, 0.9], ['100%', '0%'])
    const bannerWidth1 = useTransform(mainContainer, [0.83, 0.93], ['100%', '0%'])

    return (
        <motion.div className='homePage' ref={containerRef}
        // style={{ background: gradientStyle || defaultGradient }}
        >

            <div className='scrollingDiv'>

                <div className='homeDisplay'>

                    <div className='homeMenu'>
                        <div className='bannerLink'>
                            <p>Custom Wargamming since 2020</p>
                        </div>
                        <div className='bannerLink'>
                            <p>Gallery</p>
                        </div>
                        <p>Commission</p>
                        <p>The Hobby</p>
                        <p>Scenic Materials</p>
                        <p>Products</p>
                        <p>Contact</p>
                        <p>Model Restoration</p>
                        <p>About</p>
                        <img src={mordor} />
                    </div>

                    <div className='homeMenu'>
                        <motion.div className='bannerLink' style={{ width: bannerWidth0 }}>
                            <p >Custom Wargamming since 2020</p>
                        </motion.div>
                        <motion.div className='bannerLink' style={{ width: bannerWidth1 }}>
                            <p>Gallery</p>
                        </motion.div>
                        <p>Commission</p>
                        <p>The Hobby</p>
                        <p>Scenic Materials</p>
                        <p>Products</p>
                        <p>Contact</p>
                        <p>Model Restoration</p>
                        <p>About</p>
                        <img src={mordor} />
                    </div>


                    <motion.img className='homeImage' src={pelennorFields}
                        style={{ scale: homePhotoScale, filter: filterStyle, y: homePhotoY }}
                    />

                    {/* titles */}
                    <motion.p className='parallaxText SStitle'
                        style={{ opacity: titleOp }}
                    >Stingray scenics"</motion.p>

                    <motion.p className='parallaxText scrollAdventure'
                        style={{ opacity: scrollAdventureOp }}
                    >Scroll for Adventure</motion.p>

                    <motion.p className='parallaxText tinyFigures'
                        style={{ y: tinyFiguresY, opacity: tinyFiguresOp }}
                    >Tiny figures+</motion.p>

                    <motion.p className='parallaxText epicStories'
                        style={{ y: epicStoriesY, opacity: epicStoriesOp }}
                    >Epic stories?</motion.p>


                    {/* images */}
                    {tinyFiguresImages.map((tinyImage, i) => (
                        <ParallaxImage key={i} scrollContainer={mainContainer} parDetails={tinyImage} />
                    ))}
                    {epicStoriesImages.map((storyImage, i) => (
                        <ParallaxImage key={i} scrollContainer={mainContainer} parDetails={storyImage} />
                    ))}



                </div>
            </div>


        </motion.div >
    )
}

export default StingrayScenics
