'use client'

import { FormEvent, ReactElement } from 'react';

export default function SignupForm({onSubmit}: {onSubmit: Function}): ReactElement {
    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        onSubmit(formData)
    };

    return (
        <form onSubmit={submitHandler}>
            <fieldset>
                <label>Логин</label>
                <input type={'text'} name={'login'}/>
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
            </fieldset>
            <fieldset>
                <label>Повторите пароль</label>
                <input type={'password'} name={'password_repeat'}/>
            </fieldset>
            <button type={'submit'}>Регистрация</button>
        </form>
    );
}