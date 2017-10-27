import { observable, action } from "mobx";

import firestoreClient from "../firebase/firestoreClient";

const generate = require("nanoid/generate");
const url = require("nanoid/url");

class ReportStore {
  dailyReportStore;
  db;
  id = generate(url, 12);
  created_at;
  @observable text = "";

  constructor(dailyReportStore) {
    this.dailyReportStore = dailyReportStore;
    this.db = new firestoreClient("reports");
    this.fetch(dailyReportStore.dateStore.formatedDate);
  }

  @action
  async addReport() {
    const report = {
      id: this.id,
      text: this.text,
      created_at: new Date()
    };
    console.info(report);
    const docRef = await this.db.add(
      this.dailyReportStore.dateStore.formatedDate,
      report
    );
    console.debug(docRef);
  }

  @action
  async fetch(date) {
    this.text = "";
    const qs = await this.db.fetch(date);
    qs.forEach(doc => {
      this.text = doc.data().text;
    });
  }
}

export default ReportStore;
