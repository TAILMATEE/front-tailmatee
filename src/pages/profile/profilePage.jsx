import { NavHome } from '../../components/NavHome'
import { ContentProfile } from '../../components/profile/ContentProfile'
import { TailFriends } from '../../components/profile/TailFriends'

export const ProfilePage = () => {
    return (
        <>
            <main className='h-full flex flex-col items-center'>
                <NavHome />
                <ContentProfile />
                <TailFriends />
            </main>
        </>
    )
}