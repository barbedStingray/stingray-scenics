import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import './groupDisplay.css'
import '../galleryPage/galleryPage.css'
import { motion, useScroll, useMotionTemplate, useTransform, useMotionValueEvent, useInView } from 'framer-motion'
import DisplayIcon from '../galleryPage/galleryComponents/displayIcon/DisplayIcon'
import MiniDisplay from '../../components/miniDisplay/MiniDisplay'
import { LuArrowLeftFromLine } from "react-icons/lu";
import { TbMailUp } from "react-icons/tb";




const GroupDisplay = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { colorShade } = useSelector((state) => state.gallerySlice)
    const { title } = useSelector((state) => state.gallerySlice).content
    const miniShowcase = useSelector((state) => state.miniShowcase)

    function backToGallery() {
        navigate('/gallery')
    }


    return (
        <motion.div
            className='groupDisplay'
            style={{ '--shade-group': colorShade }}
        >

            <DisplayIcon />

            <h1 className='groupTitle' style={{ color: colorShade }}>{title}</h1>
            <MiniDisplay miniList={miniShowcase}/>

            <button className='returnButton' onClick={backToGallery}><LuArrowLeftFromLine /></button>
            <button className='groupCommission' onClick={(e) => { dispatch({ type: 'SET_CONTACT', payload: true }) }}><TbMailUp /></button>

        </motion.div>
    )
}

export default GroupDisplay