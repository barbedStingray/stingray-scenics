import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { motion, AnimatePresence } from 'framer-motion'
import { slideVariants, displaySpring } from './animations'


const DisplayContent = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const direction = useSelector((state) => state.direction)
    const { gallerySection, galleryDisplay } = useSelector((state) => state.gallerySlice)
    const { title, description, photo } = useSelector((state) => state.gallerySlice).content
    const galleryView = useSelector((state) => state.galleryView)

    const toGroupDisplay = () => {
        navigate('/groupDisplay')
    }

    // todo this will be a async function when DB is implemented
    const largeModelDisplay = () => {
        console.log('largeModelDisplay')

        // todo make axios request for images
        // todo trigger loader

        // todo toggle between slideshow and model display
        dispatch({
            type: 'SET_DISPLAY',
            payload: !galleryView,
        })
        

    }

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
                    src={photo}
                    alt={title}
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
                    {title}
                </motion.p>

                <div className='displayLine'></div>

                <motion.p
                    className="displayDescription"
                    custom={direction}
                    variants={slideVariants}
                    transition={displaySpring}
                >
                    {description}
                </motion.p>



                <motion.button
                    className='galleryButton mobileView'
                    onClick={toGroupDisplay}
                    custom={direction}
                    variants={slideVariants}
                    transition={displaySpring}
                >
                    View Miniatures Mobile
                </motion.button>

                <motion.button
                    className='galleryButton largeView'
                    onClick={() => largeModelDisplay()}
                    custom={direction}
                    variants={slideVariants}
                    transition={displaySpring}
                >
                    View Miniatures LARGE
                </motion.button>



            </motion.div>
        </AnimatePresence>)
}

export default DisplayContent
