import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      textAreaValue: "",
      count: 0

    }
    this.handleChange = this.handleChange.bind(this)
  }
  

  render() {
    return (
      <div className="container">
        <textarea rows="3" value={this.state.textAreaValue} onChange={this.handleChange} ></textarea>
        <div className="counter">{this.state.count}</div>
      </div>
    );
  }

  handleChange (event) {
    this.setState({
      textAreaValue: event.target.value,
      count: event.target.value.length
    })
  }
}

export default App;
