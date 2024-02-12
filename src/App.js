import './App.css';
import { motion as m, AnimatePresence } from 'framer-motion';
import greenStingray from './images/DGreenIcon.png';
import vinesBackground from './images/vines.jpg';
import LoremIpsum from './components/loremIpsum/loremIpsum.jsx';
import Parallax from './components/parallax/Parallax.jsx';


function App() {



  return (
    <div className="stingrayScenics">

      <Parallax />

      <div className='bodyOne'>
        <LoremIpsum />
      </div>
      {/* <div className='bodyOne'>
        <LoremIpsum />
      </div> */}
      <div className='parallax'>
        {/* picture background */}
        <img src={vinesBackground} className='background' alt="background of vines" />
        <div></div>
        <img src={greenStingray} className='foreground logo' alt='stingrayScenics Logo' />
        <div className='title'>
          <h1 >Stingray</h1>
          <h1 >scenics.</h1>
        </div>
      </div>
      <div className='bodyOne'>
        <LoremIpsum />
      </div>
      <div className='parallax'>
        {/* picture background */}
        <img src={vinesBackground} className='background' alt="background of vines" />
        <div></div>
        <img src={greenStingray} className='foreground logo' alt='stingrayScenics Logo' />
        <div className='title'>
          <h1 >Stingray</h1>
          <h1 >scenics.</h1>
        </div>
      </div>






    </div>
  );
}

export default App;
