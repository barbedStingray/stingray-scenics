import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useTransform, useMotionTemplate } from 'framer-motion'
import './galleryPage.css'

import theStingray from '../../images/DGreenIcon.png'
import theEmpire from '../../images/empireLogo.png'
import theOneRing from '../../images/oneRing.png'
import theCIS from '../../images/CIS.png'
import jediOrder from '../../images/JediOrder.png'


const GalleryPage = () => {

    const [gallerySection, setGallerySection] = useState('welcome')
    const [galleryDisplay, setGalleryDisplay] = useState('mainDisplay')
    const [direction, setDirection] = useState(0)

    console.log('gallerySection', gallerySection)
    console.log('galleryIcon', galleryDisplay)


    const gallerySectionVariants = {
        enter: (direction) => ({
            rotateY: direction > 0 ? -90 : 90,
            rotateX: 3,
            transformOrigin: "50% 50%",
        }),
        center: {
            rotateY: 0,
            transformOrigin: "50% 50%"
        },
        exit: (direction) => ({
            rotateY: direction > 0 ? 90 : -90,
            rotateX: 3,
            transformOrigin: "50% 50%",
        })
    }


    const galleryData = {
        welcome: {
            mainDisplay: {
                icon: theStingray,
                content: (
                    <div className='lotrDisplay'>
                        <p>Welcome!</p>
                    </div>
                ),
            },
        },
        lordOfTheRings: {
            mainDisplay: {
                icon: theOneRing,
                content: (
                    <div className='lotrDisplay'>
                        <p>Lord of the Rings</p>
                        <div>
                            <button onClick={() => handleNavigation('display', -1)}>Backward</button>
                            <button onClick={() => handleNavigation('display', 1)}>Forward</button>
                        </div>
                    </div>
                ),
            },
            gondor: {
                icon: 'gondor',
                content: (
                    <div className='lotrDisplay'>
                        <p>Gondor</p>
                        <div>
                            <button onClick={() => handleNavigation('display', -1)}>Backward</button>
                            <button onClick={() => handleNavigation('display', 1)}>Forward</button>
                        </div>
                    </div>
                ),
            },
            rohan: {
                icon: 'rohan',
                content: (
                    <div className='lotrDisplay'>
                        <p>Rohan</p>
                        <div>
                            <button onClick={() => handleNavigation('display', -1)}>Backward</button>
                            <button onClick={() => handleNavigation('display', 1)}>Forward</button>
                        </div>
                    </div>
                ),
            },
        },
        starWars: {
            mainDisplay: {
                icon: theCIS,
                content: (
                    <div className='lotrDisplay'>
                        <p>Star Wars</p>
                        <div>
                            <button onClick={() => handleNavigation('display', -1)}>Backward</button>
                            <button onClick={() => handleNavigation('display', 1)}>Forward</button>
                        </div>
                    </div>
                ),
            },
            empire: {
                icon: theEmpire,
                content: (
                    <div className='lotrDisplay'>
                        <p>Empire</p>
                        <div>
                            <button onClick={() => handleNavigation('display', -1)}>Backward</button>
                            <button onClick={() => handleNavigation('display', 1)}>Forward</button>
                        </div>
                    </div>
                ),
            },
            jediOrder: {
                icon: jediOrder,
                content: (
                    <div className='lotrDisplay'>
                        <p>Jedi Order</p>
                        <div>
                            <button onClick={() => handleNavigation('display', -1)}>Backward</button>
                            <button onClick={() => handleNavigation('display', 1)}>Forward</button>
                        </div>
                    </div>
                ),
            },
        },
        terrain: {
            mainDisplay: {
                icon: theStingray,
                content: (
                    <div className='lotrDisplay'>
                        <p>Terrain</p>
                    </div>
                ),
            },
        }
    }



    const handleNavigation = (type, increment) => {
        const currentList = type === 'section' ? Object.keys(galleryData) : Object.keys(galleryData[gallerySection])
        const currentIndex = currentList.indexOf(type === 'section' ? gallerySection : galleryDisplay)
        const newIndex = currentIndex + increment

        if (newIndex < 0 || newIndex >= currentList.length) return

        setDirection(increment)
        if (type === 'section') {
            setGallerySection(currentList[newIndex])
            setGalleryDisplay('mainDisplay')
        } else {
            setGalleryDisplay(currentList[newIndex])
        }
    }



    return (
        <div className="galleryPage">

            <AnimatePresence custom={direction} mode="wait" initial={true}>
                <motion.img
                    className='sectionIcon'
                    src={galleryData[gallerySection][galleryDisplay]['icon']}
                    key={`icon${gallerySection}${galleryDisplay}`}
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
                    {galleryData[gallerySection][galleryDisplay]['content']}
                </motion.div>
            </AnimatePresence>

            <div>
                <button onClick={() => handleNavigation('section', -1)}>Previous</button>
                <button onClick={() => handleNavigation('section', 1)}>Next</button>
            </div>

        </div>
    )
}

export default GalleryPage;
