import axios from '@/axios';
import Link from 'next/link';

export default function Login() {
    async function submit(formData: FormData) {
        'use server';

        try {
            const auth = await axios.post('/auth/login', {
                login: formData.get('login'),
                pass: formData.get('password')
            });
            console.log(auth);
        } catch (e) {
            // no auth
        }
    }

    return (
        <div>
            <form action={submit}>
                <fieldset>
                    <label>Логин</label>
                    <input type={'text'} name={'login'}/>
                </fieldset>
                <fieldset>
                    <label>Пароль</label>
                    <input type={'password'} name={'password'}/>
                </fieldset>
                <button type={'submit'}>Войти</button>
            </form>
            <Link href={'signup'}>Регистрация</Link>
        </div>
    );
}
