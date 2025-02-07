import React from 'react'
import { useDispatch } from 'react-redux'
import './menuButton.css'


const MenuButton = () => {

    const dispatch = useDispatch()
    const handleViewJump = () => {
        console.log('menu option')
        dispatch({
            type: 'SECTION_CHANGE',
            // option to set menu color here...
            payload: { gallerySection: 'menuSection', galleryDisplay: 'mainDisplay', colorShade: '#00000099' }
        })
    }

  return (
    <button onClick={handleViewJump} className="menu-btn"><span /></button>
)
}

export default MenuButton
