import { types } from "../types/types";

const initialState = {
  id: null,
  firstName: null,
  lastName: null,
  isAdmin: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        isAdmin: action.payload.isAdmin,
      };

    case types.logout:
      return {
        id: null,
        firstName: null,
        lastName: null,
        isAdmin: null,
      };

    default:
      return state;
  }
};
