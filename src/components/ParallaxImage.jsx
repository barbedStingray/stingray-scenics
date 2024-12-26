import React, { useRef, useEffect } from 'react'
import { motion, useTransform, useInView, useScroll, useMotionTemplate, useMotionValueEvent } from 'framer-motion';


const ParallaxImage = ({ scrollContainer, parDetails }) => {
    // const exampleY = useTransform(mainContainer, [0.1, 0.4], [-200, 100])
    const { photoType, picture, dimensions, motionValues, coordinateOffset  } = parDetails
    const {xPosition, yPosition} = coordinateOffset
    const xOffset = useTransform(scrollContainer, motionValues, xPosition)
    const yOffset = useTransform(scrollContainer, motionValues, yPosition)
    const opacity = useTransform(scrollContainer, [motionValues[0], motionValues[0] + 0.05, motionValues[1] - 0.05, motionValues[1]], [0, 1, 1, 0])


    return (
        <motion.img
            className={photoType}
            src={picture}
            style={{
                x: xOffset,
                y: yOffset,
                height: dimensions[0], width: dimensions[1],
                opacity,
            }}
        />
    )
}

export default ParallaxImage
