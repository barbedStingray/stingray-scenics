import './App.css';
import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'


import StingrayScenics from './pages/homePage/StingrayScenics'
import GalleryPage from './pages/galleryPage/GalleryPage'
import GroupDisplay from './pages/groupDisplay/GroupDisplay'
import CommissionPage from './pages/commissionPage/CommissionPage';

import ContactView from './components/contactView/ContactView';
import { AnimatePresence, motion } from 'framer-motion';


function App() {

  const location = useLocation()

  return (
    <div className="stingrayScenics">

      <ContactView />

      <AnimatePresence mode='wait' initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<PageWrapper><StingrayScenics /></PageWrapper>} />
          <Route path='/gallery' element={<PageWrapper><GalleryPage /></PageWrapper>} />
          <Route path='/groupDisplay' element={<PageWrapper><GroupDisplay /></PageWrapper>} />
          <Route path='/commission' element={<PageWrapper><CommissionPage /></PageWrapper>} />
          {/* todo 404 path */}
        </Routes>
      </AnimatePresence>

    </div>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div> 
  )
}

export default App;