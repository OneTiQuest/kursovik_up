export function validate(formData: FormData): boolean | object {
    const login = formData.get('login');
    const pass = formData.get('password');

    const errRes = {};
    if (!login) errRes.login = 'Поле обязательно';
    if (!pass) errRes.password = 'Поле обязательно';

    return Object.keys(errRes).length ? errRes : true;
}