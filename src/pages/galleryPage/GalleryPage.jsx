import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './galleryPage.css'

import theStingray from '../../images/DGreenIcon.png'
import theEmpire from '../../images/empireLogo.png'
import theOneRing from '../../images/oneRing.png'
import theCIS from '../../images/CIS.png'
import jediOrder from '../../images/JediOrder.png'


const GalleryPage = () => {

    const sectionIconRef = useRef(null)

    const [gallerySection, setGallerySection] = useState('welcome')
    const [galleryIcon, setGalleryIcon] = useState(0)
    const [direction, setDirection] = useState(0)

    console.log('gallerySection', gallerySection)
    console.log('galleryIcon', galleryIcon)


    const motionVariants = {
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
        welcome: [theStingray],
        lordOfTheRings: [theOneRing, theEmpire, 'gondor', 'rohan', 'isengard'],
        starWars: [theEmpire, theOneRing, 'CIS', 'the Republic'],
        terrain: [jediOrder]
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

    const calculateActiveSection = () => {
        console.log('scrolling icon')
        if (sectionIconRef.current) {
            const scrollLeft = sectionIconRef.current.scrollLeft;
            const sectionWidth = sectionIconRef.current.offsetWidth;
            const activeIndex = Math.round(scrollLeft / sectionWidth); // Calculate active index
            console.log('active index', activeIndex)
            setGalleryIcon(activeIndex); // Update the gallery icon
        }
    }

    // Add scroll event listener to track snap scrolling
    useEffect(() => {
        const lotrDisplay = sectionIconRef.current;
    
        if (lotrDisplay) {
            const handleScroll = () => calculateActiveSection();
    
            // Attach the scroll listener when section changes
            lotrDisplay.addEventListener('scroll', handleScroll);
    
            // Cleanup listener when component is unmounted or gallerySection changes
            return () => {
                lotrDisplay.removeEventListener('scroll', handleScroll);
            };
        }
    }, [gallerySection]); // Now, this effect runs whenever the gallerySection changes
        
            

    const sectionContent = {
        welcome: (
            <div className='galleryWelcome'>
                <p>Welcome to the Gallery</p>
            </div>
        ),
        lordOfTheRings: (
            <div className='lotrDisplay' ref={sectionIconRef}>
                <div className='displaySection'>
                    <p>Lord of the Rings</p>
                </div>
                <div className='displaySection'>
                    <p>Gondor</p>
                </div>
                <div className='displaySection'>
                    <p>Rivendell</p>
                </div>
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
                    key={`gallerySection${gallerySection}`}
                    // key={gallerySection} // Ensure re-render on section change
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
                    onAnimationComplete={() => {
                        console.log('animation complete')
                        calculateActiveSection()
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
