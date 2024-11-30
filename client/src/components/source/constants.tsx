import { IColumn, IItemAction } from '@/components/Grid';

/**
 * https://www.svgrepo.com/svg/499785/closure
 */
export const defaultActions: IItemAction[] = [
    {
        key: 'edit',
        itemTemplate: () => (
            <svg
                viewBox="0 0 1024 1024"
                className="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth={0}/>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M823.3 938.8H229.4c-71.6 0-129.8-58.2-129.8-129.8V215.1c0-71.6 58.2-129.8 129.8-129.8h297c23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7h-297c-24.5 0-44.4 19.9-44.4 44.4V809c0 24.5 19.9 44.4 44.4 44.4h593.9c24.5 0 44.4-19.9 44.4-44.4V512c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v297c0 71.6-58.2 129.8-129.8 129.8z"
                        fill="#3688FF"
                    />
                    <path
                        d="M483 756.5c-1.8 0-3.5-0.1-5.3-0.3l-134.5-16.8c-19.4-2.4-34.6-17.7-37-37l-16.8-134.5c-1.6-13.1 2.9-26.2 12.2-35.5l374.6-374.6c51.1-51.1 134.2-51.1 185.3 0l26.3 26.3c24.8 24.7 38.4 57.6 38.4 92.7 0 35-13.6 67.9-38.4 92.7L513.2 744c-8.1 8.1-19 12.5-30.2 12.5z m-96.3-97.7l80.8 10.1 359.8-359.8c8.6-8.6 13.4-20.1 13.4-32.3 0-12.2-4.8-23.7-13.4-32.3L801 218.2c-17.9-17.8-46.8-17.8-64.6 0L376.6 578l10.1 80.8z"
                        fill="#5F6379"
                    />
                </g>
            </svg>

        )
    },
    {
        key: 'delete',
        itemTemplate: () => (
            <svg
                viewBox="0 0 1024 1024"
                className="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth={0}/>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M512 1024C229.7 1024 0 794.3 0 512S229.7 0 512 0s512 229.7 512 512-229.7 512-512 512z m0-938.7C276.7 85.3 85.3 276.7 85.3 512S276.7 938.7 512 938.7 938.7 747.3 938.7 512 747.3 85.3 512 85.3z"
                        fill="#3688FF"
                    />
                    <path
                        d="M632.7 675.3c-10.9 0-21.8-4.2-30.2-12.5L361.1 421.5c-16.7-16.7-16.7-43.7 0-60.3 16.7-16.7 43.7-16.7 60.3 0l241.4 241.4c16.7 16.7 16.7 43.7 0 60.3-8.3 8.3-19.2 12.4-30.1 12.4z"
                        fill="#5F6379"
                    />
                    <path
                        d="M391.3 675.3c-10.9 0-21.8-4.2-30.2-12.5-16.7-16.7-16.7-43.7 0-60.3l241.4-241.4c16.7-16.7 43.7-16.7 60.3 0 16.7 16.7 16.7 43.7 0 60.3L421.5 662.8c-8.4 8.4-19.3 12.5-30.2 12.5z"
                        fill="#5F6379"
                    />
                </g>
            </svg>
        )
    }
];

export const defaultColumns: IColumn[] = [{
    key: 'createdAt',
    title: 'Создано',
    width: '1fr',
    itemTemplate: (item: any) => new Intl.DateTimeFormat('ru-Ru', {dateStyle: 'long'}).format(new Date(item.createdAt))
}, {
    key: 'updatedAt',
    title: 'Обновлено',
    width: '1fr',
    itemTemplate: (item: any) => new Intl.DateTimeFormat('ru-Ru', {dateStyle: 'long'}).format(new Date(item.createdAt))
}];