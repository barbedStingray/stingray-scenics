import './App.css';
import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';


// component imports
import TitlePage from './components/ParallaxTitle/TitlePage.jsx';
import ParallaxPage from './components/ParallaxPage/ParallaxPage.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import IntroSquare from './components/IntroSquare/IntroSquare.jsx';
import ModelDisplay from './components/ModelDisplay/ModelDisplay.jsx';



function App() {

    // index for the photos array, starts at position 0
    const [index, setIndex] = useState(0);

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
  
  
    // functions for setting the index of the array
    function next() {
      // console.log(`i clicked next`);
      if (index === photos.length - 1) {
        setIndex(0); // reset your index
        return
      } else {
        setIndex(index + 1); // increment your index
      }
      // console.log(index);
    }
    function prev() {
      // console.log(`i clicked prev`);
      if (index === 0) {
        setIndex(photos.length - 1); // reset index
        return
      } else {
        setIndex(index - 1); // increment index
      }
      // console.log(index);
    }
  
  

  return (
    <div className="stingrayScenics">

      <TitlePage />

      <IntroSquare />

      <ParallaxPage title='Models' />

      <ModelDisplay />

      <ParallaxPage title='Terrain'/>

      <div className='slideshow'>
        <img
          className='slideImage'
          alt='Scenic Square'
          src={photos[index]}
        />
        <div className='buttons'>
          <button onClick={prev} className='prevButton'>Prev</button>
          <button onClick={next} className='nextButton'>Next</button>
        </div>
      </div>

      <ParallaxPage title=''/>


      <Contacts />

    </div>
  );
}

export default App;
