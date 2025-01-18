import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './groupDisplay.css'
import '../galleryPage/galleryPage.css'
import galleryData from '../galleryPage/galleryComponents/galleryData'
import { motion, useScroll, useMotionTemplate, useTransform, useMotionValueEvent, useInView } from 'framer-motion'
import DisplayIcon from '../galleryPage/galleryComponents/DisplayIcon'

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
        { title: 'Boromir', img: 'boromir.jpg' },
        { title: 'Aragorn', img: 'aragorn.jpg' },
        { title: 'Legolas', img: 'legolas.jpg' },
        { title: 'Gandalf', img: 'gandalf.jpg' },
        { title: 'Merry', img: 'merry.jpg' },
        { title: 'Sam', img: 'sam.jpg' },
        { title: 'Pippen', img: 'pippen.jpg' },
        { title: 'Frodo', img: 'frodo.jpg' },
        { title: 'Gimli', img: 'gimli.jpg' },
        { title: 'Kanan', img: 'kanan.jpg' },
        { title: 'Hera', img: 'hera.jpg' },
        { title: 'Sabine', img: 'sabine.jpg' },
        { title: 'Chopper', img: 'chopper.jpg' },
        { title: 'Ezra', img: 'ezra.jpg' },
        { title: 'Zeb', img: 'zeb.jpg' }
    ];


    return (
        <motion.div
            className='groupDisplay'
            ref={groupContainerRef}
            style={{ '--shade-group': colorShade }}
        >
            <DisplayIcon />

            <div className='scrollDisplay'>
                {/* <div className='stickyGroup'>
                    <h1>{title}</h1>
                    <button onClick={backToGallery}>Return</button>
                </div> */}

                {characters.map((character, i) => (
                    <ArtImage key={i} index={i} character={character}>
                        {/* <img alt={character.img} />
                        <p>{character.title}</p> */}
                    </ArtImage>
                ))}

            </div>


        </motion.div>
    )
}

export default GroupDisplay



const ArtImage = ({ children, index, character }) => {
    const ref = useRef()
    const isInView = useInView(ref, { margin: '-30% 0px -20% 0px ' })
    const groupDisplayVariants = {
        enter: { opacity: 1, y: 10, x: 0 },
        exit: { opacity: 0, y: -30, x: index % 2 === 0 ? -40 : 40 },
    }

    return (
        <div
            className='artBox'
        >
            <motion.img
            className='artImage'
                alt={character.img}
                ref={ref}
                initial="exit"
                whileInView="enter"
                exit="exit"
                variants={groupDisplayVariants}
                transition={{ duration: 0.5 }}
                viewport={{
                    once: false,
                    margin: '-25% 0px -45% 0px ',
                }}
            />
            <motion.p
                className='artTitle'

            >{character.title}</motion.p>
            {children}
        </div>
    )
}
