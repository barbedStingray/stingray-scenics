import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useSpring, useTransform, useScroll, useMotionTemplate, useMotionValue, useMotionValueEvent } from 'framer-motion';
import './navBar.css'
import stingrayLogo from '../../images/DGreenIcon.png'


const NavBar = ({ mainContainer }) => {

    const [isHidden, setIsHidden] = useState(false)
    const prevY = useRef(0)


    useMotionValueEvent(mainContainer, 'change', (y) => {
        const difference = y - prevY.current
        if (Math.abs(difference) > 0.02) { // (~70px) only comparing if the difference is larger than X
            setIsHidden(difference > 0) // diff > 0 scroll down / diff < 0 scroll up toggle true/false
            prevY.current = y
        }
    })

    useMotionValueEvent(mainContainer, 'change', (latest) =>
        console.log('mainY', latest)
    )


    return (
        <>
            <img onMouseEnter={() => setIsHidden(false)} src={stingrayLogo} className='stingrayLogo' />
            <motion.div
                animate={isHidden ? 'hidden' : 'visible'}
                // whileHover='visible'
                onFocusCapture={() => setIsHidden(false)}
                variants={{
                    hidden: {
                        y: '-100%',
                    },
                    visible: {
                        y: '0%',
                    }
                }}
                transition={{ duration: 0.2 }}
                className='navigation'
            >

                <Link to='/' className='title'>Stingray Scenics</Link>


                <label className='hamburger-menu'>
                    <input type='checkbox' />
                </label>
                <aside className='sidebar'>
                    <nav>
                        <div>Miniature Gallery</div>
                        <div>Terrain Gallery</div>
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
