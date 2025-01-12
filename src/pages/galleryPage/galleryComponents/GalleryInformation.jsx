import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'
import MenuSection from './MenuSection'
import DisplayContent from './DisplayContent'
import { sectionVariants } from './animations'
import ArrowButton from '../../../components/arrowButton/ArrowButton'



const GalleryInformation = () => {

    const dispatch = useDispatch()
    const { gallerySection, colorShade } = useSelector((state) => state.gallerySlice)
    const direction = useSelector((state) => state.direction)

    const hiddenButtons = ['welcome', 'menuSection']
    const displayButtonClass = hiddenButtons.includes(gallerySection) ? 'noDisplay' : 'displayButtons'

    const handleViewJump = () => {
        console.log('menu option')
        dispatch({
            type: 'SECTION_CHANGE',
            payload: { gallerySection: 'menuSection', galleryDisplay: 'mainDisplay', colorShade: colorShade }
        })
    }


    return (
        <>
            <AnimatePresence custom={direction} mode="wait" initial={false}>

                <motion.div
                    className="galleryInformation"
                    key={`galleryInformation-${gallerySection}`}
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
                        <ArrowButton division='display' direction={-1} pointer='upArrow' />
                        <ArrowButton division='display' direction={1} pointer='downArrow' />
                    </div>

                </motion.div>
            </AnimatePresence>

            <div className='sectionButtons'>
                <ArrowButton division='section' direction={-1} pointer='leftArrow' />
                <button onClick={handleViewJump}>Menu</button>
                <ArrowButton division='section' direction={1} pointer='rightArrow' />
            </div>
        </>
    )
}

export default GalleryInformation
