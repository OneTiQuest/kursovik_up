import axios from '@/axios';

async function Access(): Promise<React.ReactNode> {
    const access = await axios.get('/roles');
    return <div>{JSON.stringify(access.data)}</div>;
}

export default Access;