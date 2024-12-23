import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useSpring, useInView, useTransform, useScroll, useMotionTemplate, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom'
import './galleryPage.css'

const GalleryPage = () => {

    // const galleryContainerRef = useRef()
    // const { scrollYProgress: galleryContainer } = useScroll({
    //     container: galleryContainerRef,
    //     offset: ['start start', 'end end']
    // })

    // useMotionValueEvent(galleryContainer, 'change', (latest) =>
    //     console.log('mainY', latest)
    // )

    const [gallerySection, setGallerySection] = useState(0)

    function decideDisplaySection(gallerySection) {
        switch (gallerySection) {
            case 0:
                return <div className='gallerySection'>
                    Welcome to Gallery
                </div>
            case 1:
                return <div className='gallerySection lotrDisplay'>
                    Lord of the Rings
                </div>
            case 2:
                return <div className='gallerySection starWarsDisplay'>
                    Star Wars
                </div>
            case 3:
                return <div className='gallerySection terrainDisplay'>
                    Terrain
                </div>
            default:
                console.log('need a default')
        }
    }

    const incrementDisplay = (increment) => {
        const newGallerySection = gallerySection + increment
        if (newGallerySection < 0 || newGallerySection > 3) return
        setGallerySection(newGallerySection)
    }


    return (
        <div className='galleryPage' 
        // ref={galleryContainerRef}
        >

            {decideDisplaySection(gallerySection)}

            <button onClick={() => incrementDisplay(-1)}>Left</button>
            <button onClick={() => incrementDisplay(1)}>Right</button>

        </div>
    )
}

export default GalleryPage
