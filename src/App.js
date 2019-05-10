import React from 'react';
import router from './router';
import Navbar from './Components/Navbar/Navbar';
import Info from './Components/Info/Info';
import Map from './Components/Map/Map';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Navbar/>
        {router}
        <Info/>
        <Map/>
        <Footer/>
    </div>
  );
}

export default App;
