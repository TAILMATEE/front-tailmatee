/* eslint-disable react-hooks/rules-of-hooks */
import { useRoutes } from "react-router-dom/dist";
import { LoginPage } from "./pages/login/loginPage";
import { RegisterPage } from "./pages/register/registerPage";
import { HomePage } from "./pages/homepage/homePage";

const routes = useRoutes([
  { path: '/', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/home', element: <HomePage /> }
]);

export default routes;
