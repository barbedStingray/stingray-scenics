import React, { useEffect, useState, useRef } from 'react'
import imperials from '../images/imperials.jpeg'
import pelennorFields from '../images/pelennorFields.jpeg'
import trolls from '../images/trolls.jpeg'
import rivendellCharge from '../images/rivendellCharge.jpeg'
import droids from '../images/droids.png'




const Miniatures = () => {

    const [modelOneIndex, setModelOneIndex] = useState(0)
    const [rotation, setRotation] = useState(0)
    const sliderRef = useRef(null)

    const handleSlideFlip = () => {
        if (sliderRef.current) {
            const scrollLeft = sliderRef.current.scrollLeft
            const sliderWidth = sliderRef.current.offsetWidth
            const itemWidth = sliderRef.current.children[0].offsetWidth
            // on snap
            // for every 625px rotate 180*
            // const pxByRotate = 180/itemWidth
            // const newRotation = scrollLeft * pxByRotate
            // console.log('ratio', pxByRotate)
            console.log('left', scrollLeft, 'width', sliderWidth, 'item', itemWidth )
            // setRotation(newRotation)
            const index = Math.round(scrollLeft / itemWidth)
            setRotation(index * 180)
        }
    }


    useEffect(() => {
        const slider = sliderRef.current
        if (slider) {
            slider.addEventListener('scroll', handleSlideFlip)
        }
        // clean up
        return () => {
            if (slider) {
                slider.removeEventListener('scroll', handleSlideFlip)
            }
        }
    }, [])


    return (
        <>
            <img className='bannerImage' src={imperials} alt='banner image' />

            <div className='swipingCards'>

                <div className='modelSlider' ref={sliderRef}>
                    <div className='sliderDiv'>
                        <img className='sliderPhoto' src={imperials} />
                    </div>
                    <div className='sliderDiv'>
                        <img className='sliderPhoto' src={pelennorFields} />
                    </div>
                    <div className='sliderDiv'>
                        <img className='sliderPhoto' src={trolls} />
                    </div>
                    <div className='sliderDiv'>
                        <img className='sliderPhoto' src={rivendellCharge} />
                    </div>
                </div>

                <div className='flippyCard' onClick={() => setRotation(rotation + 180)}>
                    <div className='flippyCardInner' style={{ transform: `rotateY(${rotation}deg)`, }}>
                        <div className='cardFront'>Hello</div>
                        <div className='cardBack'>Goodbye</div>
                    </div>
                </div>

                <button onClick={() => setRotation(rotation + 180)}>Flip IT Forward</button>
                <button onClick={() => setRotation(rotation - 180)}>Flip IT Back</button>




            </div>


        </>
    )
}

export default Miniatures
