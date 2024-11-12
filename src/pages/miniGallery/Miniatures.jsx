import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useTransform, useScroll, useMotionTemplate } from 'framer-motion';

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

    return (
        <div className='miniatureGallery'>
            <div className='emptyElement' />


            <div className='logoContainer'
                style={{ height: `calc(${SECTION_HEIGHT}px + 100dvh)` }}
            >
                <motion.div
                    style={{
                        opacity: featureOpacity,
                        backgroundSize: featureBGsize,
                        clipPath: featureClipPath,
                    }}
                    className='featureElement'>

                    </motion.div>
            </div>
            

            <div className='emptyElement' />
        </div>
    );
};

export default Miniatures
