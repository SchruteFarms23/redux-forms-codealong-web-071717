import React, { Component } from 'react'

class CreateTodo extends Component {

  state={
    text:""
  }

  handleChange(event) {
  this.setState({
    text: event.target.value
  });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state.text,
    });
  }


  render() {
    console.log(this.props)
    console.log(this.state)
    return(
      <div>
      <form onSubmit={(event) => this.handleSubmit(event)} >
        <p>
        <label>add todo</label>
            <input type="text" onChange={(event) => this.handleChange(event)} />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
};


export default CreateTodo;
