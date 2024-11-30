import UsersGrid from '@/app/(dashboard)/dashboard/users/UsersGrid';
import Source from '@/components/source/Source';

async function Page(): Promise<React.ReactNode> {
    const usersSource = new Source({keyProperty: 'id', endpoint: '/users'});
    return <UsersGrid preload={await usersSource.getPreload()}/>;
}

export default Page;