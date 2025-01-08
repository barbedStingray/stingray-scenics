import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './groupDisplay.css'
import '../galleryPage/galleryPage.css'
import { motion, useScroll, useMotionTemplate, useTransform, useMotionValueEvent, useInView } from 'framer-motion'

const GroupDisplay = () => {

    const navigate = useNavigate()

    const groupContainerRef = useRef()
    const { scrollYProgress: groupContainer } = useScroll({
        container: groupContainerRef,
        offset: ['start start', 'end end']
    })
    useMotionValueEvent(groupContainer, 'change', (latest) =>
        console.log('mainY', latest)
    )
    const gradientColor = useTransform(groupContainer, [0, 1], [
        'linear-gradient(90deg,#ecf9d455,#375354)', // start
        'linear-gradient(90deg, #ff758c55, #01003188)', // start
        // 'linear-gradient(90deg, #010031, #ff758c)', // start
        // 'linear-gradient(90deg, #6a11cb, #2575fc)', // end
        // 'linear-gradient(90deg, #ff7eb3, #ff758c)', // start
        // 'linear-gradient(90deg, #6a11cb, #2575fc)', // end
    ])
    const gradientStyle = useMotionTemplate`${gradientColor}`

    function backToGallery() {
        navigate('/gallery')
    }

    const theFellowship = ['Boromir', 'Aragorn', 'Legolas', 'Gandalf', 'Merry', 'Sam', 'Pippen', 'Frodo', 'Gimli', 'Kanan', 'Hera', 'Sabine', 'Chopper', 'Ezra', 'Zeb']
    const spectralSquad = ['Kanan', 'Hera', 'Sabine', 'Chopper', 'Ezra', 'Zeb']


    return (
        <motion.div
            className='groupDisplay'
            ref={groupContainerRef}
            style={{ background: gradientStyle }}
        >

            <div className='scrollDisplay'>
                <div className='stickyGroup'>
                    <h1>The Wookies</h1>
                    <button onClick={backToGallery}>Back</button>
                </div>

                {theFellowship.map((member, i) => (
                    <ArtImage key={i} index={i}>
                        <div className='artImage'>
                            <p>{member}</p>
                        </div>
                    </ArtImage>
                ))}

            </div>


        </motion.div>
    )
}

export default GroupDisplay


const ArtImage = ({ children, index }) => {
    const ref = useRef()
    const isInView = useInView(ref, { margin: '-30% 0px -20% 0px ' })
    const groupDisplayVariants = {
        enter: { opacity: 1, y: 10, x: 0 },
        exit: { opacity: 0, y: -30, x: index % 2 === 0 ? -40 : 40 },
    }

    return (
        <motion.div
            ref={ref}
            initial="exit"
            whileInView="enter"
            exit="exit"
            variants={groupDisplayVariants}
            transition={{ duration: 0.5 }}
            viewport={{
                once: false,
                margin: '-30% 0px -20% 0px ',
            }}
        >
            {children}
        </motion.div>
    )
}
