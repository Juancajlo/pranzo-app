import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { types } from "../types/types";
import { DATABASE_URL } from "../config/";

export const startRegister = (firstName, lastName, email, password) => {
  return async (dispatch) => {
    try {
      await axios.post(`${DATABASE_URL}/auth/register`, {
        firstName,
        lastName,
        email,
        password,
      });
    } catch (e) {
      throw new Error("Usuario ya existente");
    }
  };
};

export const startLogin = (email, password) => {
  return async (dispatch) => {
    try {
      const request = await axios.post(`${DATABASE_URL}/auth/login`, {
        email,
        password,
      });

      if (request.status === 200) {
        const user = request.data.user;
        await AsyncStorage.setItem("user", JSON.stringify(user));

        dispatch(
          login(
            request.data.user.id,
            request.data.user.firstName,
            request.data.user.lastName,
            request.data.user.isAdmin
          )
        );
      } else {
        console.log("Login status diferente al 200");
      }
    } catch (e) {
      throw new Error("Usuario o contraseña incorrecta");
    }
  };
};

export const login = (id, firstName, lastName, isAdmin) => {
  return {
    type: types.login,
    payload: {
      id,
      firstName,
      lastName,
      isAdmin,
    },
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    try {
      await AsyncStorage.removeItem("id");
      await AsyncStorage.removeItem("admin");
      await AsyncStorage.removeItem("user");
      dispatch(logout());
    } catch (e) {
      throw new Error("Ups, algo salió mal al cerrar sesión");
    }
  };
};

export const logout = () => {
  return {
    type: types.logout,
  };
};
