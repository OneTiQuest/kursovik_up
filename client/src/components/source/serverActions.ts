'use server';

import axios from '@/axios';

export async function updateMethod(endpoint: string) {
    return (await axios.get(endpoint)).data;
}

export async function deleteMethod(endpoint: string, id: number): Promise<any> {
    return (await axios.delete(endpoint, {data: {id}})).data;
}