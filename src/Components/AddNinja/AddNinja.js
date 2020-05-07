import React, { Component } from 'react';

export default class AddNinja extends Component {

    state = {
      name: 'j',
      age: 'j',
      belt: 'j',
    };
  

  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
        })}

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'> Name: </label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label htmlFor='age'> Age: </label>
          <input type='text' id='age' name='age' onChange={this.handleChange} />
          <br />
          <br />
          <label htmlFor='belt'> Belt: </label>
          <input
            type='text'
            id='belt'
            name='belt'
            onChange={this.handleChange}
          />
          <br />
          <br />
          <button>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
