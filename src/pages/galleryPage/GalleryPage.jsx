import React, { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion'
import './galleryPage.css'
import { sectionVariants } from './galleryComponents/animations'

import MenuSection from './galleryComponents/MenuSection'
import DisplayContent from './galleryComponents/DisplayContent'
import galleryData from './galleryComponents/galleryData'
import DisplayIcon from './galleryComponents/DisplayIcon'
import ArrowButton from '../../components/arrowButton/ArrowButton'

const GalleryPage = () => {

    // reducers
    const gallerySectionReducer = useSelector((state) => state.gallerySection)
    console.log('gallerySection', gallerySectionReducer)

    const [gallerySection, setGallerySection] = useState('welcome')
    const [galleryDisplay, setGalleryDisplay] = useState('mainDisplay')
    const [direction, setDirection] = useState(0)
    const currentData = galleryData[gallerySection][galleryDisplay]['content']
    const [colorShade, setColorShade] = useState('#008225')

    const hiddenButtons = ['welcome', 'menuSection']
    const displayButtonClass = hiddenButtons.includes(gallerySection) ? 'noDisplay' : 'displayButtons'


    const handleViewJump = () => {
        console.log('menu option')
        setGallerySection('menuSection')
        setGalleryDisplay('mainDisplay')
        // set color for menu as well OR leave it as whatever color it already is
    }



    const handleArrowNavigation = (type, increment) => {
        const currentList = type === 'section' ? Object.keys(galleryData) : Object.keys(galleryData[gallerySection])
        const currentIndex = currentList.indexOf(type === 'section' ? gallerySection : galleryDisplay)
        const newIndex = currentIndex + increment

        if (newIndex < 0 || newIndex >= currentList.length || currentList[newIndex] === 'menuSection') return

        setDirection(increment)

        if (type === 'section') {
            const newSection = currentList[newIndex];
            const newShade = galleryData[newSection]['mainDisplay'].color

            setGallerySection(currentList[newIndex])
            setGalleryDisplay('mainDisplay')
            setColorShade(newShade);

        } else {
            const newDisplay = currentList[newIndex];
            const newShade = galleryData[gallerySection][newDisplay].color
            setGalleryDisplay(currentList[newIndex])
            setColorShade(newShade);
        }

    }

    return (
        <div
            className="galleryPage galleryBackground"
            style={{ '--color-shadeOne': colorShade }}
            transition={{
                duration: 2.5
            }}
        >

            <DisplayIcon displayData={{ gallerySection, galleryDisplay }} />

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
                        ease: 'anticipate',
                    }}
                >
                    {gallerySection === 'menuSection' ?
                        <MenuSection controls={{ setGallerySection, setGalleryDisplay, setColorShade }} />
                        :
                        <DisplayContent displayData={{ gallerySection, galleryDisplay, currentData, direction }} />
                    }

                    <div className={displayButtonClass}>
                        <ArrowButton handleNavigation={handleArrowNavigation} division='display' direction={-1} pointer='upArrow' />
                        <ArrowButton handleNavigation={handleArrowNavigation} division='display' direction={1} pointer='downArrow' />
                    </div>

                </motion.div>
            </AnimatePresence>

            <div className='sectionButtons'>
                <ArrowButton handleNavigation={handleArrowNavigation} division='section' direction={-1} pointer='leftArrow' />
                <button onClick={handleViewJump}>Menu</button>
                <ArrowButton handleNavigation={handleArrowNavigation} division='section' direction={1} pointer='rightArrow' />
            </div>
        </div >
    )
}

export default GalleryPage;
