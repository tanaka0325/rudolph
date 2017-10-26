import { observable, action } from "mobx";

import firestoreClient from "../firebase/firestoreClient";
import TaskStore from "./TaskStore";

class TaskListStore {
  dateStore;
  db;
  @observable tasks = [];

  constructor(dateStore) {
    this.dateStore = dateStore;
    this.db = new firestoreClient("tasks");
    this.fetchTasks();
  }

  @action
  async addTask(title) {
    this.tasks.push(new TaskStore(title));
    // const docRef = await this.db.add(title);
  }

  @action
  async fetchTasks() {
    const qs = await this.db.fetch();
    qs.forEach(doc => {
      this.tasks.push(new TaskStore(doc.data().title));
    });
  }
}

export default TaskListStore;
