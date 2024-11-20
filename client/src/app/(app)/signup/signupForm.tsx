'use client';

import { validate } from '@/app/(app)/signup/func';
import { FormEvent, ReactElement, useCallback, useState } from 'react';

export default function SignupForm({onSubmit}: { onSubmit: Function }): ReactElement {
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
                <label>E-mail</label>
                <input type={'email'} name={'email'}/>
            </fieldset>
            <fieldset>
                <label>Телефон</label>
                <input type={'text'} name={'phone'}/>
            </fieldset>
            <fieldset>
                <label>Пароль</label>
                <input type={'password'} name={'password'}/>
                {typeof valid !== 'boolean' && valid.password}
            </fieldset>
            <fieldset>
                <label>Повторите пароль</label>
                <input type={'password'} name={'password_repeat'}/>
                {typeof valid !== 'boolean' && valid.password_repeat}
                {typeof valid !== 'boolean' && valid.passisEqaul}
            </fieldset>
            <button type={'submit'}>Регистрация</button>
        </form>
    );
}