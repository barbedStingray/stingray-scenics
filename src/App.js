import './App.css';
import React, { useEffect, useRef } from 'react';
import hobbiton from './images/hobbiton.jpg'
import stingrayIcon from './images/DGreenIcon.png'


function App() {

  // Scenic Square Photos
  const photos = [
    'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/squareTwelve.jpg',
    'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/squareOne.jpg',
    'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/squareTwo.jpg',
    'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/squareThree.jpg',
    'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/squareFour.jpg',
    'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/squareFive.jpg',
    'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/squareSix.jpg',
    'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/squareSeven.jpg',
    'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/squareEight.jpg',
    'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/squareNine.jpg',
    'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/squareTen.jpg',
    'http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/squareEleven.jpg'
  ];

  const bannerRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      // Adjust the translateY value for a parallax effect
      if (bannerRef.current) {
        bannerRef.current.style.transform = `translateY(${scrollPosition * 0.2}px)`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <div className="stingrayScenics">

      <div className='navigation'>
        <h1 className='title'>Stingray Scenics</h1>
        <div className='navOptions'>
          <p>Home</p>
          <p>Models</p>
          <p>Terrain</p>
          <p>Reviews</p>
        </div>
      </div>

      <img className='bannerImage' ref={bannerRef} src={hobbiton} alt='banner image' />

      <div className='scrollContent'>
        <img className='stingrayIcon' src={stingrayIcon} alt='brandIcon' />

        <div className='introduction'>
          <h2>Introduction</h2>
          <p>Hello! I'm Ben!</p>
        </div>

        <div className='scenicOptions'>
          <div className='scenicItem'><h2>Models</h2></div>
          <div className='scenicItem'><h2>Terrain</h2></div>
          <div className='scenicItem'><h2>Stripping</h2></div>
        </div>
      </div>

      <div className='copyright'>
        <p>@barbed_stingray 2024</p>
      </div>


    </div>
  );
}

export default App;
