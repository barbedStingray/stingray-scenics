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

    // useMotionValueEvent(mainContainer, 'change', (latest) =>
    //     console.log('mainY', latest)
    // )

    const yBanner = useTransform(mainContainer, [0, 0.4], [0, 100])




    return (
        <div className='homePage' ref={containerRef}>

            <NavBar mainContainer={mainContainer} />

            <div className='bannerDisplay'>
                <motion.img className='bannerImage' src={pelennorFields} style={{ y: yBanner }} />
                <div className='homeHeader'>
                    <h1>Stingray Scenics</h1>
                    <p>Custom Wargamming since 2020</p>
                </div>
            </div>

            <div className='emptyElement' />

            <div className='emptyElement' />

        </div>
    )
}

export default StingrayScenics
