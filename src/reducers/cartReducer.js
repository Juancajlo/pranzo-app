import { types } from "../types/types";

const initialState = {
  itemNumber: 0,
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.increment:
      return {
        itemNumber: state.itemNumber + 1,
        items: [...action.payload],
      };

    case types.decrement:
      return {
        itemNumber: state.itemNumber - 1,
        items: [...action.payload],
      };

    case types.cartLogout:
      return {
        itemNumber: 0,
        items: [],
      };

    default:
      return state;
  }
};
