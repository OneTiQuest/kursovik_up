import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';


export const metadata: Metadata = {
    title: 'Студия звукозаписи',
    description: 'Сайт студии звукозаписи'
};

export default function RootLayout(props: Readonly<PropsWithChildren>) {
    return (
        <html lang="ru">
        <body>
        {props.children}
        </body>
        </html>
    );
}
