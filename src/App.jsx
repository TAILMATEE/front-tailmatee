/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import { LoginPage } from "./pages/login/loginPage.jsx";
import { RegisterPage } from "./pages/register/registerPage.jsx";
import { HomePage } from "./pages/homepage/homePage.jsx";
import { TailhousePage } from "./pages/tailHouses/tailhousePage.jsx";
import { TailHouseDetail } from "./pages/tailHouseDetail/tailHouseDetail.jsx";
import "./index.css";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/home", element: <HomePage /> },
    { path: "/tailhouse", element: <TailhousePage /> },
    { path: "/tailhousedetail", element: <TailHouseDetail />}
  ]);
  return routes;
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
