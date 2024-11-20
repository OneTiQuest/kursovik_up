import axios from '@/axios';

async function Page(): Promise<React.ReactNode> {
    const users = await axios.get('/users');
    return <div>{JSON.stringify(users.data)}</div>;
}

export default Page;