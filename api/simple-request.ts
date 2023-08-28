import { RequestParams } from '@/interfaces/requests-interfaces';

const API_PREFIX = 'https://jsonplaceholder.typicode.com';
const CONTENT_TYPE = 'Content-Type';
const MIME_TYPE = 'application/json';
const serverMethods = ['POST', 'PUT', 'PATCH', 'DELETE'];

const status = {
    code: 418,
    ok: false,
};

let payload: any = null;

async function request ({
    mimeType = MIME_TYPE,
    defaultHeaders = { [CONTENT_TYPE]: MIME_TYPE },
    method,
    service = '',
    uri = '',
    queryString = '',
    body,
}: RequestParams) {
    const baseUrl = `${API_PREFIX}/${service}`;
    const url = uri ? `${baseUrl}/${uri}?${queryString}` : `${baseUrl}?${queryString}`;
    const formattedBody = defaultHeaders[CONTENT_TYPE] === MIME_TYPE ? JSON.stringify(body) : body;
    const formattedHeaders = serverMethods.includes(method) && body != null ? defaultHeaders : {};

    try {
        const resp = await fetch(url, { headers: formattedHeaders, method, body: formattedBody });

        status.code = resp.status;
        status.ok = resp.ok;

        if (resp.headers.get(CONTENT_TYPE)?.split(';')[0] === mimeType) {
            payload = await resp.json().catch(() => null);
        }

        payload ??= { message: resp.statusText };
    } catch (error) {
        console.log('=>Request-error', error);
    }
    return {
        status,
        payload,
    };
}

export default request;
