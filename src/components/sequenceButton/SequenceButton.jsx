import React from 'react'
import './sequenceButton.css'
import { stagger, useAnimate } from 'framer-motion';


const SequenceButton = () => {

    const randomNumberBetween = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }



    const [scope, animate] = useAnimate() // scope is a 'ref'

    const onButtonClick = () => {

        const sparkles = Array.from({ length: 20 })
        const sparklesAnimation = sparkles.map((_, index) => [
            `.sparkle-${index}`,
            {
                x: randomNumberBetween(-100, 100),
                y: randomNumberBetween(-100, 100),
                scale: randomNumberBetween(1.5, 2.5),
                opacity: 1,
            },
            {
                duration: 0.4,
                at: '<'
            }
        ])
        const sparklesFadeOut = sparkles.map((_, index) => [
            `.sparkle-${index}`,
            {
                opacity: 0,
                scale: 0,
            },
            {
                duration: 0.65,
                at: '<'
            }
        ])
        const sparklesReset = sparkles.map((_, index) => [
            `.sparkle-${index}`,
            {
                x: 0,
                y: 0,
            },
            {
                duration: 0.000001,
            }
        ])

        animate([
            ...sparklesReset,
            ['.letter', { y: -20 }, { duration: 0.2, delay: stagger(0.05) }],
            ['.sequence-button', { scale: 0.8 }, { duration: 0.1, at: '<' }], // at runs at same start time
            ['.sequence-button', { scale: 1 }, { duration: 0.1 }],
            ...sparklesAnimation,
            ['.letter', { y: 0 }, { duration: 0.000001, at: 0.65 }], // set duration if you want to see them move back
            ...sparklesFadeOut,
        ])
    }


    return (
        <div ref={scope} className='sequence-container'>
            <button
                ref={scope}
                className='sequence-button'
                onClick={onButtonClick}
            >
                {/* <span className='sr-only'>Motion</span> */}
                <span className='hidden-box'>
                    <span aria-hidden>
                        {/* {['T', 'R', 'A', 'N', 'S', 'M', 'I', 'T'].map((letter, index) => ( */}
                        {['S', 'E', 'N', 'D'].map((letter, index) => (
                            <span
                                data-letter={letter}
                                className='letter'
                                key={`${letter}-${index}`}
                            >
                                {letter}
                            </span>
                        ))}
                    </span>
                </span>
            </button >
            <span className='sparkle-container' aria-hidden>
                {Array.from({ length: 20 }).map((_, index) => (
                    <svg
                        className={`sparkleStar sparkle-${index}`}
                        key={`sparkleStar-${index}`}
                        viewBox="0 0 122 117"
                        width="10"
                        height="10"
                    >
                        <path
                            className="starPath"
                            d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"
                        />
                    </svg>
                ))}
            </span>
        </div>
    )
}

export default SequenceButton
