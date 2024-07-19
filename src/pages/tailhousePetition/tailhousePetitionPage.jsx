import { NavHome } from "../../components/NavHome";
import { TailhousePetitionForm } from "../../components/tailhousePetition/TailhousePetitionForm";

export const TailhousePetitionPage = () => {
  return (
    <>
      <NavHome />
      <main>
        <div className="flex justify-center mt-5">
          <TailhousePetitionForm />
        </div>
      </main>
    </>
  );
};
