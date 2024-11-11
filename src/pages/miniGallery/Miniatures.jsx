import React, { useEffect, useState, useRef } from 'react';
import './miniatures.css';

import hobbiton from '../../images/hobbiton.jpg'
import stingrayIcon from '../../images/DGreenIcon.png'
import oneRing from '../../images/oneRing.png'
import mordor from '../../images/mordor.png'
import imperials from '../../images/imperials.jpeg'
import pelennorFields from '../../images/pelennorFields.jpeg'
import trolls from '../../images/trolls.jpeg'
import rivendellCharge from '../../images/rivendellCharge.jpeg'
import droids from '../../images/droids.png'


const Miniatures = () => {
    const galleryRef = useRef();
    const [scrollPosition, setScrollPosition] = useState(0)
    const [debouncedScroll, setDebouncedScroll] = useState(0)

    const rainItems = [
        { picture: imperials, speed: 1, height: 120, width: 220 },
        { picture: pelennorFields, speed: 3, height: 80, width: 320 },
        { picture: droids, speed: 5, height: 220, width: 280 },
        { picture: trolls, speed: 0.15, height: 180, width: 150 },
        { speed: 0.4, height: 120, width: 120 },
        { speed: 0.3, height: 190, width: 80 },
        { speed: 0.2, height: 250, width: 90 },
        { speed: 0.3, height: 130, width: 150 },
        { speed: 0.15, height: 160, width: 220 },
    ];

    // Create a ref to store the requestAnimationFrame
    const scrollAnimationRef = useRef()

    const updateScroll = () => {
        if (galleryRef.current) {
            setScrollPosition(galleryRef.current.scrollTop)
        }
        // Recursively request the next animation frame
        scrollAnimationRef.current = requestAnimationFrame(updateScroll)
    };

    useEffect(() => {
        const gallery = galleryRef.current

        if (gallery) {
            // Start scrolling updates on mount
            scrollAnimationRef.current = requestAnimationFrame(updateScroll)

            // Clean up on unmount
            return () => cancelAnimationFrame(scrollAnimationRef.current)
        }
    }, [])

    useEffect(() => {
        // Debounce to avoid over-updating
        const timeoutId = setTimeout(() => {
            setDebouncedScroll(scrollPosition)
        }, 20)

        return () => clearTimeout(timeoutId)
    }, [scrollPosition])

    return (
        <div className='miniatureGallery' ref={galleryRef}>
            <div className='miniRainContainer'>
                <div className='miniatureRain'>
                    {rainItems.map((drop, i) => (
                        <div
                            key={i}
                            className='miniRainDrop'
                            style={{
                                transform: `translate3d(0, ${debouncedScroll * drop.speed}px, 0)`,
                                width: drop.width,
                                height: drop.height,
                            }}
                        >
                            <img className='imageDrop' src={drop.picture} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Miniatures
