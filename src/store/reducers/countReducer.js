const countReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "PLUS_COUNT":
      return [...action.payload];

    case "MINUS_COUNT":
      return [...action.payload];
    default:
      return state;
  }
};

export default countReducer;

const INITIAL_STATE = [];
