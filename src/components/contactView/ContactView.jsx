import React, { useRef, useState } from 'react'
import './contactView.css'
import { motion, useSpring, useInView, useTransform, useScroll, useMotionTemplate, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import emailjs from '@emailjs/browser'
import { displayView } from '../universalFunctions';



const ContactView = () => {

  const dispatch = useDispatch()
  const contactView = useSelector((state) => state.contactView)


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
                      e.target.reset(); // Optional: Reset form after sending
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
        <h1>Welcome to the Contact Portion</h1>

        <form ref={form} onSubmit={sendEmail}>
          <p>What will we create?</p>

          <p>Your Name</p>
          <input type="text" name="user_name" placeholder="Enter your name" />

          <p>Your Email</p>
          <input type="email" name="user_email" placeholder="Enter your email" />

          <p>Your Message</p>
          <p>OR</p>
          <p>Share your vision with me!</p>
          <textarea name="user_vision" />
          
          <p>What would you like to pay for this commission?</p>
          <input type='text' name="user_offer" />
          <button type='submit'>SEND</button>
        </form>


        <button onClick={() => displayView('SET_CONTACT', false, dispatch)}>Return</button>
      </motion.div>
    </AnimatePresence>
  )
}

export default ContactView
