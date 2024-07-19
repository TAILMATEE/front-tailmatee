/* eslint-disable react-hooks/rules-of-hooks */
import { useRoutes } from "react-router-dom/dist";
import { LoginPage } from "./pages/login/loginPage";
import { RegisterPage } from "./pages/register/registerPage";
import { HomePage } from "./pages/homepage/homePage";
import { TailhousePage } from "./pages/tailhouse";
import { TailHouseDetail } from "./pages/tailHouseDetail/tailHouseDetail";
import { AdoptionPage } from "./pages/adoption/adoptionPage";

const routes = useRoutes([
  { path: '/', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/home', element: <HomePage /> },
  { path: '/tailhouse', element: <TailhousePage /> },
  { path: '/tailhousedetail/:id', element: <TailHouseDetail />},
  { path: '/adoption', element: <AdoptionPage />}
]);

export default routes;
