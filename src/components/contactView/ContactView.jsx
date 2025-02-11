import React, { useRef, useState } from 'react'
import './contactView.css'
import { motion, useAnimate, useSpring, useInView, useTransform, useScroll, useMotionTemplate, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import emailjs from '@emailjs/browser'
import { displayView } from '../universalFunctions';
import { LuArrowLeftFromLine } from "react-icons/lu";
import SentSuccess from './SentSuccess';

import SequenceButton from '../sequenceButton/SequenceButton';


import bobaFett from '../../images/bobaFett.png'

// todo style your success modal
// todo animate your success modal
// todo be happy because it'll be complete

const ContactView = () => {

  const dispatch = useDispatch()
  const contactView = useSelector((state) => state.contactView)
  const textAreaRef = useRef(null)
  const [textValue, setTextValue] = useState('')
  const rotateValue = Math.floor(Math.random() * 201) - 100
  console.log('textvalue', textValue.length)


  const form = useRef()
  const [isSent, setIsSent] = useState(true)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_m84dauj", // Service ID
        "template_8zddm55", // Template ID
        form.current,
        "V7Z2us5299px9Hs2g" // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setTextValue('')
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
        }
      )
  }




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

        <div className='contactReturn' onClick={() => displayView('SET_CONTACT', false, dispatch)}><LuArrowLeftFromLine /></div>
        <img className='contactFett' src={bobaFett} />

        <AnimatePresence mode='wait'>
          {isSent ? (
            <SentSuccess isSent={isSent} setIsSent={setIsSent} />
          ) : (
            <motion.form
              className='contactForm'
              ref={form}
              onSubmit={sendEmail}
              key={isSent ? 'form-hidden' : 'form-visible'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >

              <p>Contact!</p>
              <div className='input-group'>
                <input type='text' name="user_name" id='user_name' required />
                <label htmlFor="user_name">User Name</label>
                <span className='bottomline'></span>
              </div>
              <div className='input-group'>
                <input type='text' name="user_email" id='user_email' required />
                <label htmlFor="user_email">User email</label>
                <span className='bottomline'></span>
              </div>
              <div className='input-group'>
                <input type='text' name="user_offer" id='user_offer' required />
                <label htmlFor="user_offer">Your budget</label>
                <span className='bottomline'></span>
              </div>

              <p>Message;</p>
              <textarea
                className='realTextArea'
                name="user_vision"
                ref={textAreaRef}
                onChange={(e) => setTextValue(e.target.value)}
                value={textValue}
                maxLength={220}
              />
              <div
                className='fakeTextArea'
                onClick={() => textAreaRef.current.focus()}
              >
                <AnimatePresence>
                  {textValue.split('').map((letter, index) => {
                    return <motion.span
                      key={index}
                      className={letter === " " ? "space" : "inline-block"}
                      initial={{ opacity: 0, y: 100, rotate: rotateValue }}
                      animate={{ opacity: 1, y: 0, rotate: 0 }}
                      exit={{ opacity: 0, y: 100, rotate: rotateValue, transition: { duration: 0.5, } }}
                      transition={{ duration: 0.5, ease: 'easeIn' }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  })}
                </AnimatePresence>
              </div>

              <SequenceButton />
              {/* <button className='submitContact' type='submit'>SEND</button> */}
            </motion.form>
          )}
        </AnimatePresence>

        <button style={{ zIndex: '100' }} onClick={() => setIsSent(true)}>SEND IT</button>
        
      </motion.div>
    </AnimatePresence>
  )
}

export default ContactView