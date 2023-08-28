export interface CRUDParams {
    service: string;
    id?: string | number | null;
    query?: Record<string, any>;
    body?: any;
}

export interface RequestParams {
    mimeType?: string;
    defaultHeaders?: Record<string, string>;
    method: string;
    service?: string | null;
    uri?: string;
    queryString?: string;
    body?: any;
}

export interface Me {
    login: string;
    id: string;
    role: string;
}

export interface BodyLogin {
    login: string;
    password: string;
}

export interface BodyPost {
    title: string;
    body: string;
    userId?: string;
}
