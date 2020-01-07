import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

class Mainarea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { label: 'Todo1' },
        { label: 'Todo2' },
        { label: 'Todo3' },
        { label: 'Todo4' },
      ]
    }
  }

  renderTodoItems() {
    let todoItemDom = [];
    for (var i = 0; i < this.state.todos.length; i++) {
      let todoItem = <li className='todo-list-item' key={'item-' + i}>{this.state.todos[i].label}</li>;
      todoItemDom.push(todoItem);
    }
    return todoItemDom;
  }

  render() {

    return (
      <div className='main-area'>
        <Header />
        <main className='list-area'>
          <ul className='todo-list'>
            {this.renderTodoItems()}
          </ul>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Mainarea;