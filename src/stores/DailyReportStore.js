import DateStore from "./DateStore";
import TaskListStore from "./TaskListStore";
import ReportStore from "./ReportStore";

class DailyReportStore {
  constructor() {
    this.dateStore = new DateStore(this);
    this.taskListStore = new TaskListStore(this);
    this.reportStore = new ReportStore(this);
  }

  moveDays(days) {
    this.dateStore.moveDays(days);
    this.taskListStore.fetch(this.dateStore.formatedDate);
    this.reportStore.fetch(this.dateStore.formatedDate);
  }
}

export default DailyReportStore;
