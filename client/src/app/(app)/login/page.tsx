import LoginForm from '@/app/(app)/login/loginForm';
import { sendLoginForm } from '@/app/(app)/login/serverActions';
import Link from 'next/link';

export default function Login() {
    return (
        <div>
            <LoginForm onSubmit={sendLoginForm}/>
            <Link href={'signup'}>Регистрация</Link>
        </div>
    );
}
