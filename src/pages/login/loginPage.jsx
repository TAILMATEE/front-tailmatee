import { Nav } from "../../components/Nav.jsx";
import { LoginText } from "../../components/login/LoginText/LoginText.jsx";
import { FormLogin } from "../../components/login/FormLogin/FormLogin.jsx";

export const LoginPage = () => {
  return (
    <main className="h-[70vh] text-blue">
      <Nav />
      <section className="flex flex-row justify-around items-center h-full">
        <LoginText />
        <FormLogin />
      </section>
    </main>
  );
};
