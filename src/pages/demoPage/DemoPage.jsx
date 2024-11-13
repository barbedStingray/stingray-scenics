import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useSpring, useTransform, useScroll, useMotionTemplate, useMotionValueEvent } from 'framer-motion';
import './demoPage.css'

import hobbiton from '../../images/hobbiton.jpg'
import stingrayIcon from '../../images/DGreenIcon.png'
import oneRing from '../../images/oneRing.png'
import mordor from '../../images/mordor.png'
import imperials from '../../images/imperials.jpeg'
import pelennorFields from '../../images/pelennorFields.jpeg'
import trolls from '../../images/trolls.jpeg'
import rivendellCharge from '../../images/rivendellCharge.jpeg'
import droids from '../../images/droids.png'
import empireLogo from '../../images/empireLogo.png'

import DemoPar from '../../components/DemoPar';

const DemoPage = () => {

    const containerRef = useRef()
    // tracking main container
    const { scrollYProgress: mainContainer } = useScroll({
        container: containerRef,
        offset: ['start start', 'end end']
    })
    // const { scrollYProgress: viewObject } = useScroll({
    //     // target: demoRef,
    //     container: containerRef,
    //     offset: ['start start', 'end end']
    // })


    const opacityOne = useTransform(mainContainer, [0, 0.17, 0.83, 1], [0, 1, 1, 0]);
    const rotateOne = useTransform(mainContainer, [0.17, 1], ['0deg', '80deg']);

    // const transformOne = useMotionTemplate`opacity: ${opacityOne}; rotate(${rotateOne}))`


    const yOne = useTransform(mainContainer, [0, 0.3], [-2000, 800])
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
    useMotionValueEvent(mainContainer, 'change', (latest) =>
        console.log('mainY', latest)
    )




    return (
        <div className='demoDiv' ref={containerRef}>

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
                {/* center Image */}

                {/* <div className='demoParallax'>
                    <motion.img className='demoLaxImage' src={rivendellCharge}
                        style={{ y: yOne }}
                    />
                    <DemoPar scrollYProgress={mainContainer} />

                    <img className='demoLaxImage' src={trolls} />
                </div> */}
            </div>



            <div className='emptyElement' />

        </div>
    )
}

export default DemoPage
