import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import MenuSection from './menuSection/MenuSection'
import DisplayContent from './DisplayContent'
import { sectionVariants } from './animations'
import ArrowButton from '../../../components/arrowButton/ArrowButton'
import DisplayIcon from './displayIcon/DisplayIcon'
import { TbHomeShare } from "react-icons/tb";

import MenuButton from './buttons/MenuButton'
import TrackButton from '../../../components/trackButton/TrackButton'
import Loader from '../../../components/loader/Loader'



const GalleryInformation = () => {

    const dispatch = useDispatch()
    const { gallerySection } = useSelector((state) => state.gallerySlice)
    const direction = useSelector((state) => state.direction)

    const hiddenButtons = ['welcome', 'menuSection']
    const displayButtonClass = hiddenButtons.includes(gallerySection) ? 'noDisplay' : 'displayButtons'

    return (
        <div className='galleryVeiwControl'>

            <DisplayIcon />

            <AnimatePresence custom={direction} mode="wait" initial={false}>
                <motion.div
                    className="contentContainer"
                    key={`galleryInformation-${gallerySection}`}
                    custom={direction}
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
                        <ArrowButton division='display' direction={-1} pointer='upArrow' />
                        <ArrowButton division='display' direction={1} pointer='downArrow' />
                    </div>

                </motion.div>
            </AnimatePresence>

            <Loader />
            <TrackButton />

            <div className='sectionButtons'>
                <ArrowButton division='section' direction={-1} pointer='leftArrow' />
                <MenuButton />
                <Link
                    className="homeLink"
                    to={'/'}
                    onClick={(e) => {
                        dispatch({ type: 'SET_DISPLAY', payload: false });
                        dispatch({ type: 'SECTION_CHANGE', payload: { gallerySection: 'welcome', galleryDisplay: 'mainDisplay' } })
                    }}
                >
                    <TbHomeShare />
                </Link>
                <ArrowButton division='section' direction={1} pointer='rightArrow' />
            </div>
        </div>
    )
}

export default GalleryInformation
