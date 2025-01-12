import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion'
import './galleryPage.css'
import { sectionVariants } from './galleryComponents/animations'

import MenuSection from './galleryComponents/MenuSection'
import GalleryInformation from './galleryComponents/GalleryInformation'
import DisplayContent from './galleryComponents/DisplayContent'
import galleryData from './galleryComponents/galleryData'
import DisplayIcon from './galleryComponents/DisplayIcon'
import ArrowButton from '../../components/arrowButton/ArrowButton'


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

            <DisplayIcon />

            <div className='galleryInfoExpansion'>
                <div className='bigImageSlider'></div>
                <GalleryInformation />
            </div>

        </div >
    )
}

export default GalleryPage;
