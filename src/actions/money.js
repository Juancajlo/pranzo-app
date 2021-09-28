import { types } from "../types/types";
import { DOLAR_URL } from "../config/";

export const startGettingPrice = () => {
  return async (dispatch) => {
    try {
      let request = await fetch(`${DOLAR_URL}`, {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
        },
      });

      let requestJSON = await request.json();
      let dolar = requestJSON.USD.transferencia;

      dispatch(gettingPrice(dolar));
    } catch (e) {
      throw new Error("Error al obtener datos del dolar");
    }
  };
};

export const gettingPrice = (dolar) => {
  return {
    type: types.price,
    payload: { dolar },
  };
};
