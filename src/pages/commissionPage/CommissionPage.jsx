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
    const comSectionZero = useTransform(commissionContainer, [0, 0.17, 0.23], [1, 1, 0])
    const comSectionOne = useTransform(commissionContainer, [0, 0.17, 0.23, 0.37, 0.43, 1], [0, 0, 1, 1, 0, 0])
    const comSectionTwo = useTransform(commissionContainer, [0, 0.37, 0.43, 0.57, 0.63, 1], [0, 0, 1, 1, 0, 0])
    const comSectionThree = useTransform(commissionContainer, [0, 0.57, 0.63, 0.77, 0.83, 1], [0, 0, 1, 1, 0, 0])




    // * use for portfolio - double gradient shift
    const doubleGradientColor = useTransform(commissionContainer, [0, 1], [
        `linear-gradient(45deg,#001e00,#121e00)`,
        `linear-gradient(120deg,#1e0000,#0a001e)`,
    ])
    const gradientStyle = useMotionTemplate`${doubleGradientColor}`

    const comSections = [
        {
            title: 'Commission',
            text: 'Scroll to learn more',
            theOpacity: comSectionZero,
        },
        {
            title: 'Models',
            text: 'Scroll to learn more',
            theOpacity: comSectionOne,
        },
        {
            title: 'Process',
            text: 'Scroll to learn more',
            theOpacity: comSectionTwo,
        },
        {
            title: 'Shipping',
            text: 'Scroll to learn more',
            theOpacity: comSectionThree,
        },
    ]

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { margin: '-50% 0px', amount: 0.5 });


    return (
        <motion.div
            className='commissionPage'
            ref={commissionRef}
            style={{ background: gradientStyle }}
        >
            <div className='scrollCommission'>
                <motion.div className='ringBox' style={{ rotate: ringRotate }}></motion.div>

                {/* {comSections.map((comSec, i) => (
                    // <motion.div className='comSection' style={{ opacity: comSec.theOpacity }}>
                    <motion.div className='comSection'>
                        <h1>{comSec.title}</h1>
                        <p>{comSec.text}</p>
                    </motion.div>
                ))} */}

            </div>


        </motion.div>
    )
}

export default CommissionPage
