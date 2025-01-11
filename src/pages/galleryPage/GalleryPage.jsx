import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion'
import './galleryPage.css'
import { sectionVariants } from './galleryComponents/animations'

import MenuSection from './galleryComponents/MenuSection'
import DisplayContent from './galleryComponents/DisplayContent'
import galleryData from './galleryComponents/galleryData'
import DisplayIcon from './galleryComponents/DisplayIcon'
import ArrowButton from '../../components/arrowButton/ArrowButton'

const GalleryPage = () => {

    const dispatch = useDispatch()
    const { gallerySection, galleryDisplay, colorShade } = useSelector((state) => state.gallerySlice)
    const direction = useSelector((state) => state.direction)
    console.log(gallerySection, galleryDisplay, colorShade)

    const hiddenButtons = ['welcome', 'menuSection']
    const displayButtonClass = hiddenButtons.includes(gallerySection) ? 'noDisplay' : 'displayButtons'


    const handleViewJump = () => {
        console.log('menu option')
        dispatch({
            type: 'SECTION_CHANGE',
            payload: { gallerySection: 'menuSection', galleryDisplay: 'mainDisplay', colorShade: colorShade }
        })
    }


    const handleArrowNavigation = (type, increment) => {
        const currentList = type === 'section' ? Object.keys(galleryData) : Object.keys(galleryData[gallerySection])
        const currentIndex = currentList.indexOf(type === 'section' ? gallerySection : galleryDisplay)
        const newIndex = currentIndex + increment

        if (newIndex < 0 || newIndex >= currentList.length || currentList[newIndex] === 'menuSection') return

        dispatch({ type: 'SET_DIRECTION', payload: increment })

        if (type === 'section') {
            const newSection = currentList[newIndex];
            const newShade = galleryData[newSection]['mainDisplay'].color
            dispatch({
                type: 'SECTION_CHANGE',
                payload: { gallerySection: newSection, colorShade: newShade }
            })

        } else {
            const newDisplay = currentList[newIndex];
            const newShade = galleryData[gallerySection][newDisplay].color
            dispatch({
                type: 'DISPLAY_CHANGE',
                payload: { gallerySection: gallerySection, galleryDisplay: newDisplay, colorShade: newShade }
            })
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

            <DisplayIcon />

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
                    {gallerySection === 'menuSection' ? <MenuSection /> : <DisplayContent />}

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
