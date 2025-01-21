import React, { useRef } from 'react'
import './commissionPage.css'
import { motion, useScroll, useMotionTemplate, useTransform, useMotionValueEvent, useInView } from 'framer-motion'

const CommissionPage = () => {

    const colorShade = '#140000ee'

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
    const comSectionOne = useTransform(commissionContainer, [0, 0.18, 0.38, 0], [0, 1, 1, 0])




    // * use for portfolio - double gradient shift
    const doubleGradientColor = useTransform(commissionContainer, [0, 1], [
        `linear-gradient(45deg,#001e00,#121e00)`,
        `linear-gradient(120deg,#1e0000,#0a001e)`,
    ])
    const gradientStyle = useMotionTemplate`${doubleGradientColor}`




    return (
        <motion.div
            className='commissionPage'
            ref={commissionRef}
            style={{ background: gradientStyle }}
        >
            <div className='scrollCommission'>
                <motion.div className='ringBox' style={{ rotate: ringRotate }}></motion.div>
            </div>
            <div className='comSection'><h1>Commission</h1><p>Scroll to Learn More</p></div>
            <div className='comSection'><h1>Models</h1><p>Get Models</p></div>
            <div className='comSection'><h1>Process</h1><p>What I do</p></div>
            <div className='comSection'><h1>Shipping</h1><p>Shipped for free</p></div>

        </motion.div>
    )
}

export default CommissionPage
