import React, { useState, useEffect } from 'react'
import './progressiveImage.css'

// const ProgressiveImage = ({ lowResImg, highResImg }) => {
const ProgressiveImage = ({ picture }) => {

    // * accepts both database url's and src files
    // * URL generates low res on the fly from cloudinary (disable strict transformations)
    // * src files with squoosh - largest dimension to 200
    // * STRETCH : use srcset to adjust dpr values with photos = dpr sizes / device px !== css px

    const isCloudinary = typeof picture === 'string' 
    const highResImg = isCloudinary ? picture : picture.highSrc
    const lowResImg = isCloudinary ? highResImg.replace('/upload/', '/upload/w_50,q_10/') : picture.lowSrc

    const [imgSrc, setImgSrc] = useState(lowResImg || highResImg)

    useEffect(() => {
        const img = new Image()
        img.src = highResImg
        img.onload = () => {
            setImgSrc(highResImg)
        }
    }, [highResImg])


    return (
        <img
            src={imgSrc}
            className='progressive-Img'

        />
    )
}

export default ProgressiveImage