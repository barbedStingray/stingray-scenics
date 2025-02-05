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

    const dispatch = useDispatch()

    const { colorShade } = useSelector((state) => state.gallerySlice)
    console.log('color shade', colorShade)
    const galleryView = useSelector((state) => state.galleryView)
    const miniShowcase = useSelector((state) => state.miniShowcase)


    // slideshow
    const slideShowImages = [imperials, rivendellCharge, trolls]
    const [slideIndex, setSlideIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % slideShowImages.length)
        }, 10000) // 10s

        return () => clearInterval(interval)
    }, [])

    const resumeSlideShow = () => {
        dispatch({
            type: 'SET_DISPLAY',
            payload: false,
        })
    }

    // todo this needs to be adjusted in your reducer and group display for consistency
    const characters = [
        { model: 'Boromir', picture: b1BattleDroid },
        { model: 'Aragorn', picture: b1BattleDroid },
        { model: 'Legolas', picture: b1BattleDroid },
        { model: 'Gandalf', picture: b1BattleDroid },
        { model: 'Merry', picture: b1BattleDroid },
        { model: 'Sam', picture: b1BattleDroid },
        { model: 'Pippen', picture: b1BattleDroid },
        { model: 'Frodo', picture: b1BattleDroid },
        { model: 'Gimli', picture: b1BattleDroid },
        { model: 'Kanan', picture: b1BattleDroid },
        { model: 'Hera', picture: b1BattleDroid },
        { model: 'Sabine', picture: b1BattleDroid },
        { model: 'Chopper', picture: b1BattleDroid },
        { model: 'Ezra', picture: b1BattleDroid },
        { model: 'Zeb', picture: b1BattleDroid }
    ]
    




    return (
        <div
            className="galleryPage galleryBackground"
            style={{ '--shade-gallery': colorShade }}
            transition={{
                duration: 2.5
            }}
        >

            <AnimatePresence mode='wait'>
                <motion.div
                    className='largeScreenGallery'
                    key={`display-${galleryView}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.6 }}
                >
                    {galleryView ?
                        <div className='scrollingArtBox'>
                            {characters.map((character, i) => (
                                <div key={i} className='largeArtBox'>
                                    <p className='largeArtTitle'>{character.model}</p>
                                    <img className='largeArtImage' src={character.picture} />
                                </div>
                            ))}
                            <button className='resumeSlideShow' onClick={resumeSlideShow}>Resume Slideshow</button>
                        </div>
                        :
                        <AnimatePresence mode='wait'>
                            <motion.img
                                className='slideShowImage'
                                src={slideShowImages[slideIndex]}
                                key={slideIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.6 }}
                            />
                        </AnimatePresence>

                    }
                </motion.div>
            </AnimatePresence>

            <GalleryInformation />

        </div >
    )
}

export default GalleryPage;
