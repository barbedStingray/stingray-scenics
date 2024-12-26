import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './galleryPage.css'

import theStingray from '../../images/DGreenIcon.png'
import theEmpire from '../../images/empireLogo.png'
import theOneRing from '../../images/oneRing.png'
import theCIS from '../../images/CIS.png'
import jediOrder from '../../images/JediOrder.png'


const GalleryPage = () => {

    const [gallerySection, setGallerySection] = useState('welcome')
    const [galleryIcon, setGalleryIcon] = useState('mainDisplay')
    const [direction, setDirection] = useState(0)

    console.log('gallerySection', gallerySection)
    console.log('galleryIcon', galleryIcon)


    const gallerySectionVariants = {
        enter: (direction) => ({
            rotateY: direction > 0 ? 90 : -90,
            rotateX: 3,
            transformOrigin: "50% 50%",
        }),
        center: {
            rotateY: 0,
            transformOrigin: "50% 50%"
        },
        exit: (direction) => ({
            rotateY: direction > 0 ? -90 : 90,
            rotateX: 3,
            transformOrigin: "50% 50%",
        })
    }

    const iconMap = {
        welcome: {
            mainDisplay: theStingray,
        },
        lordOfTheRings: {
            mainDisplay: theOneRing,
            gondor: 'gondor',
            rohan: 'rohan',
            mordor: 'mordor',
            angmar: 'angmar',
            moria: 'moria',
        },
        starWars: {
            mainDisplay: theEmpire,
            empire: theEmpire,
            rebelAlliance: 'rebels',
            jediOrder: jediOrder,
        },
        terrain: {
            mainDisplay: theStingray,
            scenicSquare: 'scenic square',
            modular: 'modular',
        },
    }

    const gallerySections = Object.keys(iconMap)
    const lotrDisplays = Object.keys(iconMap.lordOfTheRings)
    const starWarsDisplays = Object.keys(iconMap.starWars)

    const handleSectionChange = (gallerySections, increment) => {
        const currentIndex = gallerySections.indexOf(gallerySection)
        const newIndex = currentIndex + increment
        if (newIndex < 0 || newIndex >= gallerySections.length) return
        setDirection(increment) // Update the direction
        setGallerySection(gallerySections[newIndex])
        setGalleryIcon('mainDisplay')
    }

    const handleDisplayChange = (displaySections, increment) => {
        const currentIndex = displaySections.indexOf(galleryIcon)
        const newIndex = currentIndex + increment
        if (newIndex < 0 || newIndex >= displaySections.length) return
        setDirection(increment)
        setGalleryIcon(displaySections[newIndex])
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
                <div>
                    <button onClick={() => handleDisplayChange(lotrDisplays, -1)}>Backward</button>
                    <button onClick={() => handleDisplayChange(lotrDisplays, 1)}>Forward</button>
                </div>
            </div>
        ),
        starWars: (
            <div className='starWarsDisplay'>
                <p>Star Wars</p>
                <div>
                    <button onClick={() => handleDisplayChange(starWarsDisplays, -1)}>Backward</button>
                    <button onClick={() => handleDisplayChange(starWarsDisplays, 1)}>Forward</button>
                </div>

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
                    key={`gallerySection${gallerySection}`}
                    // key={gallerySection} // Ensure re-render on section change
                    custom={direction} // Pass direction to variants
                    initial="enter"
                    animate="center"
                    exit="exit"
                    variants={gallerySectionVariants}
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
                <button onClick={() => handleSectionChange(gallerySections, -1)}>Left</button>
                <button onClick={() => handleSectionChange(gallerySections, 1)}>Right</button>
            </div>

        </div>
    )
}

export default GalleryPage;
