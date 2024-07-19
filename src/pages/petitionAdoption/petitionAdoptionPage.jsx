import { NavBarTailhouse } from "../../components/NavBarTailhouse";
import { PetitionAdoptionList } from "../../components/petitionAdoptionList/PetitionAdoptionList";

export const PetitionAdoptionPage = () => {
    return(
        <>
            <NavBarTailhouse />
            <main>
                <PetitionAdoptionList />
            </main>
        </>
    );
}