/* eslint-disable react-hooks/rules-of-hooks */
import { useRoutes } from "react-router-dom/dist";
import { LoginPage } from "./pages/login/loginPage";
import { RegisterPage } from "./pages/register/registerPage";
import { HomePage } from "./pages/homepage/homePage";
import { DenouncementPage } from "./pages/denouncement";
import { TailhousePage } from "./pages/tailhouse";

const routes = useRoutes([
  { path: '/', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/home', element: <HomePage /> },
  { path: '/denouncement', element: <DenouncementPage /> },
  { path: '/tailhouse', element: <TailhousePage /> }
]);

export default routes;
