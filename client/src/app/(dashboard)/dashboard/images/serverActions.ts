'use server';

import axios from '@/axios';

export async function onSelectImages(images: FileList): Promise<void> {
    const formData = new FormData();
    for (const image of images) {
        formData.append('files', image, image.name);
    }

    try {
        await axios.post(
            '/images',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );
    } catch (e) {
        console.error('Не удалось загрузить изображение :(');
    }
}

export async function getImages() {
    return (await axios.get('/images')).data;
}

export async function deleteImage(id: number): Promise<void> {
    return (await axios.delete(`/images/${id}`)).data;
}