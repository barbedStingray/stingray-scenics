import React, { useRef, useState } from 'react'
import './contactView.css'
import { motion, useSpring, useInView, useTransform, useScroll, useMotionTemplate, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import emailjs from '@emailjs/browser'
import { displayView } from '../universalFunctions';


import bobaFett from '../../images/bobaFett.png'


// todo limit your text area characters
// todo build a cool select menu
// todo edit your buttons
// todo scale it to bigger screen sizes
// todo be happy because it'll be complete

const ContactView = () => {

  const dispatch = useDispatch()
  const contactView = useSelector((state) => state.contactView)
  const textAreaRef = useRef(null)
  const [textValue, setTextValue] = useState('')
  const rotateValue = Math.floor(Math.random() * 201) - 100
  console.log('textvalue', textValue.length)



  const form = useRef()
  const [isSent, setIsSent] = useState(false)

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
          e.target.reset();

        },
        (error) => {
          console.error(error.text);
        }
      )
  }




  return (
    <AnimatePresence mode='wait'>

      {/* build the Congrats it sent page */}

      <motion.div
        className={contactView ? 'contactView' : 'noDisplay'}
        key={contactView ? 'contact-visible' : 'contact-hidden'}
        initial={{ x: '-100%' }}
        animate={{ x: contactView ? '0%' : '-100%' }}
        exit={{ x: '-100%' }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <p>Contact!</p>

        <form className='contactForm' ref={form} onSubmit={sendEmail}>

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
                  exit={{
                    opacity: 0, y: 100, rotate: rotateValue,
                    transition: { duration: 0.5, },
                  }}
                  transition={{ duration: 0.5, ease: 'easeIn'}}

                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              })}
            </AnimatePresence>

          </div>

          <button type='submit'>SEND</button>

        </form>


        <button className='contactReturn' onClick={() => displayView('SET_CONTACT', false, dispatch)}>Return</button>

        <img className='contactFett' src={bobaFett} />

      </motion.div>
    </AnimatePresence>
  )
}

export default ContactView
