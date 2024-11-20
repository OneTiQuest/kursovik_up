import { validate } from '@/app/(app)/signup/func';
import SignupForm from '@/app/(app)/signup/signupForm';
import axios from '@/axios';
import Link from 'next/link';

export default function Signup() {
    async function submit(formData: FormData) {
        'use server';

        if (!validate(formData)) return;

        try {
            await axios.post('/auth/registry', {
                login: formData.get('login'),
                pass: formData.get('password'),
                email: formData.get('email'),
                phone: formData.get('phone')
            });
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
