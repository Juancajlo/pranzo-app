import axios from "axios";

import { types } from "../types/types";
import { DATABASE_URL } from "../config/";

export const startGettingMenu = () => {
  return async (dispatch) => {
    try {
      const request = await axios.get(`${DATABASE_URL}/dishes/`);

      if (request.status === 200) {
        const menu = request.data.dishes;
        dispatch(getMenu(menu));
      } else {
        console.log("Menu request status diferente al 200");
      }
    } catch (e) {
      throw new Error("Error al recibir el menu");
    }
  };
};

export const getMenu = (menu) => {
  return {
    type: types.getMenu,
    payload: menu,
  };
};
