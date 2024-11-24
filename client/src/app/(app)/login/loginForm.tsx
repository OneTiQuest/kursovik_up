'use client';

import { validate } from '@/app/(app)/login/func';
import { FormEvent, useCallback, useState } from 'react';

export default function LoginForm({onSubmit}: { onSubmit: Function }) {
    const [valid, setValid] = useState<object | boolean>(true);
    const submitHandler = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const validateData = validate(formData);
        setValid(validateData);

        onSubmit(formData);
    }, [onSubmit]);
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
