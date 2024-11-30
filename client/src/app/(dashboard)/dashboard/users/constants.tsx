import { IColumn } from '@/components/Grid';

export const columns: IColumn[] = [
    {
        key: 'name',
        title: 'Имя',
        width: '1fr',
        itemProperty: 'name'
    },
    {
        key: 'login',
        title: 'Логин',
        width: '1fr',
        itemProperty: 'login'
    },
    {
        key: 'phone',
        title: 'Телефон',
        width: '1fr',
        itemProperty: 'phone'
    },
    {
        key: 'email',
        title: 'Email',
        width: '1fr',
        itemProperty: 'email'
    }
];
