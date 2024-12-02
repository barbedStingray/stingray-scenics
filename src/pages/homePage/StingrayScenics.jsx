import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useSpring, useInView, useTransform, useScroll, useMotionTemplate, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom'
import './homePage.css'


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


    const targetRef = useRef()
    const isModelSectionInView = useInView(targetRef, { offset: ['start end', 'end start'] })
    console.log('in view', isModelSectionInView)

    // Box manuvers 



    // Small
    const mainOp = useTransform(mainContainer, [0, 0.1], [1, 0])
    const mainOneY = useTransform(mainContainer, [0, 0.1], ['0px', '80px'])
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






    return (
        <motion.div className='homePage' ref={containerRef}
        // style={{ background: gradientStyle || defaultGradient }}
        >

            <div className='displayContainer'>

                <div className='displayFrame'>

                    <div className='websiteTitle'>
                        <p>Stingray scenics</p>
                    </div>

                    <div className='displayBox'>

                        <motion.div className='displayInsideOne'
                            style={{ opacity: mainOp, y: mainOneY }}
                        >
                            <img className='homeImage' src={imperials} />
                        </motion.div>
                        <motion.div className='displayInsideTwo'
                            style={{ opacity: mainOp, y: mainTwoY }}
                        >Stingray Scenics
                        </motion.div>


                        <motion.div className='displayInsideOne'
                            style={{ opacity: secondOp, y: secondOneY }}
                        >Models
                        </motion.div>

                        <motion.div className='displayInsideTwo'
                            style={{ opacity: secondOp, y: secondTwoY }}
                        >
                            <img className='homeImage' src={pelennorFields} />
                        </motion.div>



                    </div>

                </div>

            </div>


            <div className='emptyElement' />

            <div className='emptyElement' />
            <p>Custom Wargamming since 2020</p>

        </motion.div >
    )
}

export default StingrayScenics
