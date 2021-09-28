import { types } from "../types/types";

const initialState = {
  dolar: 0,
  bolivar: 0,
};

export const moneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.price:
      return {
        dolar: action.payload.dolar,
        bolivar: state.dolar * 20,
      };

    default:
      return state;
  }
};
