import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useTransform, useScroll, useMotionTemplate, useMotionValueEvent } from 'framer-motion';

import './miniatures.css';

import hobbiton from '../../images/hobbiton.jpg'
import stingrayIcon from '../../images/DGreenIcon.png'
import oneRing from '../../images/oneRing.png'
import mordor from '../../images/mordor.png'
import imperials from '../../images/imperials.jpeg'
import pelennorFields from '../../images/pelennorFields.jpeg'
import trolls from '../../images/trolls.jpeg'
import rivendellCharge from '../../images/rivendellCharge.jpeg'
import droids from '../../images/droids.png'


const Miniatures = () => {


    const { scrollY } = useScroll();  // `scrollYProgress` gives you a normalized scroll position (from 0 to 1)

    const SECTION_HEIGHT = 1500;
    const featureOpacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 400], [1, 0]);
    const featureBGsize = useTransform(scrollY, [0, SECTION_HEIGHT + 500], ['110%', '50%']);

    const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0])
    const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100])
    const featureClipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`


    // parallax images
    const refOne = useRef()

    const { scrollYProgress } = useScroll({
        target: refOne,
        offset: ['-300px end', 'end -200px']
    })


    const imageOneOpacity = useTransform(scrollYProgress, [0.6, 1], [1, 0])
    const imageOneScale = useTransform(scrollYProgress, [0.7, 1], [1, 0.7])

    
    const yOne = useTransform(scrollYProgress, [0, 1], [-200, 200])
    // watch your start and end points
    // could also just use the scale: imageOneScale on motion.element
    // this just combines two properties
    const transformOne = useMotionTemplate`translateY(${yOne}px) scale(${imageOneScale})`

    // console log motion values
    useMotionValueEvent(scrollYProgress, 'change', (latest) =>
        console.log(latest)
    )


    return (
        <div className='miniatureGallery'>
            <div className='emptyElement' />


            <div className='logoContainer'
                style={{ height: `calc(${SECTION_HEIGHT}px + 100dvh)` }}
            >
                {/* center image */}
                <motion.div
                    style={{
                        opacity: featureOpacity,
                        backgroundSize: featureBGsize,
                        clipPath: featureClipPath,
                    }}
                    className='featureElement'>
                </motion.div>

                {/* parallax images THESE WOULD BE COMPONENTS */}
                <div className='parallaxContainer'>
                    <div className='parallaxBox red'
                        style={{ transform: `translateY(0px)` }}
                    ></div>

                    <div className='parallaxBox blue'
                        style={{ transform: `translateY(-200px)` }}
                    ></div>

                    <motion.img 
                    style={{ opacity: imageOneOpacity, transform: transformOne }}
                    ref={refOne} 
                    className='parallaxImage' 
                    src={rivendellCharge}>
                    </motion.img>
                </div>

            </div>


            <div className='emptyElement' />
        </div>
    );
};

export default Miniatures
