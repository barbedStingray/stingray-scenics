import './App.css';
import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import StingrayScenics from './pages/homePage/StingrayScenics'
import GalleryPage from './pages/galleryPage/GalleryPage'
import GroupDisplay from './pages/groupDisplay/GroupDisplay'

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

  const location = useLocation()



  return (
    <div className="stingrayScenics">
      <Routes>
        <Route path='/' element={<StingrayScenics />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/groupDisplay' element={<GroupDisplay />} />
        {/* 404 path */}
      </Routes>
    </div>
  );
}

export default App;