import React, { useRef } from 'react'
import './miniDisplay.css'
import b1BattleDroid from '../../images/starWars/b1BattleDroid.png'

import { motion, useInView } from 'framer-motion'


const MiniDisplay = () => {


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
    ]


    return (
        <div className='miniDisplay'>
            {characters.map((character, i) => (
                <ArtImage key={i} index={i} character={character} />
            ))}
        </div>
    )
}




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
            <img
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
            <p
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
            >{character.title}</p>
        </div>
    )
}


export default MiniDisplay
