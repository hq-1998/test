import { Service } from './request';

export function getCarList(config: { page: string }) {
    const params = new URLSearchParams();
    params.append('page', config.page);
    return Service({
        url: './api/getCarList',
        data: params
    })
}