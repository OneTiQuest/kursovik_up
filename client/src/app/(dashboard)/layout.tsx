import Content from '@/app/(dashboard)/dashboard/components/Content';
import Header from '@/app/(dashboard)/dashboard/components/Header';
import SideBar from '@/app/(dashboard)/dashboard/components/SideBar';
import type { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Админка',
    description: 'Панель управления сайтом'
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="ru">
        <body>
        <Header/>
        <SideBar/>
        <Content>
            {children}
        </Content>
        </body>
        </html>
    );
}
