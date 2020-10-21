import { connect } from "react-redux";
import superagent from "superagent";

export const getAllPeople = url => dispatch => {
  return superagent.get(url).then(data => {
    console.log("I am in people actions", data.body.results);
    dispatch(getData(data.body.results));
  });
};

const getData = payload => {
  return {
    type: "GETALL",
    payload: payload
  };
};

export const getOnePerson = url => dispatch => {
  return superagent.get(url).then(data => {
    console.log(data.body);
    dispatch(getOne(data.body));
  });
};

const getOne = payload => {
  console.log(payload);
  return {
    type: "GETONE",
    payload: payload
  };
};
