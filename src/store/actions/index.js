export const addCart = item => {
  return {
    type: "ADD_ITEM",
    payload: item
  };
};

export const deleteCart = items => {
  return {
    type: "DELETE_ITEM",
    payload: items
  };
};

export const plusCount = items => {
  return {
    type: "PLUS_COUNT",
    payload: items
  };
};

export const minusCount = items => {
  return {
    type: "MINUS_COUNT",
    payload: items
  };
};
