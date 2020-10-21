// Store
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import peopleReducer from "./reducers/people-reducer";
import personReducer from "./reducers/person-reducer";

let reducers = combineReducers({
  people: peopleReducer,
  person: personReducer
});

const store = () =>
  createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
