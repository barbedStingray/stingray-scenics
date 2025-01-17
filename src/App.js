import './App.css';
import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import StingrayScenics from './pages/homePage/StingrayScenics'
import GalleryPage from './pages/galleryPage/GalleryPage'
import GroupDisplay from './pages/groupDisplay/GroupDisplay'
import CommissionPage from './pages/commissionPage/CommissionPage';

function App() {

  const location = useLocation()



  return (
    <div className="stingrayScenics">
      <Routes>
        <Route path='/' element={<StingrayScenics />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/groupDisplay' element={<GroupDisplay />} />
        <Route path='/commission' element={<CommissionPage />} />
        {/* todo 404 path */}
      </Routes>
    </div>
  );
}

export default App;