import React, { useState, useEffect, useRef } from 'react'
import './progressiveImage.css'

const ProgressiveImage = ({ picture }) => {
    const isCloudinary = typeof picture === 'string'
    const highResImg = isCloudinary ? picture : picture.highSrc
    const lowResImg = isCloudinary ? highResImg.replace('/upload/', '/upload/w_50,q_10/') : picture.lowSrc

    const [imgSrc, setImgSrc] = useState(lowResImg || highResImg)
    const [isLoaded, setIsLoaded] = useState(false)
    const imgRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const img = new Image()
                    img.src = highResImg
                    img.onload = () => {
                        setIsLoaded(true)
                        setImgSrc(highResImg)
                    }
                    observer.disconnect()
                }
            },
            { threshold: 0.7 } // Start loading earlier
        )

        if (imgRef.current) observer.observe(imgRef.current)

        return () => observer.disconnect()
    }, [highResImg])

    // * css is now handling this transition, if no css, revert to this
    // useEffect(() => {
    //     if (!isVisible) return

    //     const img = new Image()
    //     img.src = highResImg
    //     img.onload = () => {
    //         setImgSrc(highResImg)
    //         setIsLoaded(true)
    //     }
    // }, [highResImg, isVisible])

    return (
        <div className="progressive-wrapper" ref={imgRef}>
            <img src={lowResImg} className={`progressive-img low-res ${isLoaded ? 'fade-out' : ''}`} alt="" />
            <img src={imgSrc} className={`progressive-img high-res ${isLoaded ? 'fade-in' : ''}`} alt="" />
        </div>
        
        // * lazy loading if not using intersection
        //      <img
        //      ref={imgRef}
        //      src={imgSrc}
        //      className={`progressive-Img ${imgClassname}`}
        //      loading='lazy'
        //      alt='' // alt text needed for SEO
        //  />
    )
}

export default ProgressiveImage
