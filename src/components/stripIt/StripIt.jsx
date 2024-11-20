import React from 'react'
import { motion, useTransform } from 'framer-motion'
import './stripIt.css'






const StripIt = ({ mainContainer, aniParams }) => {
    const { enter, exit, picture } = aniParams

    const xLeave = useTransform(mainContainer, [enter, exit], ['0%', '100%'])
    const xArrive = useTransform(mainContainer, [enter, exit], ['-100%', '0%'])


    return (
        <div className='stripIt'>
            <div className='blueBox'>
                <motion.img src={picture} className='paintImage' style={{ x: xLeave }} />
            </div>
            <div className='theLine'></div>
            <div className='redBox'>
                <motion.img src={picture} className='stripImage' style={{ x: xArrive }} />
            </div>
        </div>
    )
}

export default StripIt
