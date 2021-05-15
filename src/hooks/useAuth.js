import { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { DATABASE_URL } from "../config/";

export function useAuth() {
  const [userData, setUserData] = useState({});

  const registerUser = async (firstName, lastName, email, password) => {
    await axios.post(`${DATABASE_URL}/auth/register`, {
      firstName,
      lastName,
      email,
      password,
    });
  };

  const loginUser = async (email, password) => {
    const request = await axios.post(`${DATABASE_URL}/auth/login`, {
      email,
      password,
    });

    setUserData({
      id: request.data.user.id,
      firstName: request.data.user.firstName,
      lastName: request.data.user.lastName,
      email: request.data.user.email,
      isAdmin: request.data.user.isAdmin,
    });

    const token = request.data.token;

    if (token !== undefined) {
      await AsyncStorage.setItem("token", JSON.stringify(token));
    } else {
      throw new Error("usuario o contrasena incorrecta");
    }
  };

  const userLogout = async () => {
    await AsyncStorage.removeItem("token");
  };

  return { userData, registerUser, loginUser, userLogout };
}
