import React from 'react'
import './contactView.css'
import { motion, useSpring, useInView, useTransform, useScroll, useMotionTemplate, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { displayView } from '../universalFunctions';


const ContactView = () => {

  const dispatch = useDispatch()
  const contactView = useSelector((state) => state.contactView)



  return (
    <AnimatePresence mode='wait'>
      <motion.div
        className={contactView ? 'contactView' : 'noDisplay'}
        key={contactView ? 'contact-visible' : 'contact-hidden'}
        initial={{ x: '-100%' }}
        animate={{ x: contactView ? '0%' : '-100%' }}
        exit={{ x: '-100%' }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <h1>Welcome to the Contact Portion</h1>
        <button onClick={() => displayView('SET_CONTACT', false, dispatch)}>Return</button>
      </motion.div>
    </AnimatePresence>
  )
}

export default ContactView
