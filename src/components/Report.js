import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import * as remark from "remark";
import * as reactRenderer from "remark-react";

@observer
class Report extends Component {
  @observable newText = "# hello world";

  handleOnChange = e => {
    this.newText = e.target.value;
  };

  @action
  handleOnSubmit = e => {
    e.preventDefault();
    if (this.newText !== "") {
      console.debug("post report");
      this.newText = "";
    }
  };

  render() {
    return (
      <div>
        <h2>Report</h2>
        <form onSubmit={this.handleOnSubmit}>
          <label>
            Name:
            <textarea value={this.newText} onChange={this.handleOnChange} />
          </label>
          <button type="submit">send</button>
        </form>{" "}
        <div>
          {
            remark()
              .use(reactRenderer)
              .processSync(this.newText).contents
          }
        </div>
      </div>
    );
  }
}

export default Report;
