import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion'
import './galleryPage.css'

import GalleryInformation from './galleryComponents/GalleryInformation'
import imperials from '../../images/imperials.jpeg'


const GalleryPage = () => {

    const { colorShade } = useSelector((state) => state.gallerySlice)

    return (
        <div
            className="galleryPage galleryBackground"
            style={{ '--color-shadeOne': colorShade[0] }}
            transition={{
                duration: 2.5
            }}
        >

            <div className='bigImageSlider'>
                <img className='bigImage' src={imperials} />
            </div>

            <GalleryInformation />

        </div >
    )
}

export default GalleryPage;
