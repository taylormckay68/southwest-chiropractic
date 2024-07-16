import React, { Component, useState } from 'react'
import router from './router';
import Navbar from './Components/Navbar/Navbar';
import MobileMenu from './Components/MobileMenu/MobileMenu';
import Info from './Components/Info/Info';
import Map from './Components/Map/Map';
import Footer from './Components/Footer/Footer';
import { OffClickWrapper } from './Components/MobileMenu/styled-components/MobileMenu';
import './App.css';

const App = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openServiceMenu, setOpenServiceMenu] = useState(false);
    return (
      <div className="App">
        <OffClickWrapper className='off-click-wrapper' open={openMenu} onClick={() => setOpenMenu(false)}/>
        <MobileMenu 
          open={openMenu} 
          serviceMenu={openServiceMenu}
          setOpenMenu={setOpenMenu}
          setOpenServiceMenu={setOpenServiceMenu}
        />
        <Navbar setOpenMenu={setOpenMenu}/>
        {router}
        <Info/>
        <Map/>
        <Footer/>
      </div>
    );
}

export default App;