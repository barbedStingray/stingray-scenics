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

    const lotrX = useTransform(galleryContainer, [0, 0.15], ['100%', '0%'])
    const lotrScale = useTransform(galleryContainer, [0.25, 0.5], [1, 0.9])
    const lotrRotate = useTransform(galleryContainer, [0.25, 0.5], ['0deg', '3deg'])


    const scrollSpring = useSpring(0, { stiffness: 150, damping: 20 });

    const scrollToPosition = (progress) => {
        if (galleryContainerRef.current) {
            const container = galleryContainerRef.current;
            const maxScroll = container.scrollHeight - container.clientHeight;
            const targetScroll = progress * maxScroll; // Convert progress (0-1) to pixel value
    
            // Reset the spring to the current scroll position before animating
            scrollSpring.set(container.scrollTop);
            // Smoothly update the spring to the target scroll position
            requestAnimationFrame(() => {
                scrollSpring.set(targetScroll);
            });
        }
    };
        
    // Smoothly update the container's scroll position as the spring value changes
    useEffect(() => {
        scrollSpring.on('change', (value) => {
            if (galleryContainerRef.current) {
                galleryContainerRef.current.scrollTo({
                    top: value,
                    behavior: 'smooth', // Optional for native behavior but overridden by spring
                });
            }
        });
    }, [scrollSpring]);

    


    return (
        <div className='galleryPage' ref={galleryContainerRef}>

            <div className='galleryScrollDiv'>
                <button onClick={() => scrollToPosition(0.75)}>Jump to Lotr</button>

                <div className='galleryDisplay'>
                    <div className='groupDisplay'>Welcome to Gallery</div>
                    <motion.div className='groupDisplay' style={{ x: lotrX, scale: lotrScale, rotate: lotrRotate }}>Lord of the Rings Display</motion.div>
                    <div className='groupDisplay'>Star Wars Display</div>
                    <div className='groupDisplay'>Terrain Display</div>
                    <div className='groupDisplay'>?? Display</div>
                </div>

            </div>

            <div className='emptyElement'></div>

        </div>
    )
}

export default GalleryPage
