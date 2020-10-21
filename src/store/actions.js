// import { connect } from "react-redux";
import superagent from "superagent";

export const getAllPeople = url => dispatch => {
  return superagent.get(url).then(data => {
    console.log(data.body)
    console.log("I am in people actions", data.body);
    dispatch(getData(data.body));
  });
};

const getData = payload => {
  return {
    type: "GETALL",
    payload: payload
  };
};

// export const getOnePerson = url => dispatch => {
//   console.log(url)
//   return superagent.get(url).then(data => {
//     dispatch(getOne(data.body));
//   });
// };

export const getOnePerson = record => dispatch => {
  console.log(record)
  // return superagent.get(url).then(data => {
  //   dispatch(getOne(data.body));
  // });
  dispatch(getOne(record))
};


const getOne = payload => {
  console.log(payload);
  return {
    type: "GETONE",
    payload: payload
  };
};
