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

export const increment = () => {
  return { type: "INCREMENT" };
};
export const decrement = () => {
  return { type: "DECREMENT" };
};
