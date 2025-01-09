import React, { useState } from 'react'

import galleryData from './galleryData'


const MenuSection = ({ controls }) => {
    const { setGallerySection, setGalleryDisplay, setColorShade } = controls

    const [currentSection, setCurrentSection] = useState('lordOfTheRings')
    const menuSections = Object.keys(galleryData).map((section) => ({
        galleryLabel: section,
        title: galleryData[section]?.mainDisplay.content.title,
    })).filter((_, i, arr) => i < arr.length - 1 && i !== 0)
    const menuDisplays = Object.keys(galleryData[currentSection]).map((display) => ({
        galleryLabel: display,
        title: galleryData[currentSection][display]?.content.title,
        color: galleryData[currentSection][display]?.color,
    })).filter((_, i, arr) => i !== 0)


    return (
        <div className='menuSection'>
            <div className='sectionItems'>
                {menuSections.map((section, i) => (
                    <button
                        className='menuButton'
                        onClick={() => setCurrentSection(section.galleryLabel)}
                        key={i}
                    >
                        {section.title}
                    </button>
                ))}
            </div>

            <div className='displayItems'>
                {menuDisplays.map((display, i) => (
                    <button
                        className='menuButton'
                        key={i}
                        onClick={() => {
                            setGallerySection(currentSection)
                            setGalleryDisplay(display.galleryLabel)
                            setColorShade(display.color)
                        }}
                    >
                        {display.title}
                    </button>
                ))}
            </div>



        </div>
    )
}

export default MenuSection
