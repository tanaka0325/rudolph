import { observable, action } from "mobx";

import firestoreClient from "../firebase/firestoreClient";

const generate = require("nanoid/generate");
const url = require("nanoid/url");

class ReportStore {
  dateStore;
  db;
  id = generate(url, 12);
  @observable text = "";

  constructor(dateStore) {
    this.dateStore = dateStore;
    this.db = new firestoreClient("reports");
  }

  @action
  async addReport(text) {
    const report = {
      id: this.id,
      text
    };
    const docRef = await this.db.add(this.dateStore.formatedDate, report);
    console.debug(docRef);
  }
}

export default ReportStore;
