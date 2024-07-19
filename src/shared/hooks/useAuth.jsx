import { useState } from "react";

import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

import { login as loginRequest } from "../../services/api";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const login = async (usernameOrEmail, password) => {
    setIsLoading(true);

    const response = await loginRequest({ usernameOrEmail, password });

    if (response.error && response.e) {
      setIsLoading(false);

      return toast.error("Error, please try again or contact support");
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
  };
};
