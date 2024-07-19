import { NavHome } from "../../components/NavHome.jsx";
import { CardPost } from "../../components/homepage/CardPost.jsx";
import { TailFriendsList } from "../../components/homepage/TailFriendsList.jsx";

export const HomePage = () => {
  return (
    <>
      <NavHome />
      <section className="flex justify-around pt-7 pl-80">
        <article className="flex w-auto">
          <section>
            <CardPost />
          </section>
        </article>
        <article className="flex w-2/4">
          <section className="fixed">
            <TailFriendsList />
          </section>
        </article>
      </section>
    </>
  );
};
