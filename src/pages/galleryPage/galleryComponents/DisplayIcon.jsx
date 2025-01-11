import React from 'react'
import { useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import galleryData from './galleryData'


const DisplayIcon = () => {
    const { gallerySection, galleryDisplay } = useSelector((state) => state.gallerySlice)

    return (
        <AnimatePresence mode="wait" initial={true}>
            <motion.img
                className='displayIcon'
                src={galleryData[gallerySection][galleryDisplay]['icon']}
                key={`icon${gallerySection}${galleryDisplay}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.9,
                    ease: 'easeInOut',
                }}
            />
        </AnimatePresence>
    )
}

export default DisplayIcon
