import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { slideVariants } from './animations'


const DisplayTitle = ({ displayData }) => {
    const { gallerySection, galleryDisplay, currentData } = displayData


    return (
        <AnimatePresence mode='wait' initial={false}>
            <motion.p
                className='displayTitle'
                key={`title-${gallerySection}${galleryDisplay}`}
                initial="enter"
                animate="center"
                exit="exit"
                variants={slideVariants}
                transition={{
                    type: 'spring',
                    stiffness: 180,
                    damping: 15,
                    duration: 0.40,
                    delay: 0.075,
                    // ease: 'anticipate',
                }}

            >
                {currentData.title}
            </motion.p>
        </AnimatePresence>
    )
}

export default DisplayTitle
