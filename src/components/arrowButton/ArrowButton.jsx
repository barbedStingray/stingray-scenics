import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import './arrowButton.css'
import { handleArrowNavigation } from "../../pages/galleryPage/galleryComponents/galleryScripts";



const ArrowButton = ({ division, direction, pointer }) => {

    const dispatch = useDispatch()
    const { gallerySection, galleryDisplay } = useSelector((state) => state.gallerySlice)

    const [clicked, setClicked] = useState(false) // Track click state
    const lines = Array.from({ length: 5 })
    const dots = Array.from({ length: 3 })

    const dotVariants = {
        initial: { backgroundColor: "#fff" }, // Dots start as white
        clicked: { backgroundColor: "#000" }, // Dots turn black when clicked
        reset: { backgroundColor: "#fff" }, // Dots turn back to white after reset
    };

    const arrowMap = {
        downArrow: 'arrowButton',
        upArrow: 'arrowButton upArrow',
        leftArrow: 'arrowButton leftArrow',
        rightArrow: 'arrowButton rightArrow',
    }
    const arrowClass = arrowMap[pointer]


    const handleClick = () => {
        setClicked(true) // Change dots to black

        // After a delay, reset the dots to white
        setTimeout(() => {
            setClicked(false) // triggers reset animation
        }, 500) // Adjust delay as needed (in milliseconds)

        // handle your actual navigation
        handleArrowNavigation(division, direction, gallerySection, galleryDisplay, dispatch)
    
        dispatch({
            type: 'SET_DISPLAY',
            payload: false,
        })

    };


    return (
        <motion.button
            className={arrowClass}
            onClick={handleClick} // Trigger the color change and reset, apply navigation
            initial="initial"
            animate={clicked ? "clicked" : "initial"} // Change animation based on click state
        >
            {lines.map((_, lineIndex) => (
                <motion.span
                    key={lineIndex}
                    className={`arrowLine line-${lineIndex}`}
                >
                    {dots.map((_, dotIndex) => (
                        <motion.span
                            key={dotIndex}
                            className="arrowDot"
                            variants={dotVariants}
                            animate={clicked ? "clicked" : "initial"} // Change animation based on click state
                            transition={{
                                duration: 0.3,
                                delay: dotIndex * 0.1,
                            }}
                        />
                    ))}
                </motion.span>
            ))}
        </motion.button>
    );
};

export default ArrowButton;
