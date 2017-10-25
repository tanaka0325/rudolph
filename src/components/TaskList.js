import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class TaskList extends Component {
  @observable newTaskTitle = "";

  @action
  handleOnSubmit = e => {
    e.preventDefault();
    if (this.newTaskTitle !== "") {
      this.props.store.addTodo(this.newTaskTitle);
      this.newTaskTitle = "";
    }
  };

  @action
  handleOnChange = e => {
    this.newTaskTitle = e.target.value;
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.newTaskTitle}
            onChange={this.handleOnChange}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.props.store.tasks.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;