import { NavAdmin } from "../../components/NavAdmin";
import { ListAproveTailhouse } from "../../components/admin/ListAproveTailhouse/ListAproveTailhouse";

export const TailHouseRequestPage = () => {
    return (
        <>
            <NavAdmin />
            <main>
                <div>
                    <ListAproveTailhouse />
                </div>
            </main>
        </>
    );
};