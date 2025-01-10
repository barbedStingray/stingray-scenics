import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useSpring, useInView, useTransform, useScroll, useMotionTemplate, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom'
import './homePage.css'

import ParallaxImage from '../../components/ParallaxImage';
import tinyFiguresImages from '../../parallaxImages/tinyFigures';
import epicStoriesImages from '../../parallaxImages/epicStories';
import pelennorFields from '../../images/pelennorFields.jpeg'
import NavBar from '../../components/navigation/NavBar'

const StingrayScenics = () => {

    const homeContainerRef = useRef()
    const { scrollYProgress: homeContainer } = useScroll({
        container: homeContainerRef,
        offset: ['start start', 'end end']
    })

    const openingLine = 'Welcome to Stingray Scenics, the intersection of passion, creativity, and art! We specialize in crafting unique terrain and custom-painted miniatures, all tailored to your personal vision. Whether its a modular battlefield, a dramatic scene, or custom work on a personal hero, our versatile commissions ensure your tabletop is as epic as your imagination.'

    useMotionValueEvent(homeContainer, 'change', (latest) =>
        console.log('mainY', latest)
    )


    // timeline
    // 0.1 SS disappear
    // 0.13 tiny figures title
    // 0.14 blur starts
    // 0.45 tiny figures ends (32 units of time)
    // 0.45 epic stories starts
    // 0.8 epic stories ends (35 units of time)
    // 0.78 grayscale and blur revert begins
    // 0.8 banner links begin
    // 1 end


    // home photo
    const homePhotoScale = useTransform(homeContainer, [0, 1], [1.25, 1])
    // const homePhotoY = useTransform(homeContainer, [0.8, 1], ['0dvh', '100dvh'])
    const grayscaleValue = useTransform(homeContainer, [0, 0.5, 0.78, 0.92], ['0%', '100%', '100%', '0%'])
    const blurValue = useTransform(homeContainer, [0.14, 0.25, 0.78, 0.83], [0, 2, 2, 0]);
    const filterStyle = useMotionTemplate`grayscale(${grayscaleValue}) blur(${blurValue}px)`;

    // mini titles
    const titleOp = useTransform(homeContainer, [0, 0.1], [1, 0])
    const scrollAdventureOp = useTransform(homeContainer, [0, 0.1], [1, 0])

    const tinyFiguresOp = useTransform(homeContainer, [0.13, 0.20, 0.46, 0.50], [0, 1, 1, 0])
    const tinyFiguresY = useTransform(homeContainer, [0.13, 0.5], ['0', '-5dvh'])
    const epicStoriesOp = useTransform(homeContainer, [0.48, 0.52, 0.78, 0.83], [0, 1, 1, 0])
    const epicStoriesX = useTransform(homeContainer, [0.48, 0.8], ['-1dvh', '2dvh'])

    // banner links
    const bannerWidth0 = useTransform(homeContainer, [0.80, 0.94], ['0%', '105%'])
    const bannerWidth1 = useTransform(homeContainer, [0.83, 0.96], ['0%', '105%'])
    const bannerWidth2 = useTransform(homeContainer, [0.86, 0.98], ['0%', '105%'])
    const bannerWidth3 = useTransform(homeContainer, [0.89, 1], ['0%', '105%'])



    const gradientColor = useTransform(homeContainer, [0, 1], [
        'linear-gradient(90deg, #ff7eb3, #ff758c)', // Gradient at start
        'linear-gradient(90deg, #6a11cb, #2575fc)', // Gradient at end
    ])
    const defaultGradient = 'linear-gradient(90deg, #ff7eb3, #ff758c)'
    const gradientStyle = useMotionTemplate`${gradientColor}`


    return (
        <motion.div className='homePage' ref={homeContainerRef}>
            {/* <NavBar /> */}


            <div className='homeScrollDiv'>

                <div className='homeDisplay'>

                    <motion.img className='homeImage' src={pelennorFields}
                        style={{ scale: homePhotoScale, filter: filterStyle }}
                    />

                    {/* titles */}
                    <motion.p className='homeTextStyle SStitle glassMorphGreen'
                        style={{ opacity: titleOp }}
                    >Stingray scenics"</motion.p>

                    <motion.p className='homeTextStyle scrollAdventure'
                        style={{ opacity: scrollAdventureOp }}
                    >Scroll for Adventure</motion.p>

                    <motion.p className='homeTextStyle tinyFigures'
                        style={{ y: tinyFiguresY, opacity: tinyFiguresOp }}
                    >Tiny figures+</motion.p>

                    <motion.p className='homeTextStyle epicStories'
                        style={{ x: epicStoriesX, opacity: epicStoriesOp }}
                    >Epic stories?</motion.p>


                    {/* images */}
                    {tinyFiguresImages.map((tinyImage, i) => (
                        <ParallaxImage key={i} scrollContainer={homeContainer} parDetails={tinyImage} />
                    ))}

                    {epicStoriesImages.map((storyImage, i) => (
                        <ParallaxImage key={i} scrollContainer={homeContainer} parDetails={storyImage} />
                    ))}


                    <div className='homeMenu'>
                        <motion.div className='menuBanner glassMorphGreen' style={{ width: bannerWidth0 }}>
                            <Link className='homeTextStyle bannerText' to={'/gallery'}>Gallery.</Link>
                        </motion.div>
                        <motion.div className='menuBanner glassMorphGreen' style={{ width: bannerWidth1 }}>
                            <Link className='homeTextStyle bannerText'>Commission"</Link>
                        </motion.div>
                        <motion.div className='menuBanner glassMorphGreen' style={{ width: bannerWidth2 }}>
                            <Link className='homeTextStyle bannerText'>Contact$</Link>
                        </motion.div>
                        <motion.div className='menuBanner glassMorphGreen' style={{ width: bannerWidth3 }}>
                            <Link className='homeTextStyle bannerText'>The hobby%</Link>
                        </motion.div>
                        {/* <motion.div className='bannerLink glassMorphGreen' style={{ width: bannerWidth3 }}>
                            <Link>Products</Link>
                        </motion.div> */}
                    </div>
                </div>
            </div>
            {/* <p>Custom Wargamming since 2020</p> */}
        </motion.div >
    )
}

export default StingrayScenics