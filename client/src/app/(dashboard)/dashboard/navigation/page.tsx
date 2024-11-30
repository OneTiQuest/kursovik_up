import Grid from '@/components/Grid';
import Source from '@/components/source/Source';

export default async function Navigation() {
    const navigationSource = new Source({endpoint: '/navigation', keyProperty: 'id'});
    return (
        <Grid columns={[
            {
                key: 'name',
                width: '1fr',
                itemProperty: 'name',
                title: 'Название'
            },
            {
                key: 'path',
                title: 'Путь',
                width: '1fr',
                itemProperty: 'path'
            }
        ]}
              preload={await navigationSource.getPreload()}
              rowHeight={'28px'}
        />
    );
}