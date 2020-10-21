import React from "react";
import { connect } from "react-redux";

class Detailer extends React.Component {
  render() {
    return Object.keys(this.props.person).map((key, i) => (
      <div key={i}>
        <span>{key}:</span>
        <span>{this.props.person[key]}</span>
      </div>
    ));
  }
}
const mapStateToProps = state => ({
  person: state.person
});

export default connect(mapStateToProps)(Detailer);
