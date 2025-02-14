import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import axios from 'axios'
import ProgressiveImage from '../../../components/progressiveImage/ProgressiveImage'

import { motion, AnimatePresence } from 'framer-motion'
import { slideVariants, displaySpring } from './animations'


const DisplayContent = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const direction = useSelector((state) => state.direction)
    const { gallerySection, galleryDisplay } = useSelector((state) => state.gallerySlice)
    const { title, description, photo } = useSelector((state) => state.gallerySlice).content
    const galleryView = useSelector((state) => state.galleryView)


    const requestMinisShowcase = async (leavePage) => {
        try {
            // todo setting your loader here

            const { data: myMinis } = await axios.get('/api/myMinis/allMinis', {
                params: { gallerySection, galleryDisplay }
            });
            // ! toggle back when you have photos of models
            dispatch({ type: 'SET_SHOWCASE', payload: myMinis })

        } catch (error) {
            console.log('error if finding your minis', error)
            alert('there was an error in your request')
        } finally {

            dispatch({ type: 'SET_DISPLAY', payload: !leavePage });
            if (leavePage) {
                navigate('/groupDisplay')
            }

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
                {/* <motion.img className="displayImage"
                    src={photo}
                    alt={title}
                    custom={direction}
                    variants={slideVariants}
                    transition={displaySpring}
                /> */}
                
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


                {galleryView ? (
                    <motion.div
                        className='galleryButton-container'
                        custom={direction}
                        variants={slideVariants}
                        transition={displaySpring}
                    >
                        <button className='trackButton' onClick={(e) => { dispatch({ type: 'SET_CONTACT', payload: true }) }}>
                            <span>Commission</span>
                        </button>
                    </motion.div>
                ) : (
                    <>
                        <motion.div className='galleryButton-container mobileView'
                            custom={direction}
                            variants={slideVariants}
                            transition={displaySpring}
                        >
                            <button className='trackButton' onClick={() => requestMinisShowcase(true)}>
                                <span>View Models</span>
                            </button>
                        </motion.div>

                        <motion.div
                            className='galleryButton-container largeView'
                            custom={direction}
                            variants={slideVariants}
                            transition={displaySpring}
                        >
                            <button className='trackButton' onClick={() => requestMinisShowcase(false)}>
                                <span>View Models</span>
                            </button>
                        </motion.div>
                    </>

                )}


            </motion.div>
        </AnimatePresence>)
}

export default DisplayContent
