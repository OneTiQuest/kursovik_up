'use client';

import AddButton from '@/app/(dashboard)/dashboard/images/AddButton';
import { deleteImage, getImages, onSelectImages } from '@/app/(dashboard)/dashboard/images/serverActions';
import { ReactElement, useState } from 'react';

function ImagesList({initImages = []}: any): ReactElement {
    const [images, setImages] = useState(initImages);

    const onSelectImagesHandler = async (images: FileList) => {
        await onSelectImages(images);
        setImages(await getImages());
    };

    const clickImageHandler = async (image) => {
        await deleteImage(image.id);
        setImages(await getImages());
    }

    return (
        <div>
            <AddButton onSelectImages={onSelectImagesHandler}/>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 12}}>
                {images.map((image) => (
                    <div style={{
                        width: 200,
                        height: 200,
                        boxShadow: '0 2px 6px 0 rgba(34, 60, 80, 0.6)',
                        borderRadius: 12,
                        overflow: 'hidden'
                    }}
                         key={image.path}
                         onClick={() => clickImageHandler(image)}
                    >
                        <img style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                             src={image.path}
                             alt={image.path}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImagesList;