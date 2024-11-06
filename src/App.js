import './App.css';
import React, { useEffect, useRef, useState } from 'react'
import hobbiton from './images/hobbiton.jpg'
import stingrayIcon from './images/DGreenIcon.png'
import oneRing from './images/oneRing.png'


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

  const bannerRef = useRef(null)
  const introRef = useRef(null)
  const stingrayRef = useRef(null)


  const parallaxElements = [
    { ref: bannerRef, speed: 0.185, direction: 'down' },
    { ref: introRef, speed: 0.3, direction: 'up' },
    { ref: stingrayRef, speed: 0.5, direction: 'up' },
  ];

  const scenicContainerRef = useRef(null); // New ref for scenic options
  const [opacity, setOpacity] = useState(0); // State to track opacity
  const oneRingRef = useRef(null);
  const [rotation, setRotation] = useState(0);

  const [pageScroll, setPageScroll] = useState(true)
  const [scrollEnabled, setScrollEnabled] = useState(false)








  const handleParallax = () => {
    const scrollPosition = window.scrollY
    // Loop through each element and apply the parallax effect
    parallaxElements.forEach(({ ref, speed, direction }) => {
      if (ref.current) {
        // If the direction is 'up', we apply negative translation, otherwise, apply positive
        const translation = scrollPosition * speed
        ref.current.style.transform = `translateY(${direction === 'up' ? -translation : translation}px)`
      }
    })
    // Fade effect for oneRing based on scroll position
    if (scenicContainerRef.current) {
      const scenicOptionsRect = scenicContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calculate the center of the `scenicOptions` div
      const scenicOptionsCenter = (scenicOptionsRect.top + scenicOptionsRect.bottom) / 2;
      // Calculate the middle of the viewport
      const windowCenter = windowHeight / 2;
      // Calculate opacity based on how close the center of the div is to the middle of the viewport
      const distanceFromCenter = Math.abs(windowCenter - scenicOptionsCenter);
      const newOpacity = Math.min(Math.max(1 - distanceFromCenter / windowHeight, 0), 1);
      setOpacity(newOpacity);
    }
  }

  const preventPageScroll = (event) => {
    if (!pageScroll) {
      event.preventDefault()
    }
  }


  useEffect(() => {
    // Add event listener to handle scroll based on pageScroll state
    const scrollListener = pageScroll ? handleParallax : preventPageScroll;

    window.addEventListener('scroll', scrollListener, { passive: false });

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [pageScroll]);



  // useEffect(() => {
  //   // Add event listener to handle scroll
  //   window.addEventListener('scroll', handleParallax)
  //   // Cleanup event listener on unmount
  //   return () => window.removeEventListener('scroll', handleParallax)
  // }, [parallaxElements])


  // ORIGINAL NORMAL PARALLAX EFFECT
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY
  //     // Loop through each element and apply the parallax effect
  //     parallaxElements.forEach(({ ref, speed, direction }) => {
  //       if (ref.current) {
  //         // If the direction is 'up', we apply negative translation, otherwise, apply positive
  //         const translation = scrollPosition * speed
  //         ref.current.style.transform = `translateY(${direction === 'up' ? -translation : translation}px)`
  //       }
  //     })
  //   }
  //   // Add event listener to handle scroll
  //   window.addEventListener('scroll', handleScroll)
  //   // Cleanup event listener on unmount
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])



  const containerStyle = {
    overflow: scrollEnabled ? 'scroll' : 'hidden',
  }




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
        <img className='stingrayIcon' src={stingrayIcon} alt='brandIcon' ref={stingrayRef} />

        <div className='introduction' ref={introRef}>
          <h2>Introduction</h2>
          <p>Hello! I'm Ben!</p>
        </div>


        {/* Scenic options */}
        <div className='scenicContainer' style={containerStyle} ref={scenicContainerRef}>
            <img className='oneRing' src={oneRing} alt='the one ring' style={{ opacity: opacity }} />
          <div className='scenicOptions'>
            <div className='scenicItem'><h1>Models</h1></div>
            <div className='scenicItem'><h1>Paints</h1></div>
            <div className='scenicItem'><h1>Terrain</h1></div>
            <div className='scenicItem'><h1>About</h1></div>
          </div>
        </div>



      </div>

      <div className='copyright'>
        <p>@barbed_stingray 2024</p>
      </div>


    </div>

  );
}

export default App;
