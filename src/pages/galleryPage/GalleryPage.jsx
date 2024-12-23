import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './galleryPage.css';

const GalleryPage = () => {
    const [gallerySection, setGallerySection] = useState(0);
    const [direction, setDirection] = useState(0);


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

    const incrementDisplay = (increment) => {
        const newGallerySection = gallerySection + increment;
        if (newGallerySection < 0 || newGallerySection > 3) return;
        setDirection(increment); // Update the direction
        setGallerySection(newGallerySection);
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
                </div>
            case 2:
                return <div className='starWarsDisplay'>
                    <p>Star Wars</p>
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

            <button onClick={() => incrementDisplay(-1)}>Left</button>
            <button onClick={() => incrementDisplay(1)}>Right</button>
        </div>
    );
};

export default GalleryPage;
