const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "DELETE_ITEM":
      return [...action.payload];
    default:
      return state;
  }
};

export default cartReducer;

const INITIAL_STATE = [
  {
    apply_on: ["LIPS"],
    category: "COLOR",
    colors: [
      {
        color_id: 1,
        color_name: "RED"
      },
      {
        color_id: 2,
        color_name: "PINK"
      },
      {
        color_id: 3,
        color_name: "HOTPINK"
      }
    ],
    model_image: "https://i.ibb.co/BjzbZXF/2020-10-26-9-56-50.png",
    name: "(S)LIP LIP FLUID",
    price: 18,
    product_id: 1,
    product_image: "https://i.ibb.co/XyM0DfF/Output-2.png"
  }
];
