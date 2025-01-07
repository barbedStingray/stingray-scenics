import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'
import { motion } from 'framer-motion'

const NavBar = () => {

    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 1,
    })

    return (
        <ul className='navBar clearGlass'
            onMouseLeave={() => {
                setPosition((prev) => ({
                    ...prev,
                    opacity: 0,
                }))
            }}
        >
            <Tab setPosition={setPosition}>Home</Tab>
            <Tab setPosition={setPosition}>Gallery</Tab>
            <Tab setPosition={setPosition}>Commission</Tab>
            <Tab setPosition={setPosition}>Contact</Tab>
            <Tab setPosition={setPosition}>About</Tab>
            <Cursor position={position} />
        </ul>
    )
}

export default NavBar


// nav tabs
const Tab = ({ children, setPosition }) => {

    const ref = useRef(null)

    return (
        <Link
            ref={ref}
            onMouseEnter={() => {
                // const data = ref.current.getBoundingClientRect()
                const { width } = ref.current.getBoundingClientRect()
                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                })
            }}
        >
            {children}
        </Link>
    )
}

// shadowbox for nav
const Cursor = ({ position }) => {
    return <motion.div
        className='cursor'
        animate={position}
        transition={{
            duration: 0.4,
            ease: 'easeInOut'
        }}

    />
}
