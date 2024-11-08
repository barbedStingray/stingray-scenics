import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NavBar from './components/navigationBar/NavBar'

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



  return (
    <div className="stingrayScenics">

      <NavBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* 404 path */}
      </Routes>

    </div>
  );
}

export default App;