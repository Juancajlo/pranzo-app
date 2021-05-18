import { useState } from "react";
import axios from "axios";

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

    const user = {
      id: request.data.user.id,
      firstName: request.data.user.firstName,
      lastName: request.data.user.lastName,
      email: request.data.user.email,
      isAdmin: request.data.user.isAdmin,
      token: request.data.token,
    };

    setUserData(user);
  };

  const userLogout = async () => {
    setUserData({});
  };

  return { userData, registerUser, loginUser, userLogout };
}
