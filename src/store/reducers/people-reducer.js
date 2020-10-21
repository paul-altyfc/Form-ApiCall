let initialState = [];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "GETALL":
      console.log("I am in the people reducer", payload);
      return payload;

    default:
      return state;
  }
};
