import { NavHome } from "../../components/NavHome";
import { TailHouse } from "../../components/tailhouse/TailHouse";

export const TailhousePage = () => {
    return (
        <>
            <NavHome />
            <main>
                <div>
                    <TailHouse />
                </div>
            </main>
        </>
    );
};