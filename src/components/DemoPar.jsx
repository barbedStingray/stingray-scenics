import React, { useRef, useEffect } from 'react'
import { motion, useTransform, useInView, useScroll, useMotionTemplate, useMotionValueEvent } from 'framer-motion';
import imperials from '../images/imperials.jpeg'


const DemoPar = ({ scrollContainer, parDetails }) => {
    // const exampleY = useTransform(mainContainer, [0.1, 0.4], [-200, 100])
    const { picture, motionValues, yOffset, dimensions } = parDetails
    const yPosition = useTransform(scrollContainer, motionValues, yOffset)
    const opacity = useTransform(scrollContainer, [motionValues[0], motionValues[0] + 0.05, motionValues[1] - 0.05, motionValues[1]], [0, 1, 1, 0])



    return (
        <motion.img
            className='demoLaxImage'
            src={picture}
            style={{
                y: yPosition,
                height: dimensions[0], width: dimensions[1],
                opacity,
            }}
        />
    )
}

export default DemoPar
