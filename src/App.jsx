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
import { ProfilePage } from "./pages/profile/profilePage.jsx";
import "./index.css";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/home", element: <HomePage /> },
    { path: "/profile", element: <ProfilePage /> },
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
