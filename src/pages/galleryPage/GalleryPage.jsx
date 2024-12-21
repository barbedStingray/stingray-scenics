import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useSpring, useInView, useTransform, useScroll, useMotionTemplate, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom'
import './galleryPage.css'

const GalleryPage = () => {

    const galleryContainerRef = useRef()
    const { scrollYProgress: galleryContainer } = useScroll({
        container: galleryContainerRef,
        offset: ['start start', 'end end']
    })

    useMotionValueEvent(galleryContainer, 'change', (latest) =>
        console.log('mainY', latest)
    )

    const lotrY = useTransform(galleryContainer, [0, 0.24262607040913417, 0.4995242626070409], ['100%', '0%', '0%'])
    const lotrScale = useTransform(galleryContainer, [0.24262607040913417, 0.4995242626070409], [1, 0.8])


    return (
        <div className='galleryPage' ref={galleryContainerRef}>
            <div className='galleryScrollDiv'>
                <div className='groupDisplay'>Welcome to Gallery</div>
                <div className='groupDisplay'>
                    {/* <div className='lotrWrapper'> */}
                        <motion.div className='lotrDisplay'
                            style={{ y: lotrY }}
                        >
                            <p>Lord of the Rings Display</p>
                        </motion.div>
                    {/* </div> */}
                </div>
                <div className='groupDisplay'>Star Wars Display</div>
                <div className='groupDisplay'>Terrain Display</div>
                <div className='groupDisplay'>?? Display</div>
            </div>
        </div>
    )
}

export default GalleryPage
