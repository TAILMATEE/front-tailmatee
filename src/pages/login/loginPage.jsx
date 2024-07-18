import { Nav } from "../../components/Nav.jsx";
import { LoginText } from "../../components/login/LoginText/LoginText.jsx";

export const LoginPage = () => {
  return (
    <main className="h-[70vh]">
      <Nav />
      <section className="flex flex-row justify-around items-center h-full">
        <LoginText />
        
      </section>
    </main>
  );
};
