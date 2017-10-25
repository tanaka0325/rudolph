import { observable, action } from "mobx";

import TaskStore from "./TaskStore";

class TaskListStore {
  @observable tasks = [];

  @action
  addTodo(title) {
    console.log("addTodo");
    this.tasks.push(new TaskStore(title));
  }
}

export default TaskListStore;
