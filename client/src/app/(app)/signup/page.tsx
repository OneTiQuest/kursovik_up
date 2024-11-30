import { saveAuth } from '@/app/(app)/login/serverActions';
import { validate } from '@/app/(app)/signup/func';
import SignupForm from '@/app/(app)/signup/signupForm';
import axios from '@/axios';
import Link from 'next/link';

export default function Signup() {
    async function submit(formData: FormData) {
        'use server';

        if (!validate(formData)) return;

        try {
            const userData = await axios.post('/auth/registry', {
                login: formData.get('login'),
                name: formData.get('name'),
                pass: formData.get('password'),
                email: formData.get('email'),
                phone: formData.get('phone')
            });
            await saveAuth(userData.data);
        } catch (e) {
            // no auth
        }
    }

    return (
        <div>
            <SignupForm onSubmit={submit}/>
            <Link href={'login'}>Войти</Link>
        </div>
    );
}
