import React from "react";
import { connect } from "react-redux";

class Lister extends React.Component {
  render() {
    return (
      <ul>
        {this.props.people.map((result, i) => (
          // console.log(result)
          // <li onClick={() => this.props.handleFetchOne(result.url)} key={i}>
          <li onClick={() => this.props.handleFetchOne(result)} key={i}>
            {result.name}
          </li>
        ))}
      </ul>
    );
  }
}
const mapStateToProps = state => ({
  people: state.people
});

export default connect(mapStateToProps)(Lister);
