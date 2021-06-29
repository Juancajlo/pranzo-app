import { types } from "../types/types";

export const onAddItem = (item) => {
  return {
    type: types.increment,
    payload: item,
  };
};

export const onRemoveItem = (item) => {
  return {
    type: types.decrement,
    payload: item,
  };
};

export const cartLogout = () => {
  return {
    type: types.cartLogout,
  };
};
