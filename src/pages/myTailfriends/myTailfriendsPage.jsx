import { NavBarTailhouse } from "../../components/NavBarTailhouse"
import { TailfriendsCard } from "../../components/myTailfriends/TailfriendsCard"

export const MyTailfriendsPage = () => {
    return (
        <>
            <NavBarTailhouse />
            <main>
                <div className="flex flex-wrap items-start px-52">
                    <TailfriendsCard />
                </div>
            </main>
        </>
    )
}