import React from 'react'
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import './components/TodoComponents/Todo.css'


const todo = [];


// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTodo: todo
    }
  }

  addTodo = newTodo => {
    const newTodoItem = {
      task: newTodo,
      id: Date.now(),
      completed: false
    }

    this.setState({
      currentTodo: [...this.state.currentTodo, newTodoItem]
    })
  }

  toggleTodo = id => {
    const newList = this.state.currentTodo.map(item => {
      if (item.id === id) {
        const newObj = {
          ...item,
          completed: !item.completed
        };
        return newObj;
      } else {
        return item;
      }
    })

    this.setState({currentTodo: newList});
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div className="App">
          <div className="header">
            <h1>Todo List</h1>
          </div>
          <TodoList
            todo={this.state.currentTodo}
            toggleTodo={this.toggleTodo}
          />
          <TodoForm addNewItem={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;
