import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import './commissionPage.css'
import { motion, useScroll, useAnimation, useMotionTemplate, useTransform, useMotionValueEvent, useInView } from 'framer-motion'
import { displayView } from '../../components/universalFunctions'



const CommissionPage = () => {

    const dispatch = useDispatch()
    const commissionRef = useRef()
    const { scrollYProgress: commissionContainer } = useScroll({
        container: commissionRef,
        offset: ['start start', 'end end']
    })
    // console logging
    useMotionValueEvent(commissionContainer, 'change', (latest) =>
        console.log('mainY', latest)
    )

    const ringRotate = useTransform(commissionContainer, [0, 1], ['0deg', '90deg'])

    const doubleGradientColor = useTransform(commissionContainer, [0, 0.5, 1], [
        `linear-gradient(45deg,#001e00,#121e00)`,
        `linear-gradient(120deg,#1e0000,#0a001e)`,
        `linear-gradient(120deg,#1e0000,#0a001e)`,
    ])
    const gradientStyle = useMotionTemplate`${doubleGradientColor}`

    const openingLine = 'Welcome to Stingray Scenics, the intersection of passion, creativity, and art! We specialize in crafting unique terrain and custom-painted miniatures, all tailored to your personal vision. Whether its a modular battlefield, a dramatic scene, or custom work on a personal hero, our versatile commissions ensure your tabletop is as epic as your imagination.'


    
    
    return (
        <motion.div
            className='commissionPage'
            ref={commissionRef}
            style={{ background: gradientStyle }}
        >
            <motion.div className='ringBox' style={{ rotate: ringRotate }}></motion.div>

            <div className='comSection'>
                <h1>Commission</h1>
                <p>{openingLine}</p>
                <p>Scroll to View the Process</p>
                <p>OR</p>
                <p>Click the Button to Request a quote</p>
                <button onClick={() => displayView('SET_CONTACT', true, dispatch)}>Make a Request</button>
            </div>

            <div className='comSection'>
                <p>What can I Customize?</p>
                <ul>
                    <li>Miniatures</li>
                    <li>Scenic Bases</li>
                    <li>Terrain</li>
                </ul>
            </div>

            <ComModels />

            <div className='comSection'>
                <p>Step 2. Scenic Bases</p>
                <p></p>
            </div>

            <div className='comSection'>
                <p>Step 4. Finalize the Price</p>
                <p>Please indicate your desired price range</p>
                <p>Or just make your quote</p>
            </div>
            <div className='comSection'>
                <p>Step 4. Double Check your Request</p>
                <p>button to send</p>
            </div>


        </motion.div>
    )
}

export default CommissionPage







const ComModels = ({ title, text }) => {
    const ref = useRef(null)

    const acquireDescription = 'Finding great miniatures for your custom projects is made easy with a variety of excellent sources.'
    const warhammerDesc = 'Strainght from the game creators themselves, Warhammer hasnt disappointed me yet with the detail and quality of their models.'
    const etsyDesc = 'Etsy contains a wonderful mix of affordability and uniqueness, with talented creators offering exclusive designs'
    const selfDesc = 'If you already own models, have printed your own, or would like to restore your current collection, those can certainly be worked on as well! Whether its repairing, repainting, or transforming your existing pieces into something uniquely yours, Im happy to breathe new life into your miniatures.'
    // const unknown = ''


    const containerVariants = {
        hidden: { opacity: 1 }, // Ensures the parent is visible but children animate in
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.3, // Time between each child's animation
            },
        },
    }

    const fadeIn = {
        hidden: { opacity: 0, y: 20 }, // Start transparent and slightly shifted down
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    }

    return (
        <motion.div
            className="comSection"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
                // once: true, 
                margin: '-50% 0px'
            }}
        >
            <div className='comModels'>
                <p>{acquireDescription}</p>
                <motion.h1 variants={fadeIn}>Step 2. Source Your Miniatures</motion.h1>
                {/* <motion.p variants={fadeIn}>{acquireDescription}</motion.p> */}
                <motion.div className='acquireMethod' variants={fadeIn}>
                    <h3>Warhammer</h3>
                    <p>{warhammerDesc}</p>
                </motion.div>
                <motion.div className='acquireMethod' variants={fadeIn}>
                    <h3>Etsy</h3>
                    <p>{etsyDesc}</p>
                </motion.div>
                <motion.div className='acquireMethod' variants={fadeIn}>
                    <h3>Self Sourced</h3>
                    <p>{selfDesc}</p>
                </motion.div>
            </div>
        </motion.div>
    )

}
