'use client';

import { ISourceOptions } from '@/components/source/interface';
import Source from '@/components/source/Source';
import { CSSProperties, ReactElement, useMemo, useState } from 'react';
import './Grid.css';

export interface IColumn {
    key: string;
    title?: string;
    itemProperty?: string;
    itemTemplate?: (item: any, column: IColumn) => ReactElement | string;
    width: string;
}

export interface IItemAction {
    key: string;
    itemTemplate?: (item: any) => ReactElement | string;
}

export interface IGridProps {
    columns: IColumn[];
    preload: ISourceOptions;

    rowHeight?: string;
    onItemActionClick?: (action: IItemAction, item: any) => void;
    itemActions?: IItemAction[];
    itemActionVisibleCallback?: (action: IItemAction, item: any) => boolean;
}

const getItemTemplate = (item: any, column: IColumn) => {
    return (
        <div key={column.key}>
            {
                column.itemTemplate
                    ? column.itemTemplate(item, column)
                    : column.itemProperty && item[column.itemProperty]
            }
        </div>
    );
};

function Grid({
                  preload,
                  columns,
                  rowHeight = '18px',
                  itemActionVisibleCallback,
                  onItemActionClick,
                  itemActions
              }: IGridProps): ReactElement {
    const source = useMemo(() => new Source(preload), []);
    const [items, setItems] = useState(source.items);

    const gridColumns = useMemo(() => ([
        ...source.getDefaultColumns(),
        ...columns
    ]), columns);

    const gridActions = useMemo(() => ([
        ...source.getDefaultActions(),
        ...(itemActions ?? [])
    ]), [itemActions]);

    const gridStyle: CSSProperties = useMemo(() => {
        const templateColumns = gridColumns.reduce((acc, column) => `${acc} ${column.width}`, '');
        return {
            gridTemplateColumns: templateColumns,
            gridTemplateRows: rowHeight
        };
    }, [gridColumns, rowHeight]);

    const actionClickHandler = async (action: IItemAction, item: any) => {
        const defaultActionResult = await source.getDefaultActionHandler(action, item);
        if (defaultActionResult) {
            switch (defaultActionResult.type) {
                case 'reload':
                    setItems(defaultActionResult.items);
                    break;
            }
        }
        onItemActionClick?.(action, item);
    };

    const getItemActions = (item: any) => (
        <div className={'actions'}>
            {
                gridActions.map((itemAction) => {
                    const isVisible = itemActionVisibleCallback
                        ? itemActionVisibleCallback?.(itemAction, item)
                        : true;

                    return isVisible &&
                        <div className={'action-item'}
                             style={{width: rowHeight}}
                             key={itemAction.key}
                             onClick={() => actionClickHandler(itemAction, item)}>
                            <div>
                                {itemAction.itemTemplate?.(item)}
                            </div>
                        </div>;
                })
            }
        </div>
    );


    return (
        <div className={'grid'}>
            <div className={'grid-row'} style={gridStyle}>
                {
                    gridColumns.map((header) => (
                        <div key={header.key}>
                            {header.title}
                        </div>
                    ))
                }
            </div>
            {
                items.map((item) => (
                    <div className={'grid-row'} key={item[source.keyProperty]} style={gridStyle}>
                        {
                            gridColumns.map((column) => getItemTemplate(item, column))
                        }
                        {getItemActions(item)}
                    </div>
                ))
            }
        </div>
    );
}

export default Grid;