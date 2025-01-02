import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { slideVariants } from './animations'


const DisplayImg = ({ displayData }) => {
    const { gallerySection, galleryDisplay, currentData } = displayData

    return (
        <AnimatePresence mode='wait' initial={false}>
            <motion.img
                className='displayImage'
                src={currentData.photo}
                alt='photo image'

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
                    delay: 0,
                    // ease: 'anticipate',
                }}

            />
        </AnimatePresence>
    )
}

export default DisplayImg
