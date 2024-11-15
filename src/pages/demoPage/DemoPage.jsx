import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useSpring, useInView, useTransform, useScroll, useMotionTemplate, useMotionValueEvent } from 'framer-motion';
import './demoPage.css'

import NavBar from '../../components/navigationBar/NavBar';

import hobbiton from '../../images/hobbiton.jpg'
import stingrayIcon from '../../images/DGreenIcon.png'
import oneRing from '../../images/oneRing.png'
import mordor from '../../images/mordor.png'
import smugglers from '../../images/smugglers.jpeg'
import imperials from '../../images/imperials.jpeg'
import pelennorFields from '../../images/pelennorFields.jpeg'
import trolls from '../../images/trolls.jpeg'
import rivendellCharge from '../../images/rivendellCharge.jpeg'
import droids from '../../images/droids.png'
import empireLogo from '../../images/empireLogo.png'

import DemoPar from '../../components/DemoPar';
import { main } from 'framer-motion/client';

const DemoPage = () => {

    const containerRef = useRef()
    // tracking main container
    const { scrollYProgress: mainContainer } = useScroll({
        container: containerRef,
        offset: ['start start', 'end end']
    })
    // const { scrollYProgress: viewObject } = useScroll({
    //     target: targetRef,
    //     // container: containerRef,
    //     offset: ['start start', 'end end']
    // })









    const opacityOne = useTransform(mainContainer, [0, 0.17, 0.83, 1], [0, 1, 1, 0]);
    const rotateOne = useTransform(mainContainer, [0.17, 1], ['0deg', '80deg']);

    // const transformOne = useMotionTemplate`opacity: ${opacityOne}; rotate(${rotateOne}))`

    const yBanner = useTransform(mainContainer, [0, 0.3], [0, 400])
    const yTitle = useTransform(mainContainer, [0, 0.3], [0, -300])
    const opacityView = useTransform(mainContainer, [0, 0.025], [1, 0])
    // const yOne = useSpring(
    //     useTransform(scrollYProgress, [0, 0.3], [-2000, 800]), 
    //     { damping: 20, stiffness: 100}
    // )


    // useMotionValueEvent(yOne, 'change', (latest) =>
    //     console.log('yOne', latest)
    // )
    // useMotionValueEvent(mainContainer, 'change', (latest) =>
    //     console.log('mainY', latest)
    // )

    const parallaxImages = [
        {
            picture: pelennorFields,
            motionValues: [0.1, 0.3],
            yOffset: ['-80dvh', '-50dvh'],
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
        <div className='demoDiv' ref={containerRef}>
            <NavBar mainContainer={mainContainer} />

            <div className='galleryHeader'>
                <motion.img src={imperials} className='galleryImage'
                    style={{
                        y: yBanner,
                    }}
                />
                <motion.div
                    className='galleryHeading'
                    style={{
                        y: yTitle,
                    }}
                >
                    <h1>The Gallery</h1>
                    <motion.h3
                        style={{ opacity: opacityView }}
                    >Scroll to View</motion.h3>
                </motion.div>
            </div>

            <div className='content' >
                <div
                    className='centerImage'>
                    <motion.img src={oneRing}
                        style={{
                            opacity: opacityOne,
                            rotate: rotateOne,
                        }}
                    />
                </div>

                {/* <div className='demoParallax'>
                    <motion.img className='demoLaxImage' src={rivendellCharge}
                        style={{ y: yOne }}
                    />

                    <img className='demoLaxImage' src={trolls} />
                </div> */}
                <div className='demoParallax'>
                    {parallaxImages.map((example, i) => (
                        <DemoPar key={i} scrollContainer={mainContainer} parDetails={example} />
                    ))}
                </div>

            </div>



            <div className='emptyElement' />

        </div>
    )
}

export default DemoPage
