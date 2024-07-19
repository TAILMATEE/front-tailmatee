import { Nav } from "../../components/Nav.jsx";
import { MessageRegister } from "../../components/register/MessageRegister.jsx";
import { FormRegister } from "../../components/register/FormRegister.jsx";

export const RegisterPage = () => {
  return (
    <>
      <Nav />
      <article className="flex justify-center gap-48">
        <section className="content-center">
          <MessageRegister />
        </section>
        <section className="justify-items-center">
          <FormRegister />
        </section>
      </article>
    </>
  );
};
