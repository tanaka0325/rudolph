import { observable } from "mobx";

class TaskStore {
  id = Math.random();
  @observable title;

  constructor(title) {
    this.title = title;
  }
}

export default TaskStore;
