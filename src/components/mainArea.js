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
      ],
      todoInputValue: ''
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

  onChangeTodoInput(event) {

    this.setState({ todoInputValue: event.target.value })
  }

  onClickAddButton(event) {

    let addItem = { label: this.state.todoInputValue };
    let todos = this.state.todos.slice();
    todos.push(addItem);

    this.setState({
      todos: todos,
      todoInputValue: ''
    });
  }

  render() {

    return (
      <div className='main-area'>
        <Header />
        <main className='list-area'>
          <div className='todo-input-area'>
            <input type="text" className='todo-input' placeholder='Todoを追加' value={this.state.todoInputValue} onChange={this.onChangeTodoInput.bind(this)} />
            <button className='add-button' onClick={this.onClickAddButton.bind(this)}>登録</button>
          </div>
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