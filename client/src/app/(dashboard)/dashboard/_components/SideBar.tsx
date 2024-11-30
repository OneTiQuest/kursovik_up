import Link from 'next/link';
import './SideBar.css'

function SideBar(): React.ReactNode {
    return <aside className={'sidebar'}>
        <div className={'logo-wrapper'}>

        </div>
        <nav>
            <Link href={'/dashboard'}>Главная</Link>
            <Link href={'/dashboard/users'}>Пользователи</Link>
            <Link href={'/dashboard/access'}>Доступ</Link>
            <Link href={'/dashboard/navigation'}>Навигация</Link>
            <Link href={'/dashboard/images'}>Изображения</Link>
            <Link href={'/dashboard/content'}>Контент</Link>
            <Link href={'/dashboard/modules'}>Модули</Link>
        </nav>
    </aside>
}

export default SideBar;