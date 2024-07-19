import { NavHome } from "../../components/NavHome";
import { Banner } from "../../components/tailhousedetail/Banner";
import { InfoHouseDetail } from "../../components/tailhousedetail/InfoHouseDetail";
import { ListPetsHouses } from "../../components/tailhousedetail/ListPetsHouses";

export const TailHouseDetail = () => {
    return (
        <>
            <NavHome />
            <main>
                <div>
                    <Banner />
                </div>
                <div className="flex justify-center mt-5">
                    <InfoHouseDetail />
                </div>
                <div className="flex flex-wrap items-start px-52 mt-16">
                    <ListPetsHouses />
                </div>
            </main>
        </>
    );
};