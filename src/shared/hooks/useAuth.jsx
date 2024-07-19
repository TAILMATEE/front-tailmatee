import { useState } from "react";

import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

import {
  login as loginRequest,
  register as registerRequest,
} from "../../services/api";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const register = async (
    name,
    lastname,
    username,
    birthdate,
    gender,
    email,
    password,
    phone
  ) => {
    setIsLoading(true);
    console.log(
      name,
      lastname,
      username,
      birthdate,
      gender,
      email,
      password,
      phone
    );

    const response = await registerRequest({
      name,
      lastname,
      username,
      birthdate,
      gender,
      email,
      password,
      phone,
    });

    setIsLoading(false);

    if (response.error) {
      console.log(response.error);
      console.log(response.e);
      console.log(response.e?.response);
      console.log(response.e?.response?.data);

      return toast.error(
        response.e?.response?.data ||
          "An error occurred, please try again later."
      );
    }

    toast.success(
      (t) => (
        <span>
          {response.data.msg} <br />
          <button
            onClick={() => toast.dismiss(t.id)}
            style={{
              background: "transparent",
              border: "none",
              position: "absolute",
              top: "0",
              right: "0",
              margin: "5px",
            }}
          >
            X
          </button>
        </span>
      ),
      { duration: Infinity }
    );

    navigate("/");
  };

  const login = async (usernameOrEmail, password) => {
    setIsLoading(true);

    const response = await loginRequest({ usernameOrEmail, password });

    if (response.error && response.e) {
      console.log(response.error);
      console.log(response.e);
      console.log(response.e?.response);
      console.log(response.e?.response?.data);

      setIsLoading(false);

      return toast.error(`${response.data.msg}`);
    }

    const { tailUser, token } = response.data;

    localStorage.setItem(
      "token",
      JSON.stringify({
        token,
        role: tailUser.role,
      })
    );

    setIsLoading(false);

    navigate("/home");

    return toast.success(`${response.data.msg}`);
  };

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };

  return {
    isLoading,
    login,
    logout,
    register,
  };
};
