import React from 'react'
import './trackButton.css'
import { slideVariants, displaySpring } from '../../pages/galleryPage/galleryComponents/animations'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const TrackButton = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { galleryDisplay, gallerySection } = useSelector((state) => state.gallerySlice)
    const galleryView = useSelector((state) => state.galleryView)
    const direction = useSelector((state) => state.direction)



    const requestMinisShowcase = async (leavePage) => {
        try {
            dispatch({ type: 'SET_LOAD_STATUS', payload: true })
            const { data: myMinis } = await axios.get('/api/myMinis/allMinis', {
                params: { gallerySection, galleryDisplay }
            });
            dispatch({ type: 'SET_SHOWCASE', payload: myMinis })
        } catch (error) {
            console.log('error if finding your minis', error)
            alert('there was an error in your request')
        } finally {
            dispatch({ type: 'SET_DISPLAY', payload: !leavePage })
            dispatch({ type: 'SET_LOAD_STATUS', payload: false })
            if (leavePage) {
                navigate('/groupDisplay')
            }
        }
    }


    return (
        <>
            {galleryView ? (
                <div
                    className='galleryButton-container'
                    custom={direction}
                    variants={slideVariants}
                    transition={displaySpring}
                >
                    <button className='trackButton' onClick={(e) => { dispatch({ type: 'SET_CONTACT', payload: true }) }}>
                        <span>Commission</span>
                    </button>
                </div>
            ) : (
                <>
                    <div className='galleryButton-container mobileView'
                        custom={direction}
                        variants={slideVariants}
                        transition={displaySpring}
                    >
                        <button className='trackButton' onClick={() => requestMinisShowcase(true)}>
                            <span>View Models</span>
                        </button>
                    </div>

                    <div
                        className='galleryButton-container largeView'
                        custom={direction}
                        variants={slideVariants}
                        transition={displaySpring}
                    >
                        <button className='trackButton' onClick={() => requestMinisShowcase(false)}>
                            <span>View Models</span>
                        </button>
                    </div>
                </>
            )}
        </>
    )
}

export default TrackButton
