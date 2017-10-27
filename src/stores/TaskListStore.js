import { observable, action, toJS } from "mobx";

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
    const task = new TaskStore({ title });
    const docRef = await this.db.add(this.dateStore.formatedDate, toJS(task));
  }

  @action
  async fetchTasks(date) {
    const qs = await this.db.fetch(this.dateStore.formatedDate);
    qs.forEach(doc => {
      this.tasks.push(new TaskStore(doc.data()));
    });
  }
}

export default TaskListStore;
