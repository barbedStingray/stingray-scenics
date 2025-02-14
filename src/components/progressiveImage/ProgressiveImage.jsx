import React, { useState, useEffect, useRef } from 'react'
import './progressiveImage.css'

const ProgressiveImage = ({ lowSrc, medSrc, highSrc }) => {

    const [inView, setInView] = useState(false)
    const [mediumLoad, setMediumLoad] = useState(false)
    const [highLoad, setHighLoad] = useState(false)
    const containerRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            console.log('ENTRIES', entries)
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setInView(true)
                    observer.disconnect()
                }
            })
        })
        if (containerRef.current) {
            observer.observe(containerRef.current)
        }
        return () => observer.disconnect()
    }, [])


    return (
        <div className='progressive-container' ref={containerRef}>

            {/* Low-quality image: Always rendered and blurred; fades out when the medium loads */}
            <img
                className='progressive-Img'
                src={lowSrc}
                // alt={alt}
                style={{ opacity: mediumLoad ? 0 : 1 }}
            />

            {/* Medium-quality image: Loaded when in view; fades in over the low-quality version.
              Once the high-quality image loads, this fades out. */}
            {inView && (
                <img
                    className='progressive-Img'
                    src={medSrc}
                    // alt={alt}
                    onLoad={() => setMediumLoad(true)}
                    style={{ opacity: mediumLoad ? (highLoad ? 0 : 1) : 0 }}
                />
            )}

            {/* High-quality image: Loaded when in view; fades in once loaded */}
            {inView && (
                <img
                    className='progressive-Img'
                    src={highSrc}
                    // alt={alt}
                    onLoad={() => setHighLoad(true)}
                    style={{ opacity: highLoad ? 1 : 0 }}
                />
            )}
        </div>
    )
}

export default ProgressiveImage