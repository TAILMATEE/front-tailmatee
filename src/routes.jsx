/* eslint-disable react-hooks/rules-of-hooks */
import { useRoutes } from "react-router-dom/dist";
import { LoginPage } from "./pages/login/loginPage";
import { RegisterPage } from "./pages/register/registerPage";
import { HomePage } from "./pages/homepage/homePage";
import { ProfilePage } from "./pages/profile/profilePage";
import { AdminPage } from "./pages/admin/AdminPage";

const routes = useRoutes([
  { path: '/', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/home', element: <HomePage /> },
  { path: '/profile', element: <ProfilePage /> },
  { path: '/admin', element: <AdminPage /> },
]);

export default routes;
