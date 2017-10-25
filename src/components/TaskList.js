import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import Task from "./Task";

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
        <h2>{this.props.dateStore.localDateString} TaskList</h2>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.newTaskTitle}
            onChange={this.handleOnChange}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.props.store.tasks.map(task => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
