import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { slideVariants, displaySpring } from './animations'


const DisplayContent = ({ displayData }) => {
    const { gallerySection, galleryDisplay, currentData, direction } = displayData;


    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                className='displayContent'
                key={`content-${gallerySection}${galleryDisplay}`}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    staggerChildren: 0.09,
                }}
            >
                <motion.img
                    className="displayImage"
                    src={currentData.photo}
                    alt={currentData.title}
                    custom={direction}
                    variants={slideVariants}
                    transition={displaySpring}
                />
                <motion.p
                    className="displayTitle"
                    custom={direction}
                    variants={slideVariants}
                    transition={displaySpring}
                >
                    {currentData.title}
                </motion.p>

                <div className='displayLine'></div>

                <motion.p
                    className="displayDescription"
                    custom={direction}
                    variants={slideVariants}
                    transition={displaySpring}
                >
                    {currentData.description}
                </motion.p>

                <motion.button
                    className='galleryButton'
                    custom={direction}
                    variants={slideVariants}
                    transition={displaySpring}
                >
                    View Miniatures
                </motion.button>


            </motion.div>
        </AnimatePresence>)
}

export default DisplayContent
