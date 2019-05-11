import React, { Component } from 'react'
import router from './router';
import Navbar from './Components/Navbar/Navbar';
import MobileMenu from './Components/MobileMenu/MobileMenu';
import Info from './Components/Info/Info';
import Map from './Components/Map/Map';
import Footer from './Components/Footer/Footer';
import { OffClickWrapper } from './Components/MobileMenu/styled-components/MobileMenu';
import './App.css';

export default class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      menu: false,
      serviceMenu: false,
    }
  }

  toggleMenu = (menuType) => {
    if(menuType === 'menu' && this.state.menu) {
      this.setState({[
        menuType]: !this.state[menuType],
        serviceMenu: false
      })
    } else{
      this.setState({[menuType]: !this.state[menuType]})
    }
  }

  render() {
    return (
      <div className="App">
        <OffClickWrapper open={this.state.menu} onClick={() => this.toggleMenu('menu')}/>
        <MobileMenu 
          open={this.state.menu} 
          serviceMenu={this.state.serviceMenu}
          toggleMenu={this.toggleMenu}/>
        <Navbar toggleMenu={this.toggleMenu}/>
        {router}
        <Info/>
        <Map/>
        <Footer/>
      </div>
    );
  }
}

