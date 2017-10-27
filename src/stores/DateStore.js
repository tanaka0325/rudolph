import { observable, action } from "mobx";
import moment from "moment";

class DateStore {
  dailyReportStore;
  date = moment().locale("ja");
  format = "YYYY-MM-DD";
  @observable formatedDate;

  constructor(dailyReportStore) {
    this.dailyReportStore = dailyReportStore;
    this.formatedDate = this.date.format(this.format);
  }

  @action
  moveDays(days) {
    this.date.add(days, "days");
    this.formatedDate = this.date.format(this.format);
  }
}

export default DateStore;
