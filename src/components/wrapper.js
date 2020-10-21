import React from "react";
import { connect } from "react-redux";

class Wrapper extends React.Component {
  render() {
    return (
      <a href="#" onClick={this.props.handleFetch}>
        Get The People
      </a>
    );
  }
}

export default Wrapper;
