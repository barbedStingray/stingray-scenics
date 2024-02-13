import './App.css';
import { motion as m, AnimatePresence } from 'framer-motion';
import greenStingray from './images/DGreenIcon.png';
import vinesBackground from './images/vines.jpg';
import LoremIpsum from './components/loremIpsum/loremIpsum.jsx';
import TitlePage from './components/ParallaxTitle/TitlePage.jsx';
import ModelPage from './components/ModelPage/ModelPage.jsx';
import TerrainPage from './components/TerrainPage/TerrainPage.jsx';
import Contacts from './components/Contacts/Contacts.jsx';



function App() {



  return (
    <div className="stingrayScenics">

      <TitlePage />

      <div className='intro'>
        <p className='wildGrowth'>Hello!</p>
        <img className='introPhoto'
          src='http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/y1qjdmbyxlo5lzfuqmsq.jpg'
        />
        <p>Welcome to stingray Scenics! My name is Ben, and this site was born out of a passion for table top gaming.</p>
      </div>

      <ModelPage />

      <div className='modelDisplay'>
        <img className='modelPhoto'
          src='http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/all5_zfhvce.jpg'
        />
        <img className='modelPhoto'
          src='http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/ebemptmke7olrzlkxfo8.jpg'
        />
        <img className='modelPhoto'
          src='http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/zymnrjjv4w0gupqz8uvc.jpg'
        />
        <img className='modelPhoto'
          src='http://res.cloudinary.com/dzh1qe1zp/image/upload/v1704915035/IMG_4466_zqgttj.jpg'
        />


      </div>

      <TerrainPage />


      <Contacts />







    </div>
  );
}

export default App;
