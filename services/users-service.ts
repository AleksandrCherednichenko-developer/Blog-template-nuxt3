import { BaseCRUD } from '@/api/base-request';

const serviceName = 'posts';

export class UsersService {
    /**
     * @param {number} offset
     * @param {number} limit
     * @returns {Promise<Response>}
     */
    static async getUsersList (offset: number | null = null, limit: number | null = null) {
        const resp = await BaseCRUD.GET({
            service: serviceName,
            query: {
                offset,
                limit,
            },
        });

        if (!resp.status.ok) {
            toastError('error');
            return null;
        }
        return resp.payload;
    };

    /**
     * @param {string} id required
     * @returns {Promise<Response>}
     */
    static async getUserById (id: string | number) {
        const resp = await BaseCRUD.GET({
            service: serviceName,
            id,
        });

        if (!resp.status.ok) {
            toastError('server_error');
            return null;
        }
        return resp.payload;
    }
}
