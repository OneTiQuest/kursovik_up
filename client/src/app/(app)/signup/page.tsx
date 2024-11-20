import SignupForm from '@/app/(app)/signup/signupForm';
import axios from '@/axios';
import Link from 'next/link';

export default function Signup() {
    async function submit(formData: FormData) {
        'use server';

        const pass = formData.get('password');
        const r_pass = formData.get('password_repeat');
        const login = formData.get('login');

        if (pass !== r_pass || !login) return;

        try {
            const auth = await axios.post('/auth/registry', {
                login,
                pass,
                email: formData.get('email'),
                phone: formData.get('phone')
            });
            console.log(auth);
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
