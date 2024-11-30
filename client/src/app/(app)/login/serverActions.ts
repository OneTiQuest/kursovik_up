'use server';

import { validate } from '@/app/(app)/login/func';
import axios from '@/axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

/**
 * Проверка авторизации
 */
export async function checkAuth(): Promise<object | boolean> {
    try {
        const session = (await cookies()).get('session')?.value;
        if (!session) return false;

        const parseSession = JSON.parse(session);
        const {roles, access_token} = parseSession;

        axios.defaults.headers['Authorization'] = `Bearer ${access_token}`;
        const user = (await axios.get('/auth/profile')).data;
        return {user, roles};

    } catch (e) {
        return false;
    }
}

export async function saveAuth(userData: any): Promise<void> {
    //TODO: Нужно шифровать данныее в куки
    const sessionString = JSON.stringify(userData);
    (await cookies()).set(
        'session',
        sessionString,
        {maxAge: userData.duration}
    );
}

export async function logout(toLogin?: boolean): Promise<void> {
    (await cookies()).delete('session');
    if (toLogin) redirect('/login');
}

export async function sendLoginForm(formData: FormData) {
    if (!validate(formData)) return;

    try {
        const userData = await axios.post('/auth/login', {
            login: formData.get('login'),
            pass: formData.get('password')
        });
        await saveAuth(userData.data);

        return userData.data.roles.find((role) => role.name === 'admin');

    } catch (e) {
        switch (e?.status) {
            case 401:
                await logout();
                return 'Пользователь не найден :(';
        }
    }
}