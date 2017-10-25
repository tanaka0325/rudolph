import { observable, action } from "mobx";

import TaskStore from "./TaskStore";

class TaskListStore {
  dateStore;
  @observable tasks = [];

  constructor(dateStore) {
    this.dateStore = dateStore;
  }

  @action
  addTodo(title) {
    this.tasks.push(new TaskStore(title));
  }
}

export default TaskListStore;
