import React, { useRef, useEffect } from 'react'
import { motion, useTransform, useInView, useScroll, useMotionTemplate, useMotionValueEvent } from 'framer-motion';
import imperials from '../images/imperials.jpeg'


const DemoPar = ({ parDetails }) => {
    // const exampleY = useTransform(mainContainer, [0.1, 0.4], [-200, 100])

    console.log('parDetails', parDetails)
    const { container, picture, motionValues, yOffset, dimensions } = parDetails
    const yPosition = useTransform(container, motionValues, yOffset)
    const opacity = useTransform(container, [motionValues[0], motionValues[0] + 0.05, motionValues[1] - 0.05, motionValues[1]], [0, 1, 1, 0])




    const targetRef = useRef()
    // Use useInView to check if targetRef is in the viewport
    const isInView = useInView({
        target: targetRef,
        triggerOnce: false, // Set to true to trigger only once
        offset: ['start end', 'end start'],
        // amount: 0.5, // Trigger when 50% of the element is in view
    });

    useEffect(() => {
        console.log('Is the element in view?', isInView);
    }, [isInView]);  // Re-run whenever isInView changes




    return (
        <motion.img
            ref={targetRef}
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
