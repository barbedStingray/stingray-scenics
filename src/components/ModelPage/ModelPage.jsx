import React from 'react';
import vinesBackground from '../../images/vines.jpg';
import greenStingray from '../../images/DGreenIcon.png';
import LoremIpsum from '../loremIpsum/loremIpsum.jsx';



const ModelPage = () => {
    return (
        <div className='parallax'>
            <img src={vinesBackground} className='background' alt="background of vines" />
            <img src={greenStingray} className='foreground logo' alt='stingrayScenics Logo' />
            <div className='normalDiv'>
                <p className='heading'>Models</p>
            </div>
        </div>
    )
}

export default ModelPage;
