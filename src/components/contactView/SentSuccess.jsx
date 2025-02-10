import React from 'react'
import { useDispatch } from 'react-redux';
import { motion, useSpring, useInView, useTransform, useScroll, useMotionTemplate, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { basicFadeIn } from './animations';

const SentSuccess = ({ isSent, setIsSent }) => {

    const dispatch = useDispatch()

    const messageSentSuccess = () => {
        dispatch({ type: 'SET_CONTACT', payload: false })
        setIsSent(false);
    }


    return (
        <motion.div
            className={isSent ? 'sentSuccess' : 'noDisplay'}
            key={isSent ? 'sent-visible' : 'sent-hidden'}
            variants={basicFadeIn}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
        >

            <h1>Your Message Has Been Sent!</h1>
            <button onClick={messageSentSuccess}>Great!</button>

        </motion.div>
    )
}

export default SentSuccess
