import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useSpring, useInView, useTransform, useScroll, useMotionTemplate, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom'
import './homePage.css'

import ParallaxImage from '../../components/ParallaxImage';
import tinyFiguresImages from '../../parallaxImages/tinyFigures';
import epicStoriesImages from '../../parallaxImages/epicStories';
import pelennorFields from '../../images/pelennorFields.jpeg'
import NavBar from '../../components/navigation/NavBar'

import moriaGandalf from '../../images/lordoftheRings/moriaGandalf.png'
import dunharrowGhost from '../../images/lordoftheRings/dunharrowGhost.png'
import b1BattleDroid from '../../images/starWars/b1BattleDroid.png'
import droids from '../../images/droids.png'

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


    // home photo
    const homePhotoScale = useTransform(homeContainer, [0, 1], [1.25, 1])
    const homePhotoHeight = useTransform(homeContainer, [0, 0.2355], ['100dvh', '40dvh'])
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

            <p className='homeTextStyle SStitle glassMorphGreen'
                style={{ opacity: titleOp }}
            >Stingray scenics"</p>
            <motion.p className='homeTextStyle scrollAdventure'
                style={{ opacity: scrollAdventureOp }}
            >Scroll for Adventure</motion.p>


            <div className='homeScrollDiv'>

                <div className='revealPanel'>
                    <img className='homeImage' src={pelennorFields}
                        style={{ scale: homePhotoScale, filter: filterStyle, height: homePhotoHeight }}
                    />
                </div>
                <div className='stickyFooter'>
                    <h1>Custom Wargamming since 2020</h1>
                    <h1 className='SSwelcome'>Welcome</h1>
                    <div className='footerLinks'>
                        <Link to={'/gallery'}>Gallery</Link>
                        <p>Contact</p>
                        <Link to={'/commission'}>Commission</Link>
                        <p>Hobby</p>
                        <p>Restore</p>
                        <p>About Me</p>
                    </div>
                </div>



            </div>


        </motion.div >








        // <motion.div className='homePage' ref={homeContainerRef}>
        //     {/* <NavBar /> */}

        //     <motion.div className='homeImageDisplay'
        //         style={{ height: homePhotoHeight }}
        //     >
        //         <img className='homeImage' src={pelennorFields}
        //             style={{ scale: homePhotoScale, filter: filterStyle, height: homePhotoHeight }}
        //         />
        //         <p className='homeTextStyle SStitle glassMorphGreen'
        //             style={{ opacity: titleOp }}
        //         >Stingray scenics"</p>
        //         <motion.p className='homeTextStyle scrollAdventure'
        //             style={{ opacity: scrollAdventureOp }}
        //         >Scroll for Adventure</motion.p>

        //     </motion.div>

        //     <div className='homeScrollDiv'>

        //         <div className='homeSection'>
        //             <div className='homeContent'>
        //                 <h1 className='contentTitle'>WELCOME</h1>
        //                 <div className='contentDisplay'>
        //                     <div className='contentCoolScene'>
        //                         <img src={droids} className='homeImage' />
        //                     </div>
        //                     <div className='contentDescription'>
        //                         <div className='contentCoolMini'>
        //                             <img src={b1BattleDroid} className='homeImage' />
        //                         </div>
        //                         <p>{openingLine}</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className='homeSection'>
        //             <h1>COMMISSION</h1>
        //             <button>Contact</button>
        //         </div>
        //         <div className='homeSection'>
        //             <h1>GALLERY</h1>
        //         </div>
        //         <div className='homeSection'>
        //             <h1>THE HOBBY</h1>
        //         </div>
        // <div className='homeSection'>
        //     <h1>Custom Wargamming since 2009</h1>
        // </div>


        //     </div>
        // </motion.div >







        // <motion.div className='homePage' ref={homeContainerRef}>
        //     {/* <NavBar /> */}


        //     <div className='homeScrollDiv'>

        //         <div className='homeDisplay'>

        //             <motion.img className='homeImage' src={pelennorFields}
        //                 style={{ scale: homePhotoScale, filter: filterStyle }}
        //             />
        //             <motion.p className='homeTextStyle SStitle glassMorphGreen'
        //                 style={{ opacity: titleOp }}
        //             >Stingray scenics"</motion.p>

        //             <motion.p className='homeTextStyle scrollAdventure'
        //                 style={{ opacity: scrollAdventureOp }}
        //             >Scroll for Adventure</motion.p>


        //             <motion.p className='homeTextStyle tinyFigures'
        //                 style={{ y: tinyFiguresY, opacity: tinyFiguresOp }}
        //             >Tiny figures+</motion.p>

        //             <motion.p className='homeTextStyle epicStories'
        //                 style={{ x: epicStoriesX, opacity: epicStoriesOp }}
        //             >Epic stories?</motion.p>

        //             {tinyFiguresImages.map((tinyImage, i) => (
        //                 <ParallaxImage key={i} scrollContainer={homeContainer} parDetails={tinyImage} />
        //             ))}

        //             {epicStoriesImages.map((storyImage, i) => (
        //                 <ParallaxImage key={i} scrollContainer={homeContainer} parDetails={storyImage} />
        //             ))}


        //             <div className='homeMenu'>
        //                 <motion.div className='menuBanner glassMorphGreen' style={{ width: bannerWidth0 }}>
        //                     <Link className='homeTextStyle bannerText' to={'/gallery'}>Gallery.</Link>
        //                 </motion.div>
        //                 <motion.div className='menuBanner glassMorphGreen' style={{ width: bannerWidth1 }}>
        //                     <Link className='homeTextStyle bannerText'>Commission"</Link>
        //                 </motion.div>
        //                 <motion.div className='menuBanner glassMorphGreen' style={{ width: bannerWidth2 }}>
        //                     <Link className='homeTextStyle bannerText'>Contact$</Link>
        //                 </motion.div>
        //                 <motion.div className='menuBanner glassMorphGreen' style={{ width: bannerWidth3 }}>
        //                     <Link className='homeTextStyle bannerText'>The hobby%</Link>
        //                 </motion.div>
        //                 <motion.div className='bannerLink glassMorphGreen' style={{ width: bannerWidth3 }}>
        //                     <Link>Products</Link>
        //                 </motion.div>
        //             </div>
        //         </div>
        //     </div>
        // </motion.div >
    )
}

export default StingrayScenics