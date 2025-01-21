import React, { useRef } from 'react'
import './commissionPage.css'
import { motion, useScroll, useMotionTemplate, useTransform, useMotionValueEvent, useInView } from 'framer-motion'

const CommissionPage = () => {

    const colorShade = '#140000ee'

    const comissionRef = useRef()
    const { scrollYProgress: comissionContainer } = useScroll({
        container: comissionRef,
        offset: ['start start', 'end end']
    })
    // console logging
    useMotionValueEvent(comissionContainer, 'change', (latest) =>
        console.log('mainY', latest)
    )


    // * use for portfolio - double gradient shift
    const doubleGradientColor = useTransform(comissionContainer, [0, 1], [
        `linear-gradient(90deg,#00fbff,#008225)`,
        `linear-gradient(190deg,#008225,#0d00ff)`,
    ])
    const gradientStyle = useMotionTemplate`${doubleGradientColor}`




    return (
        <motion.div
            className='commissionPage'
            ref={comissionRef}
            // style={{ background: gradientStyle }}
        >
            <div className='scrollCommission'>
                <div className='ringBox'></div>
            </div>

            <div className='comSection'></div>
        </motion.div>
    )
}

export default CommissionPage
