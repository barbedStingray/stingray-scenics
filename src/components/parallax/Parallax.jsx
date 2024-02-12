import React from 'react';
import vinesBackground from '../../images/vines.jpg';


const Parallax = () => {
  return (
    <div className='parallax'>
        {/* picture background */}
        <img src={vinesBackground} className='background' alt="background of vines" />
        <div></div>
        {/* <img src={greenStingray} className='foreground logo' alt='stingrayScenics Logo' /> */}
        <div className='foreground title'>
          <h1 className='stingTitle'>Stingray</h1>
          <h1 className='sceneTitle'>scenics:</h1>
        </div>
    </div>
  )
}

export default Parallax;
