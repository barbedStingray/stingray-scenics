import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const SectionTitle = ({ homeTitle }) => {


    const titleRef = useRef()
    const titleInView = useInView(
        titleRef,
        {
            // amount: 1,
            margin: '-100px',
            once: true,
        }
    )
    console.log(`${homeTitle} in view`, titleInView)



    const defaultAnimation = {
        hidden: {
            opacity: 0,
            y: 20,
            // color: '#00fff0'
        },
        visible: {
            opacity: 1,
            y: 0,
            // color: '#000',
        },
    }


    const direction = homeTitle === 'Scenics' ? -1 : 1

    return (
            <motion.h1
                className='sectionTitle'
                ref={titleRef}
                initial='hidden'
                // animate='visible'
                animate={titleInView ? 'visible' : 'hidden'}
                transition={{ staggerChildren: 0.2, staggerDirection: direction, }}
            >
                {homeTitle.split('').map((char, i) => (
                    <motion.span
                        className='titleCharacter'
                        key={i}
                        variants={defaultAnimation}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.h1>
    )
}

export default SectionTitle
