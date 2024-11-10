import React, { useEffect, useState, useRef } from 'react'
import MiniPreview from '../components/miniPreview/MiniPreview'



import imperials from '../images/imperials.jpeg'
import pelennorFields from '../images/pelennorFields.jpeg'
import trolls from '../images/trolls.jpeg'
import rivendellCharge from '../images/rivendellCharge.jpeg'
import droids from '../images/droids.png'
import smugglers from '../images/smugglers.jpeg'




const Miniatures = () => {

    const lotrArray = [pelennorFields, trolls, rivendellCharge]
    const starWarsArray = [droids, smugglers, imperials]

    return (
        <>
            <img className='bannerImage' src={imperials} alt='banner image' />

            <div className='miniPreviewSection'>
                <MiniPreview title='Lord of the Rings' photoArray={lotrArray} />
                <MiniPreview title='Star Wars' photoArray={starWarsArray} />
            </div>


        </>
    )
}

export default Miniatures
