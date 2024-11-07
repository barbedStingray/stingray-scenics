import './App.css';
import React, { useEffect, useRef, useState } from 'react'
import hobbiton from './images/hobbiton.jpg'
import stingrayIcon from './images/DGreenIcon.png'
import oneRing from './images/oneRing.png'
import mordor from './images/mordor.png'

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

  const appContainerRef = useRef(null)
  const scenicOptionsRef = useRef(null)
  const bannerRef = useRef(null)
  const introRef = useRef(null)
  const stingrayRef = useRef(null)

  const parallaxElements = [
    { ref: bannerRef, speed: 0.21, direction: 'down' },
    { ref: introRef, speed: 0.3, direction: 'up' },
    { ref: stingrayRef, speed: 0.75, direction: 'up' },
  ];
  const [opacity, setOpacity] = useState(0); // State to track opacity



  const handleParallax = () => {
    const scrollPosition = appContainerRef.current.scrollTop
    // Loop through each element and apply the parallax effect
    parallaxElements.forEach(({ ref, speed, direction }) => {
      if (ref.current) {
        // If the direction is 'up', we apply negative translation, otherwise, apply positive
        const translation = scrollPosition * speed
        ref.current.style.transform = `translateY(${direction === 'up' ? -translation : translation}px)`
      }
    })
    // Fade effect for oneRing based on scroll position
    if (scenicOptionsRef.current) {
      const scenicOptionsRect = scenicOptionsRef.current.getBoundingClientRect()
      const containerHeight = appContainerRef.current.clientHeight
      const scenicOptionsCenter = (scenicOptionsRect.top + scenicOptionsRect.bottom) / 2
      const containerCenter = containerHeight / 2
      const distanceFromCenter = Math.abs(containerCenter - scenicOptionsCenter)
      const newOpacity = Math.min(Math.max(1 - distanceFromCenter / containerHeight, 0), 1)
      setOpacity(newOpacity)
    }
  }
  useEffect(() => {
    const appContainer = appContainerRef.current
    // Event listener appContainer scroll
    appContainer.addEventListener('scroll', handleParallax)
    // Cleanup event listener on unmount
    return () => {
      appContainer.removeEventListener('scroll', handleParallax)
    }
  }, [parallaxElements])





  return (

    <div className='appContainer' ref={appContainerRef}>

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
          <img className='stingrayIcon' src={stingrayIcon} alt='brandIcon' ref={stingrayRef} />

          <div className='introduction' ref={introRef}>
            <h2>Introduction</h2>
            <p>Hello! I'm Ben!</p>
          </div>

          {/* Scenic options */}
            <img className='oneRing' src={oneRing} alt='the one ring' style={{ opacity: opacity }} />
            <div className='scenicOptions' ref={scenicOptionsRef}>
              <div className='scenicItem'><h1>Models</h1></div>
              <div className='scenicItem'><h1>Paints</h1></div>
              <div className='scenicItem'><h1>Terrain</h1></div>
              <div className='scenicItem'><h1>About</h1></div>
          </div>

        </div>

        <div className='copyright'>
          <p>@barbed_stingray 2024</p>
        </div>


      </div>
    </div>

  );
}

export default App;
