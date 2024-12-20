import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useSpring, useInView, useTransform, useScroll, useMotionTemplate, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom'
import './galleryPage.css'

const GalleryPage = () => {

    const galleryContainerRef = useRef()
    const { scrollYProgress: galleryContainer } = useScroll({
        container: galleryContainerRef,
        offset: ['start start', 'end end']
    })

    useMotionValueEvent(galleryContainer, 'change', (latest) =>
        console.log('mainY', latest)
    )



    return (
        <div className='galleryPage' ref={galleryContainerRef}>
            <div className='galleryScrollDiv'>
                <div className='groupDisplay'>Welcome to Gallery</div>
                <div className='groupDisplay'>Lord of the Rings Display</div>
                <div className='groupDisplay'>Star Wars Display</div>
                <div className='groupDisplay'>Terrain Display</div>
                <div className='groupDisplay'>?? Display</div>
            </div>
        </div>
    )
}

export default GalleryPage
