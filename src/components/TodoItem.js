import React, { Component } from "react";

export default class TodoItem extends Component {
  state={
    input:""
  }
  handleChange=(e)=>{
    this.setState({
      input:e.target.value
    })
  }
//setp 3
  addToDo=()=>{
    this.props.add({text:this.state.input,id:Date.now(),isCompleted:false})
    this.setState({
      input:""
    })
  }

  render() {
    return (
      <div>
        <div className="container request">
          <div className="col request-content">
            <h1>To-Do App!</h1>
            <p>Add New To-Do</p>
            <input
              type="text"
              className="form-control input-val"
              placeholder="Enter new task"
              value={this.state.input}
              onChange={this.handleChange}
            />
            <button
              type="button"
              id="add-button"
              className="btn btn-primary"
              onClick={this.addToDo}
            >
              Add
            </button>
          </div>
        </div>
        <div className="response-title">
                <h3>Lets get some work done!</h3>
                <hr />
        </div>
      </div>
    );
  }
}
