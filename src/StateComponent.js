import React from 'react';

class StateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resetCount = this.resetCount.bind(this);

    this.state = {
      count: 0,
      task: 'I am an input element',
    };
  }

  handleClick(event) {
    this.setState({ count: this.state.count + 1 });
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ task: value });
  }

  resetCount(event) {
    this.setState({ count: 0, task: '' });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <button onClick={this.resetCount}>Reset</button>
        <p>I have been clicked {this.state.count} times</p>

        <input
          type="text"
          name="task"
          placeholder="Type something"
          onChange={this.handleChange}
          value={this.state.task}
        />

        <p>{this.state.task}</p>
      </div>
    );
  }
}

export default StateComponent;
