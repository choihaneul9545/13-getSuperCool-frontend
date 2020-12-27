const countReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, number: state.number + 1 };
    case "DECREMENT":
      return { ...state, number: state.number - 1 };
    default:
      return state;
  }
};

export default countReducer;

const INITIAL_STATE = { number: 1 };
