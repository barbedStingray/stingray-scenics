import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useTransform, useMotionTemplate } from 'framer-motion'
import './galleryPage.css'

import theStingray from '../../images/DGreenIcon.png'
import theEmpire from '../../images/empireLogo.png'
import theOneRing from '../../images/oneRing.png'
import theCIS from '../../images/CIS.png'
import jediOrder from '../../images/JediOrder.png'
import b2Droid from '../../images/starWars/superBattleDroidBlue.png'
import texture from '../../images/texture.png'

const GalleryPage = () => {

    const [gallerySection, setGallerySection] = useState('welcome')
    const [galleryDisplay, setGalleryDisplay] = useState('mainDisplay')
    const [direction, setDirection] = useState(0)

    console.log('gallerySection', gallerySection)
    console.log('galleryDisplay', galleryDisplay)


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
                content: {
                    title: 'Welcome',
                    description: 'Welcome to the gallery!',
                    photo: null,
                },
            },
        },
        lordOfTheRings: {
            mainDisplay: {
                icon: theOneRing,
                content: {
                    title: 'Lord of the Rings',
                    description: 'Explore the world of Middle Earth!',
                    photo: null,
                },
            },
            gondor: {
                icon: 'gondor',
                content: {
                    title: 'Gondor',
                    description: 'The White City',
                    photo: null,
                },
            },
            rohan: {
                icon: 'rohan',
                content: {
                    title: 'Rohan',
                    description: 'Land of the horse lords.',
                    photo: null,
                },
            },
        },
        starWars: {
            mainDisplay: {
                icon: theCIS,
                content: {
                    title: 'Star Wars',
                    description: 'A galaxy far, far away awaits.',
                    photo: null,
                },
            },
            empire: {
                icon: theEmpire,
                content: {
                    title: 'Empire',
                    description: 'The Galactic Empire ruled by the Sith.',
                    photo: null,
                },
            },
            jediOrder: {
                icon: jediOrder,
                content: {
                    title: 'Jedi Order',
                    description: 'Guardians of peace and justice in the galaxy.',
                    photo: null,
                },
            },
        },
        terrain: {
            mainDisplay: {
                icon: theStingray,
                content: {
                    title: 'Terrain',
                    description: 'Various terrains to explore and admire.',
                    photo: null,
                },
            },
        },
    }

    const currentData = galleryData[gallerySection][galleryDisplay]['content']


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

                    <div className='displayOne'>
                        {/* <img src={texture} /> */}
                    </div>
                    <div className='displayTwo'>
                        <h2>{currentData.title}</h2>
                        <img src={currentData.photo} alt={currentData.title} className="contentPhoto" />
                        <p>{currentData.description}</p>
                        <div>
                            <button onClick={() => handleNavigation('display', -1)}>Backward</button>
                            <button onClick={() => handleNavigation('display', 1)}>Forward</button>
                        </div>
                    </div>


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
