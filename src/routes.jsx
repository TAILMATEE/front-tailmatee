/* eslint-disable react-hooks/rules-of-hooks */
import { useRoutes } from "react-router-dom/dist";
import { LoginPage } from "./pages/login/loginPage";

const routes = useRoutes([
  { path: '/', element: <LoginPage /> },
]);

export default routes;
