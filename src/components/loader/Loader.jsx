import React from "react"
import { useSelector } from "react-redux"
import './loader.css'


const Loader = () => {

    const loadStatus = useSelector((state) => state.loadStatus)
    console.log('load Status', loadStatus)


    const ballProps = [
        { duration: 1.75, color: 'black' },
        { duration: 2.25, color: '#dddddd' },
        { duration: 2.75, color: '#b5b5b5' },
        { duration: 3.25, color: '#3d3d3d' }
    ];
    
    return (
        <div className="loading-container">

            {loadStatus && (
                ballProps.map((ball, index) => (
                    <div 
                        key={index} 
                        className="slide-ball" 
                        style={{
                            animation: `slideBall ${ball.duration}s ease-in-out infinite`,
                            backgroundColor: ball.color
                        }}
                    />
                ))
            )}
            
        </div>
    )
}

export default Loader
