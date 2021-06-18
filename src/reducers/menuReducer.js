import { types } from "../types/types";

const initialState = {
  menu: [],
};

export const menuReducer = (state = initialState.menu, action) => {
  switch (action.type) {
    case types.getMenu:
      return {
        menu: [...action.payload],
      };

    default:
      return state;
  }
};
