import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useTransform, useMotionTemplate } from 'framer-motion'
import './galleryPage.css'
import { sectionVariants } from './galleryComponents/animations'

import galleryData from './galleryComponents/galleryData'
import DisplayIcon from './galleryComponents/DisplayIcon'
import DisplayImg from './galleryComponents/DisplayImg'
import DisplayTitle from './galleryComponents/DisplayTitle'
import DisplayDescript from './galleryComponents/DisplayDescript'
import ArrowButton from '../../components/ArrowButton'

const GalleryPage = () => {

    const [gallerySection, setGallerySection] = useState('welcome')
    const [galleryDisplay, setGalleryDisplay] = useState('mainDisplay')
    const [direction, setDirection] = useState(0)

    const hiddenButtons = ['welcome']
    const displayButtonClass = hiddenButtons.includes(gallerySection) ? 'noDisplay' : 'displayButtons'

    const currentData = galleryData[gallerySection][galleryDisplay]['content']

    const handleNavigation = (type, increment) => {
        const currentList = type === 'section' ? Object.keys(galleryData) : Object.keys(galleryData[gallerySection])
        const currentIndex = currentList.indexOf(type === 'section' ? gallerySection : galleryDisplay)
        const newIndex = currentIndex + increment

        if (newIndex < 0 || newIndex >= currentList.length) return

        setDirection(increment)
        if (type === 'section') {
            setGallerySection(currentList[newIndex])
            setGalleryDisplay('mainDisplay')
        } else {
            setGalleryDisplay(currentList[newIndex])
        }
    }

    return (
        <div className="galleryPage">

            <DisplayIcon displayData={{gallerySection, galleryDisplay}} />

            <AnimatePresence custom={direction} mode="wait" initial={false}>
                <motion.div
                    className="gallerySection"
                    key={`gallerySection${gallerySection}`}
                    custom={direction} // Pass direction to variants
                    initial="enter"
                    animate="center"
                    exit="exit"
                    variants={sectionVariants}
                    transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 15,
                        duration: 0.55,
                        ease: 'anticipate',
                    }}
                >
                    <div className='displayContent'>
                        <div className={displayButtonClass}>
                            <ArrowButton handleNavigation={handleNavigation} division='display' direction={-1} pointer='upArrow' />
                            <ArrowButton handleNavigation={handleNavigation} division='display' direction={1} pointer='downArrow' />
                        </div>

                        <DisplayImg displayData={{ gallerySection, galleryDisplay, currentData }} />
                        <DisplayTitle displayData={{ gallerySection, galleryDisplay, currentData }} />
                        <div className='displayLine'></div>
                        <DisplayDescript displayData={{ gallerySection, galleryDisplay, currentData }} />
                        <button className='coolView'>View Miniatures</button>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className='sectionButtons'>
                <ArrowButton handleNavigation={handleNavigation} division='section' direction={-1} pointer='leftArrow' />
                <button>Menu</button>
                <ArrowButton handleNavigation={handleNavigation} division='section' direction={1} pointer='rightArrow' />
            </div>
        </div >
    )
}

export default GalleryPage;
