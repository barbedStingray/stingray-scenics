import React from 'react'
import { useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { slideVariants, displaySpring } from './animations'
import ProgressiveImage from '../../../components/progressiveImage/ProgressiveImage'



const DisplayContent = () => {

    const direction = useSelector((state) => state.direction)
    const { gallerySection, galleryDisplay } = useSelector((state) => state.gallerySlice)
    const { title, description, photo } = useSelector((state) => state.gallerySlice).content


    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                className='displayContent'
                key={`content-${gallerySection}-${galleryDisplay}`}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    staggerChildren: 0.1,
                }}
            >     
                       
                <motion.div
                    className='displayImage'
                    custom={direction}
                    variants={slideVariants}
                    transition={displaySpring}
                >
                    <ProgressiveImage picture={photo} />
                </motion.div>

                <motion.p className="displayTitle"
                    custom={direction}
                    variants={slideVariants}
                    transition={displaySpring}
                >
                    {title}
                </motion.p>

                <div className='displayLine'></div>

                <motion.p className="displayDescription"
                    custom={direction}
                    variants={slideVariants}
                    transition={displaySpring}
                >
                    {description}
                </motion.p>
            </motion.div>
        </AnimatePresence>)
}

export default DisplayContent
