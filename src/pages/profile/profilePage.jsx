import { NavHome } from '../../components/NavHome'
import { ContentProfile } from '../../components/profile/ContentProfile'

export const ProfilePage = () => {
    return (
        <>
            <main className='h-full'>
                <NavHome />
                <ContentProfile />
            </main>
        </>
    )
}