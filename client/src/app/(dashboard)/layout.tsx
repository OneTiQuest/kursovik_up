import Content from '@/app/(dashboard)/dashboard/_components/Content';
import Header from '@/app/(dashboard)/dashboard/_components/Header';
import SideBar from '@/app/(dashboard)/dashboard/_components/SideBar';
import type { Metadata } from 'next';
import './style.css';


export const metadata: Metadata = {
    title: 'Админка',
    description: 'Панель управления сайтом'
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="ru">
        <body>
        <div className={'dashboard'}>
            <Header/>
            <SideBar/>
            <Content>
                {children}
            </Content>
        </div>
        </body>
        </html>
    );
}
