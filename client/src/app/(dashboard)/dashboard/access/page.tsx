import Grid from '@/components/Grid';
import Source from '@/components/source/Source';

async function Access(): Promise<React.ReactNode> {
    const rolesSource = new Source({keyProperty: 'id', endpoint: '/roles'});
    return (
        <Grid columns={[{key: 'name', width: '1fr', itemProperty: 'name'}]}
              preload={await rolesSource.getPreload()}
              rowHeight={'28px'}
        />
    );
}

export default Access;