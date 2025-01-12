import React from 'react'
import { useSelector } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'
import MenuSection from './MenuSection'
import DisplayContent from './DisplayContent'
import { sectionVariants } from './animations'
import ArrowButton from '../../../components/arrowButton/ArrowButton'



const GalleryInformation = () => {
    const { gallerySection, galleryDisplay, colorShade } = useSelector((state) => state.gallerySlice)
    const direction = useSelector((state) => state.direction)

    const hiddenButtons = ['welcome', 'menuSection']
    const displayButtonClass = hiddenButtons.includes(gallerySection) ? 'noDisplay' : 'displayButtons'


    return (
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
    )
}

export default GalleryInformation
