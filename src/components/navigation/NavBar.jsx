import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './navBar.css'
import { motion, AnimatePresence, useInView } from 'framer-motion'


const NavBar = () => {

    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 1,
    })

    return (
        <ul className='navBar glassMorphClear'
            onMouseLeave={() => {
                setPosition((prev) => ({
                    ...prev,
                    opacity: 0,
                }))
            }}
        >
            <Tab setPosition={setPosition}>Gallery</Tab>
            <Tab setPosition={setPosition}>Contact</Tab>
            <Tab setPosition={setPosition}>Commission</Tab>
            <Tab setPosition={setPosition}>Hobby</Tab>
            <Tab setPosition={setPosition}>Reviews</Tab>
            <Cursor position={position} />
        </ul>
    )
}


export default NavBar



// nav tabs
const Tab = ({ children, setPosition }) => {

    const dispatch = useDispatch()
    const ref = useRef(null)
    const openContactModal = () => {
        dispatch({ type: 'SET_CONTACT', payload: true })
    }

    return children === 'Contact' ? (
        <div
            ref={ref}
            className="motionTab"
            onClick={openContactModal}
            onMouseEnter={() => {
                const { width } = ref.current.getBoundingClientRect()
                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                })
            }}
        >
            {children}
        </div>
    ) : (
        <Link
            ref={ref}
            to={`/${children.toLowerCase()}`}
            className="motionTab"
            onMouseEnter={() => {
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
