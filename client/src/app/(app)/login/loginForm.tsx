'use client';

import { validate } from '@/app/(app)/login/func';
import { useRouter } from 'next/navigation';
import { FormEvent, useCallback, useState } from 'react';

export default function LoginForm({onSubmit}: { onSubmit: Function }) {
    const router = useRouter()
    const [valid, setValid] = useState<object | boolean>(true);

    const submitHandler = useCallback(async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const validateData = validate(formData);
        setValid(validateData);

        const serverResult = await onSubmit(formData);
        if (typeof serverResult === 'string') {
            alert(serverResult)
        } else if (serverResult) router.push('/dashboard')
    }, []);

    return (
        <form onSubmit={submitHandler}>
            <fieldset>
                <label>Логин</label>
                <input type={'text'} name={'login'}/>
                {typeof valid !== 'boolean' && valid.login}
            </fieldset>
            <fieldset>
                <label>Пароль</label>
                <input type={'password'} name={'password'}/>
                {typeof valid !== 'boolean' && valid.password}
            </fieldset>
            <button type={'submit'}>Войти</button>
        </form>
    );
}
