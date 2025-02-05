import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion'
import './galleryPage.css'


import GalleryInformation from './galleryComponents/GalleryInformation'
import imperials from '../../images/imperials.jpeg'
import rivendellCharge from '../../images/rivendellCharge.jpeg'
import trolls from '../../images/trolls.jpeg'



const GalleryPage = () => {

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



    return (
        <div
            className="galleryPage galleryBackground"
            style={{ '--shade-gallery': colorShade }}
            transition={{
                duration: 2.5
            }}
        >

            <div className='largeScreenGallery'
                style={{}}
            >
                {galleryView ?
                    <>
                        {miniShowcase.map((character, i) => (
                            <div key={i} className='largeArtBox'>
                                <p className='largeArtTitle'>{character.model}</p>
                                <img className='largeArtImage' src={character.picture} />
                            </div>
                        ))}
                    </>
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
            </div>

            <GalleryInformation />

        </div >
    )
}

export default GalleryPage;
