import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { slideVariants, displaySpring } from './animations'

import FrostyButton from '../../../components/FrostyButton'

const DisplayContent = ({ displayData }) => {
    const { gallerySection, galleryDisplay, currentData } = displayData;



    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                className='displayContent'
                key={`content-${gallerySection}${galleryDisplay}`}
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
                    variants={slideVariants}
                    transition={displaySpring}
                />
                <motion.p
                    className="displayTitle"
                    variants={slideVariants}
                    transition={displaySpring}
                >
                    {currentData.title}
                </motion.p>

                <div className='displayLine'></div>

                <motion.p
                    className="displayDescription"
                    variants={slideVariants}
                    transition={displaySpring}
                >
                    {currentData.description}
                </motion.p>

                <motion.button
                    className='galleryButton'
                    variants={slideVariants}
                    transition={displaySpring}
                >
                    View Miniatures
                </motion.button>

                {/* <FrostyButton /> */}


            </motion.div>
        </AnimatePresence>)
}

export default DisplayContent
