import React from 'react'
import './sentSuccess.css'
import { useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'

import stingray from '../../images/stingrayLogo-27.png'

const containerVariants = {
    enter: {
        opacity: 1,
        transition: {
            delayChildren: 0.4, // Adds a 0.5s delay before staggering starts
            staggerChildren: 0.2, // Stagger each child by 0.2s
            duration: 0.5,
            ease: 'easeOut'
        },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.3 },
    },
}

const childVariants = {
    enter: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: { duration: 0.3 },
    },
}

const SentSuccess = ({ isSent, setIsSent }) => {
    const dispatch = useDispatch()

    const messageSentSuccess = () => {
        dispatch({ type: 'SET_CONTACT', payload: false })
        setIsSent(false)
    }

    const thanksMessage = 'Thank you for sharing your vision with me! Im excited to bring it to life and will follow up with you in the coming week.'

    return (
        <AnimatePresence>
            {isSent && (
                <motion.div
                    className="sentSuccess"
                    key="sent-visible"
                    variants={containerVariants}
                    initial="exit"
                    animate="enter"
                    exit="exit"
                >
                    <motion.img variants={childVariants} className='sentStingray' src={stingray} />
                    <motion.p variants={childVariants} className='sentMessage'>Message sent!</motion.p>
                    <motion.p variants={childVariants} className='sentText'>{thanksMessage}</motion.p>
                    <div variants={{ childVariants }} className='sentButton-container'>
                        <motion.button variants={childVariants} onClick={messageSentSuccess} className='trackButton'>
                            <span>Great!</span>
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default SentSuccess
