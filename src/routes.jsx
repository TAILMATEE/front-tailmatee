/* eslint-disable react-hooks/rules-of-hooks */
import { useRoutes } from "react-router-dom/dist";
import { LoginPage } from "./pages/login/loginPage";
import { RegisterPage } from "./pages/register/registerPage";
import { HomePage } from "./pages/homepage/homePage";
import { ProfilePage } from "./pages/profile/profilePage";
import { AdminPage } from "./pages/admin/AdminPage";
import { TailHouseRequestPage } from "./pages/tailHouseRequests";
import { TailhousePage } from "./pages/tailhouse";
import { TailHouseDetail } from "./pages/tailHouseDetail/tailHouseDetail";
import { AdoptionPage } from "./pages/adoption/adoptionPage";
¿
const routes = useRoutes([
  { path: '/', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/home', element: <HomePage /> },
  { path: '/profile', element: <ProfilePage /> },
  { path: '/admin', element: <AdminPage /> },
  { path: '/tailhouse-requests', element: <TailHouseRequestPage /> },
  { path: '/tailhouse', element: <TailhousePage /> },
  { path: '/tailhousedetail/:id', element: <TailHouseDetail />},
  { path: '/adoption', element: <AdoptionPage />}
  
import { DenouncementPage } from "./pages/denouncement";
import { ProfilePage } from "./pages/profile/profilePage";

const routes = useRoutes([
  { path: "/", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/denouncement", element: <DenouncementPage /> },
  { path: "/profile", element: <ProfilePage /> },
]);

export default routes;
