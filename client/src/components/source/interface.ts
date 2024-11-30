export interface ISourceOptions {
    endpoint: string;
    items?: any[];
    keyProperty?: string;
}

export interface IDefaultActionType {
    type: 'reload',
    items: any[];
}