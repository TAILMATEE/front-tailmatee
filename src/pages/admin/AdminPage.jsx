import { NavAdmin } from "../../components/NavAdmin";
import { ListDenouncement } from '../../components/admin/ListDenoucement/ListDenouncement';

export const AdminPage = () => {
    return (
        <>
            <NavAdmin />
            <ListDenouncement />
        </>
    );
};