import React, { useState } from "react";
import { motion } from "framer-motion";

const ArrowButton = () => {
    const [clicked, setClicked] = useState(false) // Track click state
    const [resetColor, setResetColor] = useState(false) // Track if the dots should reset color

    const lines = Array.from({ length: 5 }) 
    const dots = Array.from({ length: 3 })

    const dotVariants = {
        initial: { backgroundColor: "#fff" }, // Dots start as white
        clicked: { backgroundColor: "#000" }, // Dots turn black when clicked
        reset: { backgroundColor: "#fff" }, // Dots turn back to white after reset
    };

    const handleClick = () => {
        setClicked(true) // Change dots to black

        // After a delay, reset the dots to white
        setTimeout(() => {
            setClicked(false) // triggers reset animation
        }, 500) // Adjust delay as needed (in milliseconds)
    };

    return (
        <motion.button
            className="button"
            onClick={handleClick} // Trigger the color change and reset on click
            initial="initial"
            animate={clicked ? "clicked" : "initial"} // Change animation based on click state
        >
            {lines.map((_, lineIndex) => (
                <motion.div
                    key={lineIndex}
                    className={`line line-${lineIndex}`}
                >
                    {dots.map((_, dotIndex) => (
                        <motion.div
                            key={dotIndex}
                            className="round"
                            variants={dotVariants}
                            animate={clicked ? "clicked" : resetColor ? "reset" : "initial"} // Animate based on clicked or reset state
                            transition={{
                                duration: 0.3, 
                                delay: dotIndex * 0.1,
                            }} 
                        />
                    ))}
                </motion.div>
            ))}
        </motion.button>
    );
};

export default ArrowButton;
