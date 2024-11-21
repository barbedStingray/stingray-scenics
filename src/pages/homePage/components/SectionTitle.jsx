import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const SectionTitle = ({ homeTitle }) => {


    const titleRef = useRef()
    const titleInView = useInView(
        titleRef,
        {
            // amount: 1, // element based
            // margin: '-100px 0px -100px 0px' ,
            margin: '-20% 0px -50% 0px' ,
            // threshold: 0.5, // element based
            // once: true,
        }
    )
    console.log(`${homeTitle} in view`, titleInView)



    const defaultAnimation = {
        hidden: {
            opacity: 0,
            y: 20,
            color: '#85a600'
        },
        visible: {
            opacity: 1,
            y: 0,
            color: '#fff',
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
                transition={{ staggerChildren: 0.05, staggerDirection: direction, }}
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
