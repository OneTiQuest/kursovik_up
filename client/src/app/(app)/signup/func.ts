export function validate(formData: FormData): boolean | object {
    const login = formData.get('login');
    const pass = formData.get('password');
    const r_pass = formData.get('password_repeat');

    const errRes = {};
    if (!login) errRes.login = 'Поле обязательно';
    if (!pass) errRes.password = 'Поле обязательно';
    {
        if (pass !== r_pass) errRes.password_repeat = 'Пароли не сопадают';
        if (!r_pass) errRes.password_repeat = 'Поле обязательно';
    }

    return Object.keys(errRes).length ? errRes : true;
}