import React, { useRef } from 'react'
import './groupDisplay.css'
import { motion, useScroll, useMotionValueEvent, useInView } from 'framer-motion'

const GroupDisplay = () => {

    // const groupContainerRef = useRef()
    // const { scrollYProgress: groupContainer } = useScroll({
    //     container: groupContainerRef,
    //     offset: ['start start', 'end end']
    // })

    // useMotionValueEvent(groupContainer, 'change', (latest) =>
    //     console.log('mainY', latest)
    // )




    const theFellowship = ['Boromir', 'Aragorn', 'Legolas', 'Gandalf', 'Merry', 'Sam', 'Pippen', 'Frodo', 'Gimli']
    const spectralSquad = ['Kanan', 'Hera', 'Sabine', 'Chopper', 'Ezra', 'Zeb']



    return (
        // <div className='groupDisplay' ref={groupContainerRef}>
        <div className='groupDisplay'>

            <div className='scrollDisplay'>
                <div className='stickyGroup'>
                    <h1>The Wookies</h1>
                    <button>Back</button>
                </div>

                {theFellowship.map((member, i) => (
                    <div key={i} className='artImage'>
                        <p>{member}</p>
                    </div>
                ))}

            </div>


        </div>
    )
}

export default GroupDisplay


const ArtImage = ({ children }) => 
