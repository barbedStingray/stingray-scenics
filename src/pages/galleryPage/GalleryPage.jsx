import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './galleryPage.css'

import theStingray from '../../images/DGreenIcon.png'
import theEmpire from '../../images/empireLogo.png'
import theOneRing from '../../images/oneRing.png'


const GalleryPage = () => {

    const [gallerySection, setGallerySection] = useState(0)
    const [galleryIcon, setGalleryIcon] = useState(0)
    const [direction, setDirection] = useState(0)


    const motionVariants = {
        enter: (direction) => ({
            rotateY: direction > 0 ? 90 : -90,
            rotateX: 3,
            // opacity: 0,
            transformOrigin: "50% 50%",
        }),
        center: {
            opacity: 1,
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

    const imageMap = {
        0: {
            0: theStingray
        },
        1: {
            0: theOneRing,
            1: theEmpire,
            2: 'gondor',
            3: 'rohan',
            4: 'isengard',
        },
        2: {
            0: theEmpire,
            1: theOneRing,
            2: 'CIS',
            3: 'The Republic',
        },
        3: {
            0: theStingray
        }
    }

    const incrementDisplay = (increment) => {
        const newGallerySection = gallerySection + increment
        if (newGallerySection < 0 || newGallerySection > 3) return
        setDirection(increment) // Update the direction
        setGallerySection(newGallerySection)
        setGalleryIcon(0)
    };

    const decideDisplaySection = (gallerySection) => {
        switch (gallerySection) {
            case 0:
                return <div className='galleryWelcome'>
                    <p>Welcome to the Gallery</p>
                </div>
            case 1:
                return <div className='lotrDisplay'>
                    <p>Lord of the Rings</p>
                    <button onClick={() => setGalleryIcon(1)}>NEW ICON</button>
                </div>
            case 2:
                return <div className='starWarsDisplay'>
                    <p>Star Wars</p>
                    <button onClick={() => setGalleryIcon(1)}>NEW ICON</button>
                </div>
            case 3:
                return <div className='terrainDisplay'>
                    <p>Terrain</p>
                </div>
            default:
                return 'Default Section';
        }
    };

    return (
        <div className="galleryPage">

            <AnimatePresence custom={direction} mode="wait" initial={true}>
                <motion.img
                    className='sectionIcon'
                    src={imageMap[gallerySection][galleryIcon]}
                    key={`icon${gallerySection}${galleryIcon}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 1,
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
                        duration: 0.75,
                        ease: 'anticipate',
                    }}
                >
                    {decideDisplaySection(gallerySection)}
                </motion.div>
            </AnimatePresence>

            <div>
                <button onClick={() => incrementDisplay(-1)}>Left</button>
                <button onClick={() => incrementDisplay(1)}>Right</button>
            </div>

        </div>
    );
};

export default GalleryPage;
