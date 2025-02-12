import React, { useState } from 'react'
import './menuSection.css'
import { useDispatch } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'

import galleryData from '../galleryData'

const MenuSection = () => {

    const dispatch = useDispatch()
    const [currentSection, setCurrentSection] = useState('lordOfTheRings')

    const [menuSectionsOrder, setMenuSectionsOrder] = useState(
        Object.keys(galleryData)
            .map((section) => ({
                galleryLabel: section,
                title: galleryData[section]?.mainDisplay.content.title,
            }))
            .filter((_, i, arr) => i < arr.length - 1 && i !== 0))
            
    const menuDisplays = Object.keys(galleryData[currentSection]).map((display) => ({
        galleryLabel: display,
        title: galleryData[currentSection][display]?.content.title,
        color: galleryData[currentSection][display]?.color,
    })).filter((_, i, arr) => i !== 0)


    const handleSectionClick = (clickedLabel) => {
        setCurrentSection(clickedLabel)
        setMenuSectionsOrder((prevOrder) => {
            const clickedSection = prevOrder.find(
                (section) => section.galleryLabel === clickedLabel
            )
            const remainingSections = prevOrder.filter(
                (section) => section.galleryLabel !== clickedLabel
            )
            return [clickedSection, ...remainingSections]
        })
    }

    const containerVariants = {
        show: {
            transition: {
                staggerChildren: 0.1, // Stagger each child's entrance by 0.1s
            },
        },
        exit: {
            transition: {
                staggerChildren: 0.1, // Stagger each child's exit by 0.1s
            },
        },
    }

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    }

    const handleMenuJump = (display) => {
        console.log('BOOSTING')
        dispatch({
            type: 'MENU_JUMP',
            payload: {
                gallerySection: currentSection,
                galleryDisplay: display.galleryLabel,
                colorShade: display.color
            },
        })
    }


    return (
        <div className='menuSection'>
            <div className='sectionItems'>
                {menuSectionsOrder.map((section, i) => (
                    <motion.button
                        layout
                        className={currentSection === section.galleryLabel ? 'menuButton glassMorphBlack' : 'menuButton glassMorphWhite'}
                        onClick={() => handleSectionClick(section.galleryLabel)}
                        key={section.galleryLabel}
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {section.title}
                    </motion.button>
                ))}
            </div>


            <AnimatePresence mode='wait'>
                <motion.div className='displayItems'
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    key={currentSection}
                >
                    {menuDisplays.map((display, i) => (
                        <motion.button
                            className='menuButton glassMorphWhite'
                            key={display.galleryLabel}
                            onClick={() => handleMenuJump(display)}
                            variants={childVariants}
                        >
                            {display.title}
                        </motion.button>
                    ))}
                </motion.div>
            </AnimatePresence>

        </div>
    )
}

export default MenuSection
