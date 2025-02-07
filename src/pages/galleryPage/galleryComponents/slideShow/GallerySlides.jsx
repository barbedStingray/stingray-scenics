import React, { useState, useEffect } from 'react'
import './gallerySlides.css'
import { motion, AnimatePresence } from 'framer-motion'

import imperials from '../../../../images/imperials.jpeg'
import rivendellCharge from '../../../../images/rivendellCharge.jpeg'
import trolls from '../../../../images/trolls.jpeg'


const GallerySlides = () => {

    const slideShowImages = [imperials, rivendellCharge, trolls]
    const [slideIndex, setSlideIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % slideShowImages.length)
        }, 10000) // 10s

        return () => clearInterval(interval)
    }, [])


    return (
        <AnimatePresence mode='wait'>
            <motion.img
                className='slideShowImage'
                src={slideShowImages[slideIndex]}
                key={slideIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}
            />
        </AnimatePresence>
    )
}

export default GallerySlides
