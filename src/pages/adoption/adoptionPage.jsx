import { AdoptionForm } from "../../components/adoptionForm/AdoptionForm";
import { NavHome } from "../../components/NavHome";

export const AdoptionPage = () => {
  return (
    <>
      <NavHome />
      <main>
        <div className="flex justify-center mt-5">
          <AdoptionForm />
        </div>
      </main>
    </>
  );
};
