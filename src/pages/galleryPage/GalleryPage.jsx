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

    const hiddenButtons = ['welcome', 'terrain']
    const displayButtonClass = hiddenButtons.includes(gallerySection) ? 'noDisplay' : 'displayButtons'

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

    const displaySlideVariants = {
        enter: {
            opacity: 0,
            y: 30,
        },
        center: {
            opacity: 1,
            y: 0,
        },
        exit: {
            opacity: 0,
            y: 30,
        }
    }


    const galleryData = {
        welcome: {
            mainDisplay: {
                icon: theStingray,
                content: {
                    title: 'The Gallery',
                    description: 'Welcome! On display you will find figures from Lord of the Rings and Star Wars as well as custom made terrain. Use the arrows to browse the different sections and factions.',
                    photo: null,
                },
            },
        },
        lordOfTheRings: {
            mainDisplay: {
                icon: theOneRing,
                content: {
                    title: 'Lord of the Rings',
                    description: 'Travel the world of Middle Earth with miniatures from Mordor, Gondor, Moria, Lothlorien, Rohan, Isengard, The Shire, Easterlings, Harad...',
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
                    description: 'Roam the galaxy and encounter heroes and villains from the Galactic Republic, the Empire, Rebel Alliance, Separatist Battle Droids, Jedi Order, Deathwatch, Crime Syndicates...',
                    photo: null,
                },
            },
            empire: {
                icon: theEmpire,
                content: {
                    title: 'Empire',
                    description: 'The Galactic Empire ruled by the Sith. Featuring figures such as Darth Vader, Emperor Palpatine, and legions of Storm Troopers.',
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
                        duration: 0.9,
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


                    <div className='displayContent'>
                        <div className={displayButtonClass}>
                            <button onClick={() => handleNavigation('display', -1)}>Backward</button>
                            <button onClick={() => handleNavigation('display', 1)}>Forward</button>
                        </div>

                        <img className='displayImage' src={b2Droid} />

                        <AnimatePresence mode='wait'>
                            <motion.p
                                className='displayTitle'
                                key={`title-${gallerySection}${galleryDisplay}`}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                variants={displaySlideVariants}
                                transition={{
                                    type: 'spring',
                                    stiffness: 180,
                                    damping: 15,
                                    duration: 0.40,
                                    // delay: 0.15,
                                    // ease: 'anticipate',
                                }}

                            >
                                {currentData.title}
                            </motion.p>
                        </AnimatePresence>

                        <div className='displayLine'></div>
                        <p className='displayDescription'>{currentData.description}</p>
                        <button className='coolView'>View Miniatures</button>
                    </div>


                </motion.div>
            </AnimatePresence>

            <div className='sectionButtons'>
                <button onClick={() => handleNavigation('section', -1)}>Previous</button>
                <button onClick={() => handleNavigation('section', 1)}>Next</button>
            </div>

        </div >
    )
}

export default GalleryPage;
