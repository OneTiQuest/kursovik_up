import ImagesList from '@/app/(dashboard)/dashboard/images/ImagesList';
import { getImages } from '@/app/(dashboard)/dashboard/images/serverActions';

async function Page(): Promise<React.ReactNode> {
    const initImages = await getImages()
    return (
        <ImagesList initImages={initImages}/>
    );
}

export default Page;