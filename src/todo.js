import React, { Component } from 'react';
import './css/index.css';

class Header extends Component {
  render() {
    return (
      <header className='header'>受信箱</header>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>&copy;2019 Aire Project</footer>
    );
  }
}

class Sidearea extends Component {
  render() {
    return (
      <div className='side-area'></div>
    );
  }
}

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

function Todo() {
  return (
    <div className='wrap'>
      <Sidearea />
      <Mainarea />
    </div>
  );
}

export default Todo;