import React from 'react'
import { useSelector } from 'react-redux'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion'
import './galleryPage.css'


import GalleryInformation from './galleryComponents/GalleryInformation'
import GallerySlides from './galleryComponents/slideShow/GallerySlides'
import MiniDisplay from '../../components/miniDisplay/MiniDisplay'


const GalleryPage = () => {

    const { colorShade } = useSelector((state) => state.gallerySlice)
    console.log('color shade', colorShade)
    const galleryView = useSelector((state) => state.galleryView)
    const miniShowcase = useSelector((state) => state.miniShowcase)


    return (
        <div
            className="galleryPage galleryBackground"
            style={{ '--shade-gallery': colorShade }}
            transition={{
                duration: 2.5
            }}
        >

            <AnimatePresence mode='wait'>
                <motion.div
                    className='largeScreenGallery'
                    key={`display-${galleryView}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.6 }}
                >
                    {galleryView ? <MiniDisplay miniList={miniShowcase} /> : <GallerySlides />}
                </motion.div>
            </AnimatePresence>

            <GalleryInformation />

        </div >
    )
}

export default GalleryPage;
