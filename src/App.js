import React, { Component } from 'react';

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Mainpage from './components/pages/mainPage';
import HeroImage from './components/heroImage/heroimage';


// include style
import './Assets/css/main.min.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* print Header */}
          <Header />
        {/* print Heroimage */}
          <HeroImage />

        {/* print Content */}
          <Mainpage />

        {/* print footer */}
          <Footer />
      </div>
      );
    }
  
}

export default App;
