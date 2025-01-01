import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useTransform, useMotionTemplate } from 'framer-motion'
import './galleryPage.css'

import galleryData from './galleryComponents/galleryData'
import ArrowButton from '../../components/ArrowButton'

const GalleryPage = () => {

    const [gallerySection, setGallerySection] = useState('welcome')
    const [galleryDisplay, setGalleryDisplay] = useState('mainDisplay')
    const [direction, setDirection] = useState(0)

    const hiddenButtons = ['welcome', 'terrain']
    const displayButtonClass = hiddenButtons.includes(gallerySection) ? 'noDisplay' : 'displayButtons'


    const gallerySectionVariants = {
        enter: (direction) => ({
            rotateY: direction > 0 ? -90 : 90,
            rotateX: 3,
            transformOrigin: "50% 50%",
        }),
        center: {
            rotateY: 0,
            transformOrigin: "50% 50%"
        },
        exit: (direction) => ({
            rotateY: direction > 0 ? 90 : -90,
            rotateX: 3,
            transformOrigin: "50% 50%",
        })
    }

    const displaySlideVariants = {
        enter: {
            opacity: 0,
            y: 30,
        },
        center: {
            opacity: 1,
            y: 0,
        },
        exit: {
            opacity: 0,
            y: 30,
        }
    }


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

            <AnimatePresence custom={direction} mode="wait" initial={true}>
                <motion.img
                    className='sectionIcon'
                    src={galleryData[gallerySection][galleryDisplay]['icon']}
                    key={`icon${gallerySection}${galleryDisplay}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.9,
                        ease: 'easeInOut',
                    }}
                />
            </AnimatePresence>

            <AnimatePresence custom={direction} mode="wait" initial={false}>
                <motion.div
                    className="gallerySection"
                    key={`gallerySection${gallerySection}`}
                    custom={direction} // Pass direction to variants
                    initial="enter"
                    animate="center"
                    exit="exit"
                    variants={gallerySectionVariants}
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

                        <img className='displayImage' src={currentData.photo} />

                        <AnimatePresence mode='wait' initial={false}>
                            <motion.p
                                className='displayTitle'
                                key={`title-${gallerySection}${galleryDisplay}`}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                variants={displaySlideVariants}
                                transition={{
                                    type: 'spring',
                                    stiffness: 180,
                                    damping: 15,
                                    duration: 0.40,
                                    // delay: 0.15,
                                    // ease: 'anticipate',
                                }}

                            >
                                {currentData.title}
                            </motion.p>
                        </AnimatePresence>


                        <div className='displayLine'></div>
                        <p className='displayDescription'>{currentData.description}</p>
                        <button className='coolView'>View Miniatures</button>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className='sectionButtons'>
                <ArrowButton handleNavigation={handleNavigation} division='section' direction={-1} pointer='leftArrow' />
                <ArrowButton handleNavigation={handleNavigation} division='section' direction={1} pointer='rightArrow' />
            </div>

        </div >
    )
}

export default GalleryPage;
