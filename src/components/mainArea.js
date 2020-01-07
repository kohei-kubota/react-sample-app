import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

class Mainarea extends Component {
  render() {
    const todos = [
      { label: 'Todo1' },
      { label: 'Todo2' },
    ]

    let todoItemDom = [];
    for (var i = 0; i < todos.length; i++) {
      let todoItem = <li className='todo-list-item' key={'item-' + i}>{todos[i].label}></li>;
      todoItemDom.push(todoItem);
    }
    return (
      <div className='main-area'>
        <Header />
        <main className='list-area'>
          <ul className='todo-list'>
            {todoItemDom}
          </ul>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Mainarea;