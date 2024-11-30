import { IColumn, IItemAction } from '@/components/Grid';
import { defaultActions, defaultColumns } from '@/components/source/constants';
import { IDefaultActionType, ISourceOptions } from '@/components/source/interface';
import { deleteMethod, updateMethod } from '@/components/source/serverActions';

export default class Source {
    items: any[];
    keyProperty: string;
    private readonly _endpoint: string = '/';


    constructor(options: ISourceOptions) {
        this._endpoint = options.endpoint;
        this.keyProperty = options.keyProperty ?? '';
        this.items = options.items ?? [];
    }

    async getPreload(): Promise<ISourceOptions> {
        return {
            endpoint: this._endpoint,
            items: await this.updateMethod(),
            keyProperty: this.keyProperty
        };
    }

    async updateMethod() {
        return updateMethod(this._endpoint);
    }

    async deleteMethod(id: number): Promise<any> {
        return deleteMethod(this._endpoint, id);
    }

    getDefaultActions(): IItemAction[] {
        return defaultActions;
    }

    getDefaultColumns(): IColumn[] {
        return defaultColumns;
    }

    async getDefaultActionHandler(action: IItemAction, item: any): Promise<IDefaultActionType | undefined> {
        switch (action.key) {
            case 'delete':
                await this.deleteMethod(item.id);
                return {
                    type: 'reload',
                    items: await this.updateMethod()
                };
        }
    }
}