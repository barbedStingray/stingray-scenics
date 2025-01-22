import React, { useRef } from 'react'
import './commissionPage.css'
import { motion, useScroll, useAnimation, useMotionTemplate, useTransform, useMotionValueEvent, useInView } from 'framer-motion'

const CommissionPage = () => {

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
                <p>Scroll to See More</p>
            </div>

            <ComModels />

            <div className='comSection'>
                <h1>Commission</h1>
                <p>{openingLine}</p>
                <p>Scroll to See More</p>
            </div>

        </motion.div>
    )
}

export default CommissionPage


const ComModels = ({ title, text }) => {
    const ref = useRef(null)

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
                <motion.h1 variants={fadeIn}>Acquiring Your Models</motion.h1>
                <motion.div className='acquireMethod' variants={fadeIn}>
                    <h3>Custom Miniature Service</h3>
                    <p>This method is the full package. I will purchase, </p>
                </motion.div>
                <motion.p variants={fadeIn}>Welcome To STINGRAY SCENICS</motion.p>
                <motion.p variants={fadeIn}>Scroll to See More</motion.p>
            </div>
        </motion.div>
    )

}
