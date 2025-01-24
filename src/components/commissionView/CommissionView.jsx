import React from 'react'
import './commissionView.css'
import { motion, useSpring, useInView, useTransform, useScroll, useMotionTemplate, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';


const CommissionView = () => {

  const dispatch = useDispatch()
  const commissionView = useSelector((state) => state.commissionView)

  const displayContactView = () => {
    dispatch({
      type: 'SET_COMMISSION',
      payload: false,
    })
  }


  return (
    <AnimatePresence mode='wait'>
      <motion.div
        className={commissionView ? 'commissionView' : 'noDisplay'}
        key={commissionView ? 'contact-visible' : 'contact-hidden'}
        initial={{ x: '-100%' }}
        animate={{ x: commissionView ? '0%' : '-100%' }}
        exit={{ x: '-100%' }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <h1>COMMISSION FORM</h1>
        <button onClick={displayContactView}>Return</button>
      </motion.div>
    </AnimatePresence>
  )
}

export default CommissionView
