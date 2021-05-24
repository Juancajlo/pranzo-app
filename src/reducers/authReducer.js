import { types } from "../types/types";

const initialState = {
  id: null,
  firstName: null,
  lastName: null,
  isAdmin: null,
  token: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        isAdmin: action.payload.isAdmin,
        token: action.payload.token,
      };

    case types.logout:
      return {
        id: null,
        firstName: null,
        lastName: null,
        isAdmin: null,
        token: null,
      };

    default:
      return state;
  }
};
