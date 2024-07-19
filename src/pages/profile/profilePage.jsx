import { NavHome } from '../../components/NavHome'
import { ContentProfile } from '../../components/profile/ContentProfile'
import { TailFriends } from '../../components/profile/TailFriends'
import { Divider } from "@nextui-org/divider";
import { Publications } from '../../components/profile/Publications';

export const ProfilePage = () => {
    return (
        <>
            <main className='h-full flex flex-col items-center font-lato'>
                <NavHome />
                <ContentProfile />
                <TailFriends />
                <h1 className='text-2xl mt-5'>
                    Publications
                </h1>
                <Divider className="my-4 max-w-7xl" />
                <Publications />
            </main>
        </>
    )
}