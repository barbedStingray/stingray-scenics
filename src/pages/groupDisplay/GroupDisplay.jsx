import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './groupDisplay.css'
import '../galleryPage/galleryPage.css'
import galleryData from '../galleryPage/galleryComponents/galleryData'
import { motion, useScroll, useMotionTemplate, useTransform, useMotionValueEvent, useInView } from 'framer-motion'
import DisplayIcon from '../galleryPage/galleryComponents/DisplayIcon'

import b1BattleDroid from '../../images/starWars/b1BattleDroid.png'

const GroupDisplay = () => {

    const { gallerySection, galleryDisplay, colorShade } = useSelector((state) => state.gallerySlice)
    const { title, description, photo } = useSelector((state) => state.gallerySlice).content


    // console.log('GROUP shade', gallerySection, galleryDisplay)

    const navigate = useNavigate()

    const groupContainerRef = useRef()
    const { scrollYProgress: groupContainer } = useScroll({
        container: groupContainerRef,
        offset: ['start start', 'end end']
    })
    useMotionValueEvent(groupContainer, 'change', (latest) =>
        console.log('mainY', latest)
    )
    // * use for portfolio - double gradient shift
    // const doubleGradientColor = useTransform(groupContainer, [0, 1], [
    //     `linear-gradient(90deg,#00fbff,#008225)`,
    //     `linear-gradient(190deg,#008225,#0d00ff)`,
    // ])
    // const gradientColor = useTransform(groupContainer, [0, 1], [
    //     `${colorShade[0]}`,
    //     `${colorShade[1]}`,
    // ])
    // const gradientStyle = useMotionTemplate`${doubleGradientColor}`

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
            ref={groupContainerRef}
            style={{ '--shade-group': colorShade }}
        >
            <DisplayIcon />
            <h1 className='groupTitle' style={{ color: colorShade }}>{title}</h1>
            {characters.map((character, i) => (
                <ArtImage key={i} index={i} character={character} />
            ))}

        </motion.div>
    )
}

export default GroupDisplay



const ArtImage = ({ children, index, character }) => {
    const ref = useRef()
    // const isInView = useInView(ref, { margin: '-30% 0px -20% 0px ' })
    const artImageVariants = {
        enter: { opacity: 1, y: 0, x: 0 },
        exit: { opacity: 0, y: -20, x: index % 2 === 0 ? -40 : 40 },
    }
    const artTitleVariants = {
        enter: { opacity: 1, y: 0, x: 0 },
        exit: { opacity: 0, y: 20, x: index % 2 === 0 ? 40 : -40 },
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
                transition={{ duration: 0.5 }}
                viewport={{
                    once: false,
                    margin: '-30% 0px -40% 0px ',
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
                transition={{ duration: 0.5 }}
                viewport={{
                    once: false,
                    margin: '-30% 0px -15% 0px ',
                }}
            >{character.title}</motion.p>
        </div>
    )
}
