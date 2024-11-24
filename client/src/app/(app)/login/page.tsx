import { validate } from '@/app/(app)/login/func';
import LoginForm from '@/app/(app)/login/loginForm';
import axios from '@/axios';
import Link from 'next/link';

export default function Login() {
    async function submit(formData: FormData) {
        'use server';

        if (!validate(formData)) return;

        try {
            await axios.post('/auth/login', {
                login: formData.get('login'),
                pass: formData.get('password')
            });
        } catch (e) {
            // no auth
        }
    }

    return (
        <div>
            <LoginForm onSubmit={submit}/>
            <Link href={'signup'}>Регистрация</Link>
        </div>
    );
}
