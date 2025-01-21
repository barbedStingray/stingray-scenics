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
                        {characters.map((character, i) => (
                            <div key={i} className='largeArtBox'>
                                <p className='largeArtTitle'>{character.title}</p>
                                <img className='largeArtImage' src={character.img} />
                            </div>
                        ))}
                    </>
                    :
                    <img src={slideShowImages[slideIndex]} />

                }
            </div>

            <GalleryInformation />

        </div >
    )
}

export default GalleryPage;
