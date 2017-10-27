import React, { Component } from "react";
import { action } from "mobx";
import { observer } from "mobx-react";
import * as remark from "remark";
import * as reactRenderer from "remark-react";

@observer
class Report extends Component {
  @action
  handleOnChange = e => {
    this.props.store.reportStore.text = e.target.value;
  };

  @action
  handleOnSubmit = e => {
    e.preventDefault();
    if (this.newText !== "") {
      this.props.store.reportStore.addReport();
      console.info("sended report");
    }
  };

  render() {
    return (
      <div>
        <h2>Report</h2>
        <form onSubmit={this.handleOnSubmit}>
          <label>
            input:
            <textarea
              value={this.props.store.reportStore.text}
              onChange={this.handleOnChange}
            />
          </label>
          <button type="submit">send</button>
        </form>{" "}
        <div>
          preview:
          {
            remark()
              .use(reactRenderer)
              .processSync(this.props.store.reportStore.text).contents
          }
        </div>
      </div>
    );
  }
}

export default Report;
