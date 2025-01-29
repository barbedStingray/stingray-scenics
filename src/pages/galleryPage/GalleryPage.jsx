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
    const galleryView = useSelector((state) => state.galleryView)
    const miniShowcase = useSelector((state) => state.miniShowcase)


    // slideshow
    const slideShowImages = [imperials, rivendellCharge, trolls]
    const [slideIndex, setSlideIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % slideShowImages.length)
        }, 4000)

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

            <div className='bigImageSlider'
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
                    <img className='slideShowImage' src={slideShowImages[slideIndex]} />

                }
            </div>

            <GalleryInformation />

        </div >
    )
}

export default GalleryPage;
