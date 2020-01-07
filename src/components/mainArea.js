import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

class Mainarea extends Component {
  render() {
    return (
      <div className='main-area'>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Mainarea;