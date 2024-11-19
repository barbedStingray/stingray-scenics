import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useSpring, useTransform, useScroll, useMotionTemplate, useMotionValue, useMotionValueEvent } from 'framer-motion';
import './navBar.css'
import stingrayLogo from '../../images/DGreenIcon.png'


const NavBar = ({ mainContainer }) => {

    const [isHidden, setIsHidden] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const prevY = useRef(0)

    useMotionValueEvent(mainContainer, 'change', (y) => {
        const difference = y - prevY.current
        if (Math.abs(difference) > 0.02) { // (~70px) only comparing if the difference is larger than X
            setIsHidden(difference > 0) // diff > 0 scroll down / diff < 0 scroll up toggle true/false
            setIsSidebarOpen(false)
            prevY.current = y
        }
    })

    // useMotionValueEvent(mainContainer, 'change', (latest) =>
    //     console.log('mainY', latest)
    // )


    return (
        <>
            <motion.img
                onMouseEnter={() => setIsHidden(false)}
                initial={false}
                src={stingrayLogo} className='stingrayLogo'
                animate={isHidden ? 'visible' : 'hidden'}
                // transition={{ duration: 0.3 }}
                transition={{ type: 'spring', stiffness: 80, damping: 10 }}
                variants={{
                    hidden: {
                        opacity: 0,
                        y: '100%'
                    },
                    visible: {
                        opacity: 1,
                        y: '0%'
                    }
                }}
            />

            <motion.div
                animate={isHidden ? 'hidden' : 'visible'}
                // whileHover='visible'
                onFocusCapture={() => setIsHidden(false)}
                variants={{
                    hidden: {
                        y: '-100%',
                        opacity: 0,
                    },
                    visible: {
                        y: '0%',
                        opacity: 1,

                    }
                }}
                transition={{ duration: 0.3 }}
                className='navigation'
            >

                <Link to='/' className='title'>Stingray Scenics</Link>

                <label className={`menuLabel ${isSidebarOpen ? 'open' : ''}`}>
                    <button className={`navButton ${isSidebarOpen ? 'open' : ''}`} onClick={() => setIsSidebarOpen(!isSidebarOpen)}></button>
                </label>

                <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                    <nav>
                        <Link to='/demoPage'>The Gallery</Link>
                        <h5>Coming Soon!</h5>
                        <div>Commission</div>
                        <div>Model Restoration</div>
                        <div>The Hobby (HH)</div>
                        <div>Scenic Materials</div>
                        <div>Products</div>
                        <div>Contact</div>
                        <div>About</div>
                    </nav>
                </aside>



            </motion.div>
        </>
    )
}

export default NavBar
