import React, { useRef } from 'react'
import './miniDisplay.css'

import { motion, useInView } from 'framer-motion'


const MiniDisplay = ({ miniList }) => {


    return (
        <div className='miniDisplay'>
            {miniList.map((character, i) => (
                <ArtImage key={i} index={i} character={character} />
            ))}
        </div>
    )
}



const ArtImage = ({ character, index }) => {
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
                src={character.picture}
                alt={character.picture}
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
                // alt={character.img}
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
            >{character.model}</p>
        </div>
    )
}


export default MiniDisplay
