import { NavHome } from "../../components/NavHome";
import { TailHouse } from "../../components/tailhouse/TailHouse";

export const TailhousePage = () => {
    return (
        <>
            <NavHome />
            <main>
                <div className="flex flex-wrap items-start px-52">
                    <TailHouse />
                </div>
            </main>
        </>
    );
};