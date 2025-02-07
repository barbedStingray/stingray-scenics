import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import axios from 'axios'

import { motion, AnimatePresence } from 'framer-motion'
import { slideVariants, displaySpring } from './animations'


const DisplayContent = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const direction = useSelector((state) => state.direction)
    const { gallerySection, galleryDisplay } = useSelector((state) => state.gallerySlice)
    const { title, description, photo } = useSelector((state) => state.gallerySlice).content
    const galleryView = useSelector((state) => state.galleryView)

    // todo: expand to request database
    const toGroupDisplay = () => {
        navigate('/groupDisplay')
    }


    const requestMinisShowcase = async () => {
        try {
            const results = await axios.get('/api/myMinis/allMinis', {
                params: { gallerySection, galleryDisplay }
            })
            console.log('results', results.data)
            const myMinis = results.data
            dispatch({
                type: 'SET_SHOWCASE',
                payload: myMinis
            })
            dispatch({
                type: 'SET_DISPLAY',
                payload: true,
            })
        } catch (error) {
            console.log('error if finding your minis', error)
            alert('there was an error in your request')
        }
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
                    onClick={() => requestMinisShowcase()}
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
