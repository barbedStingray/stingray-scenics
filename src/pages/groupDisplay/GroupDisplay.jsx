import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import './groupDisplay.css'
import '../galleryPage/galleryPage.css'
import { motion, useScroll, useMotionTemplate, useTransform, useMotionValueEvent, useInView } from 'framer-motion'
import DisplayIcon from '../galleryPage/galleryComponents/displayIcon/DisplayIcon'
import MiniDisplay from '../../components/miniDisplay/MiniDisplay'
import b1BattleDroid from '../../images/starWars/b1BattleDroid.png'
import { LuArrowLeftFromLine } from "react-icons/lu";




const GroupDisplay = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { gallerySection, galleryDisplay, colorShade } = useSelector((state) => state.gallerySlice)
    const { title, description, photo } = useSelector((state) => state.gallerySlice).content

    // todo implement the array to MiniDisplay prop

    function backToGallery() {
        navigate('/gallery')
    }

    const characters = [
        { title: 'Boromir', img: b1BattleDroid },
        { title: 'Aragorn', img: b1BattleDroid },
        { title: 'Legolas', img: b1BattleDroid },
        { title: 'Gandalf', img: b1BattleDroid },
        { title: 'Merry', img: b1BattleDroid },
        { title: 'Sam', img: b1BattleDroid },
        { title: 'Pippen', img: b1BattleDroid },
        { title: 'Frodo', img: b1BattleDroid },
        { title: 'Gimli', img: b1BattleDroid },
        { title: 'Kanan', img: b1BattleDroid },
        { title: 'Hera', img: b1BattleDroid },
        { title: 'Sabine', img: b1BattleDroid },
        { title: 'Chopper', img: b1BattleDroid },
        { title: 'Ezra', img: b1BattleDroid },
        { title: 'Zeb', img: b1BattleDroid }
    ];


    return (
        <motion.div
            className='groupDisplay'
            style={{ '--shade-group': colorShade }}
        >

            <DisplayIcon />
            <h1 className='groupTitle' style={{ color: colorShade }}>{title}</h1>
            <MiniDisplay />

            <button className='returnButton' onClick={backToGallery}><LuArrowLeftFromLine />Return</button>
            <button className='groupCommission' onClick={(e) => {dispatch({ type: 'SET_CONTACT', payload: true })}}>Request</button>

        </motion.div>
    )
}

export default GroupDisplay




const ArtImage = ({ children, index, character }) => {
    const ref = useRef()
    // const isInView = useInView(ref, { margin: '-30% 0px -20% 0px ' })
    const artImageVariants = {
        enter: { opacity: 1, y: 0, x: 0 },
        exit: { opacity: 0, y: -20, x: index % 2 === 0 ? -20 : 20 },
    }
    const artTitleVariants = {
        enter: { opacity: 1, y: 0, x: 0 },
        exit: { opacity: 0, y: 20, x: index % 2 === 0 ? 20 : -20 },
    }

    return (
        <div
            className='artBox'
        >
            <motion.img
                className='artImage'
                src={character.img}
                alt={character.img}
                ref={ref}
                initial="exit"
                whileInView="enter"
                exit="exit"
                variants={artImageVariants}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{
                    once: false,
                    margin: '0% 0px 0% 0px ',
                }}
            />
            <motion.p
                className='artTitle'
                alt={character.img}
                ref={ref}
                initial="exit"
                whileInView="enter"
                exit="exit"
                variants={artTitleVariants}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{
                    once: false,
                    margin: '0% 0px 0% 0px ',
                }}
            >{character.title}</motion.p>
        </div>
    )
}
