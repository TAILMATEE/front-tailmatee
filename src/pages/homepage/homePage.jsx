import { NavHome } from "../../components/NavHome.jsx";
import { CardPost } from "../../components/homepage/CardPost.jsx";

export const HomePage = () => {
  return (
    <>
      <NavHome />
      <section className="flex justify-center">
        <CardPost />
      </section>
    </>
  );
};
