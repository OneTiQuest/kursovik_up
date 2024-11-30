'use client';

import { columns } from '@/app/(dashboard)/dashboard/users/constants';
import Grid, { IItemAction } from '@/components/Grid';
import { ISourceOptions } from '@/components/source/interface';
import { ReactElement, useCallback } from 'react';


function UsersGrid({preload}: { preload: ISourceOptions }): ReactElement {
    const itemActionVisibleCallback = useCallback((action: IItemAction, item: any) => {
        switch (action.key) {
            case 'delete':
                return item.Role.find((role: any) => role.role.name !== 'admin');
        }
        return true;
    }, []);


    return <Grid columns={columns}
                 preload={preload}
                 rowHeight={'28px'}
                 itemActionVisibleCallback={itemActionVisibleCallback}
    />;
}

export default UsersGrid;
