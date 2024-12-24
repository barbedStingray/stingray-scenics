import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './galleryPage.css'

import theStingray from '../../images/DGreenIcon.png'
import theEmpire from '../../images/empireLogo.png'
import theOneRing from '../../images/oneRing.png'


const GalleryPage = () => {

    const [gallerySection, setGallerySection] = useState('welcome')
    const [galleryIcon, setGalleryIcon] = useState(0)
    const [direction, setDirection] = useState(0)

    console.log('gallerySection', gallerySection)
    console.log('galleryIcon', galleryIcon)


    const motionVariants = {
        enter: (direction) => ({
            rotateY: direction > 0 ? 90 : -90,
            rotateX: 3,
            // opacity: 0,
            transformOrigin: "50% 50%",
        }),
        center: {
            // opacity: 1,
            rotateY: 0,
            transformOrigin: "50% 50%"
        },
        exit: (direction) => ({
            rotateY: direction > 0 ? -90 : 90,
            rotateX: 3,
            // opacity: 0,
            transformOrigin: "50% 50%",
        })
    }

    const iconMap = {
        welcome: [theStingray],
        lordOfTheRings: [theOneRing, theEmpire, 'gondor', 'rohan', 'isengard'],
        starWars: [theEmpire, theOneRing, 'CIS', 'the Republic'],
        terrain: [theStingray]
    }


    const handleSectionChange = (increment) => {
        const sectionOrder = ['welcome', 'lordOfTheRings', 'starWars', 'terrain']
        const currentIndex = sectionOrder.indexOf(gallerySection)
        const newIndex = currentIndex + increment

        if (newIndex < 0 || newIndex >= sectionOrder.length) return

        setDirection(increment) // Update the direction
        setGallerySection(sectionOrder[newIndex])
        setGalleryIcon(0)
    }


    const handleIconChange = (newIconIndex) => {
        setGalleryIcon(newIconIndex)
    }

    const sectionContent = {
        welcome: (
            <div className='galleryWelcome'>
                <p>Welcome to the Gallery</p>
            </div>
        ),
        lordOfTheRings: (
            <div className='lotrDisplay'>
                <p>Lord of the Rings</p>
            </div>
        ),
        starWars: (
            <div className='starWarsDisplay'>
                <p>Star Wars</p>
            </div>
        ),
        terrain: (
            <div className='terrainDisplay'>
                <p>Terrain</p>
            </div>
        ),
    }



    return (
        <div className="galleryPage">

            <AnimatePresence custom={direction} mode="wait" initial={true}>
                <motion.img
                    className='sectionIcon'
                    src={iconMap[gallerySection][galleryIcon]}
                    key={`icon${gallerySection}${galleryIcon}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.85,
                        ease: 'easeInOut',
                    }}
                />
            </AnimatePresence>

            <AnimatePresence custom={direction} mode="wait" initial={false}>
                <motion.div
                    className="gallerySection"
                    key={gallerySection} // Ensure re-render on section change
                    custom={direction} // Pass direction to variants
                    initial="enter"
                    animate="center"
                    exit="exit"
                    variants={motionVariants}
                    transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 15,
                        duration: 0.55,
                        ease: 'anticipate',
                    }}
                >
                    {sectionContent[gallerySection]}
                </motion.div>
            </AnimatePresence>

            <div>
                <button onClick={() => handleSectionChange(-1)}>Left</button>
                <button onClick={() => handleSectionChange(1)}>Right</button>
            </div>

        </div>
    )
}

export default GalleryPage;
