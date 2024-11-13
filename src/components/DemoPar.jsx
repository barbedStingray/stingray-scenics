import React from 'react'
import { motion, useTransform, useScroll, useMotionTemplate, useMotionValueEvent } from 'framer-motion';
import imperials from '../images/imperials.jpeg'


const DemoPar = ({ scrollYProgress }) => {

    const yTwo = useTransform(scrollYProgress, [0, 0.3], [-50, 200])


    return (
        <motion.img
            className='demoLaxImage'
            src={imperials}
            style={{ y: yTwo }}
        />
    )
}

export default DemoPar
