import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { types } from "../types/types";
import { DATABASE_URL } from "../config/";

export const startRegister = (firstName, lastName, email, password) => {
  return async (dispatch) => {
    await axios.post(`${DATABASE_URL}/auth/register`, {
      firstName,
      lastName,
      email,
      password,
    });
  };
};

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const request = await axios.post(`${DATABASE_URL}/auth/login`, {
      email,
      password,
    });

    const token = request.data.token;
    const admin = request.data.user.isAdmin;

    await AsyncStorage.setItem("token", JSON.stringify(token));
    await AsyncStorage.setItem("admin", JSON.stringify(admin));

    dispatch(
      login(
        request.data.user.id,
        request.data.user.firstName,
        request.data.user.lastName,
        request.data.user.isAdmin,
        request.data.token
      )
    );
  };
};

export const login = (id, firstName, lastName, isAdmin, token) => {
  return {
    type: types.login,
    payload: {
      id,
      firstName,
      lastName,
      isAdmin,
      token,
    },
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("admin");
    dispatch(logout());
  };
};

export const logout = () => {
  return {
    type: types.logout,
  };
};
