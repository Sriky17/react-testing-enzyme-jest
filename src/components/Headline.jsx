import { Typography } from "@material-ui/core";
import React, { Component } from "react";

class Headline extends Component {
  state = {};
  constructor(props) {
    super(props);
    console.log("Hello");
  }
  render() {
    const { header, desc } = this.props;
    if (!header) return null;

    return (
      <div data-test="headlineComp">
        <Typography data-test="header" variant="h3">
          {header}
        </Typography>
        <p data-test="desc">{desc}</p>
      </div>
    );
  }
}

export default Headline;
