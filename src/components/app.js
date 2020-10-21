import React from "react";
import { connect } from "react-redux";

import app from "../stylesheets/app.module.scss";
import * as actions from "../store/actions";
import Wrapper from "./wrapper";
import Lister from "./lister";
import Detailer from "./detailer";

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   people: [],
    //   person: {}
    // };

    this.fetchPeople = this.fetchPeople.bind(this);
    this.fetchPerson = this.fetchPerson.bind(this);
  }

  async fetchPeople(e) {
    e.preventDefault();
    let url = "https://www.chinmayamission.com/wp-json/gcmw/v1/centres";
    this.props.handleGetAll(url);
  }

  async fetchPerson(url) {
    this.props.handleGetOne(url);
  }

  render() {
    return (
      <>
        <Wrapper handleFetch={this.fetchPeople} />

        <section className={app.people}>
          <Lister handleFetchOne={this.fetchPerson} />

          <div className={app.person}>
            <Detailer />
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = state => ({
  people: state.people,
  person: state.person
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleGetAll: payload => dispatch(actions.getAllPeople(payload)),
  handleGetOne: payload => dispatch(actions.getOnePerson(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
