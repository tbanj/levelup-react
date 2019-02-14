import React from 'react';
import uuid from 'uuid'; // this package allows us create unqiue IDs which we will use for our todos

export default class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      todoText: '',
    };

    this.updateTodoText = this.updateTodoText.bind(this);
    this.addNewTodo = this.addNewTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  updateTodoText(event) {
    this.setState({ todoText: event.target.value });
  }

  addNewTodo(event) {
    const newTodo = {
      id: uuid(),
      name: this.state.todoText,
    };

    const newTodoList = this.state.todos.concat(newTodo);
    this.setState({ todos: newTodoList, todoText: '' });
  }

  deleteTodo(id) {
    const updatedTodo = this.state.todos.filter(function(todo) {
      return todo.id !== id;
    });

    this.setState({ todos: updatedTodo });
  }

  render() {
    return (
      <div>
        <h1>My Todo List.</h1>
        <input
          type="text"
          name="todoText"
          value={this.state.todoText}
          placeholder="Enter a new Todo"
          onChange={this.updateTodoText}
        />
        <button onClick={this.addNewTodo}>Add new Todo</button>
        {this.state.todos.length === 0 ? (
          <p>Please add some todos ☹️</p>
        ) : (
          <ol>
            {this.state.todos.map((todo, index) => {
              return (
                <div key={index}>
                  <li>{todo.name}</li>
                  <button onClick={event => this.deleteTodo(todo.id)}>
                    Delete
                  </button>
                </div>
              );
            })}
          </ol>
        )}
      </div>
    );
  }
}
