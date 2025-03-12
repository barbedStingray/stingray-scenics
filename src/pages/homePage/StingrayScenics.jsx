import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { motion, useSpring, useInView, useTransform, useScroll, useMotionTemplate, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom'
import './homePage.css'
import { displayView } from '../../components/universalFunctions';

import NavBar from '../../components/navigation/NavBar'
import pelennorFields from '../../images/pelennorFields.jpeg'

const StingrayScenics = () => {

    const dispatch = useDispatch()
    const homeContainerRef = useRef()
    const { scrollYProgress: homeContainer } = useScroll({
        container: homeContainerRef,
        offset: ['start start', 'end end']
    })
    // console.log for screen scroll position
    // useMotionValueEvent(homeContainer, 'change', (latest) =>
    //     console.log('mainY', latest)
    // )

    const scrollAdventureOp = useTransform(homeContainer, [0, 0.1], [1, 0])


    return (
        <motion.div className='homePage' ref={homeContainerRef}>

            <NavBar />

            <p className='SSTextStyle SStitle glassMorphGreen'>Stingray scenics"</p>
            <motion.p
                className='SSTextStyle scrollAdventure'
                style={{ opacity: scrollAdventureOp }}
            >
                Scroll for Adventure
            </motion.p>

            <div className='revealPanel'>
                <img className='pictureFit-cover' src={pelennorFields} />
            </div>

            <div className='stickyFooter'>
                <div className='footerLinks'>
                    <Link className='footLink' to={'/gallery'}>Gallery</Link>
                    <p className='footLink' onClick={() => displayView('SET_CONTACT', true, dispatch)}>Contact</p>
                    <Link className='footLink'>Commission</Link>
                    <p className='footLink'>Hobby</p>
                    <p className='footLink'>Reviews</p>
                </div>
                <h1 className='SSwelcome'>Welcome</h1>
                <h1 className='SStagline'>Custom Wargamming since 2020</h1>
            </div>

        </motion.div >
    )
}

export default StingrayScenics