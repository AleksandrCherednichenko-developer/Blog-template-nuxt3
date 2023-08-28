import request from '@/api/simple-request';
import { getQueryParams } from '@/composables/helpers';
import { CRUDParams } from '@/interfaces/requests-interfaces';

export class BaseCRUD {
    static async GET ({ service, id = null, query = {}}: CRUDParams) {
        return request({
            service,
            method: 'GET',
            uri: id ? String(id) : '',
            queryString: getQueryParams(query),
        });
    }

    static async POST ({ service, body = null }: CRUDParams) {
        return request({
            service,
            method: 'POST',
            body,
        });
    }

    static async DELETE ({ service, id, body = null }: CRUDParams) {
        return request({
            service,
            method: 'DELETE',
            uri: id ? String(id) : '',
            body,
        });
    }

    static async PATCH ({ service, id, body }: CRUDParams) {
        return request({
            service,
            method: 'PATCH',
            uri: id ? String(id) : '',
            body,
        });
    }

    static async PUT ({ service, id = null, body = null }: CRUDParams) {
        return request({
            service,
            method: 'PUT',
            uri: id ? String(id) : '',
            ...(body && { body }),
        });
    }
}
