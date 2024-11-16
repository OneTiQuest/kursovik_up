import Content from '@/app/dashboard/components/Content';
import Header from '@/app/dashboard/components/Header';
import SideBar from '@/app/dashboard/components/SideBar';
import type { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Админка',
    description: 'Панель управления сайтом'
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="ru">
        <body className={'dashboard'}>
        <Header/>
        <SideBar/>
        <Content>
            {children}
        </Content>
        </body>
        </html>
    );
}
