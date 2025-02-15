import React from "react";
import './loader.css';

const Loader = () => {
    // Define the animation durations and colors
    const ballProps = [
        { duration: 1.75, color: 'black' },
        { duration: 2.25, color: 'red' },
        { duration: 2.75, color: 'blue' },
        { duration: 3.25, color: 'green' }
    ];
    
    return (
        <div className="loading-container">

            {ballProps.map((ball, index) => (
                <div 
                    key={index} 
                    className="slide-ball" 
                    style={{
                        animation: `slideBall ${ball.duration}s ease-in-out infinite`,
                        backgroundColor: ball.color
                    }}
                />
            ))}
            
        </div>
    );
};

export default Loader;
