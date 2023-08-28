import { BaseCRUD } from '@/api/base-request';

const serviceName = 'posts';

export class PostsService {
    /**
     * @param {number} offset
     * @param {number} limit
     * @returns {Promise<Response>}
     */
    static async getPostsList (offset: number | null = null, limit: number | null = null) {
        const resp = await BaseCRUD.GET({
            service: serviceName,
            query: {
                offset,
                limit,
            },
        });

        if (!resp.status.ok) {
            toastError('server-error');
            return null;
        }

        return resp.payload;
    };

    /**
     * @param {string} id required
     * @returns {Promise<Response>}
     */
    static async getPostById (id: string | number) {
        const resp = await BaseCRUD.GET({
            service: serviceName,
            id,
        });

        if (!resp.status.ok) {
            toastError('server-error');
            return null;
        }
        return resp.payload;
    }

    /**
     * @param {string} id required
     * @param {Object} body required
     * @returns {Promise<Response>}
     */
    static async updatePostById (id: string | number, body: object) {
        const resp = await BaseCRUD.PUT({
            service: serviceName,
            id,
            body,
        });

        if (!resp.status.ok) {
            toastError('sever-error');
            return null;
        }
        toastSuccess('success');
        return resp.payload;
    }

    /**
     * @param {string} id required
     * @returns {Promise<Response>}
     */
    static async deletePostById (id: string | number) {
        const resp = await BaseCRUD.DELETE({
            service: serviceName,
            id,
        });

        if (!resp.status.ok) {
            toastError('sever-error');
            return null;
        }
        toastSuccess('success');
        return resp.payload;
    }

    /**
     * @param {Object} body required
     * @returns {Promise<Response>}
     */
    static async createPost (body: object) {
        const resp = await BaseCRUD.POST({
            service: serviceName,
            body,
        });

        if (!resp.status.ok) {
            toastError('sever-error');
            return null;
        }
        toastSuccess('success');
        return resp.payload;
    }
}
