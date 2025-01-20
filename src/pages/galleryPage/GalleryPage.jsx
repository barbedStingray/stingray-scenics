import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion'
import './galleryPage.css'


import GalleryInformation from './galleryComponents/GalleryInformation'
import imperials from '../../images/imperials.jpeg'
import rivendellCharge from '../../images/rivendellCharge.jpeg'
import trolls from '../../images/trolls.jpeg'

import b1BattleDroid from '../../images/starWars/b1BattleDroid.png'


const GalleryPage = () => {

    const { colorShade } = useSelector((state) => state.gallerySlice)
    const galleryView = useSelector((state) => state.galleryView)


    // slideshow
    const slideShowImages = [imperials, rivendellCharge, trolls]
    const [slideIndex, setSlideIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % slideShowImages.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [])


    const characters = [
        { title: 'Boromir', img: b1BattleDroid },
        { title: 'Aragorn', img: b1BattleDroid },
        { title: 'Legolas', img: b1BattleDroid },
        { title: 'Gandalf', img: b1BattleDroid },
        { title: 'Merry', img: b1BattleDroid },
        { title: 'Sam', img: b1BattleDroid },
        { title: 'Pippen', img: b1BattleDroid },
        { title: 'Frodo', img: b1BattleDroid },
        { title: 'Gimli', img: b1BattleDroid },
        { title: 'Kanan', img: b1BattleDroid },
        { title: 'Hera', img: b1BattleDroid },
        { title: 'Sabine', img: b1BattleDroid },
        { title: 'Chopper', img: b1BattleDroid },
        { title: 'Ezra', img: b1BattleDroid },
        { title: 'Zeb', img: b1BattleDroid }
    ]

    // const slideShowVariants = {
    //     initial: { opacity: 0, x: 50 },
    //     animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    //     exit: { opacity: 0, x: -50, transition: { duration: 0.8 } },
    // }
    const slideShowVariants = {
        enter: {
            x: '100%', // Start off-screen to the right
            zIndex: 2, // Ensure it's on top of the current image
        },
        center: {
            x: 0, // Move to the center
            zIndex: 1,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
        exit: {
            x: '-100%', // Slide off-screen to the left
            zIndex: 1, // Keep the outgoing image under the incoming one
            transition: { duration: 0.8, ease: 'easeIn' },
        },
    }

    const incomingVariants = {
        initial: { x: '100%' }, // Start off-screen to the right
        animate: {
            x: 0, // Slide into view
            zIndex: 2, // Place on top
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    const outgoingVariants = {
        initial: { x: 0 }, // Start in place
        exit: {
            x: '-100%', // Slide out to the left
            transition: { duration: 0.8, ease: 'easeIn', delay: 0.8 }, // Delays until incoming finishes
        },
    };

    return (
        <div
            className="galleryPage galleryBackground"
            style={{ '--shade-gallery': colorShade }}
            transition={{
                duration: 2.5
            }}
        >

            <div className='bigImageSlider'
                style={{ position: 'relative', overflow: galleryView ? 'auto' : 'hidden' }}
            >
                {galleryView ?
                    // <p>BIG OL GALLERY DISPLAY</p>
                    <>
                        {characters.map((character, i) => (
                            <div key={i} className='largeArtBox'>
                                <p className='largeArtTitle'>{character.title}</p>
                                <img className='largeArtImage' src={character.img} />
                            </div>
                        ))}
                    </>
                    :
                    <AnimatePresence
                        initial={false}
                        mode="wait"
                    // mode="poplayout"
                    >
                        {/* Incoming Image */}
                        <motion.div
                            key={`incoming-${slideIndex}`}
                            className="bigImageWrapper"
                            variants={incomingVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit" // Return to the starting position for reuse
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                backgroundImage: `url(${slideShowImages[slideIndex]})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        {/* Outgoing Image */}
                        {slideIndex > 0 && (
                            <motion.div
                                key={`outgoing-${slideIndex - 1}`}
                                className="bigImageWrapper"
                                variants={outgoingVariants}
                                initial="initial"
                                animate="initial" // Stay in place until it starts exiting
                                exit="exit"
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    backgroundImage: `url(${slideShowImages[(slideIndex - 1) % slideShowImages.length]})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            />
                        )}
                    </AnimatePresence>}
            </div>

            <GalleryInformation />

        </div >
    )
}

export default GalleryPage;
