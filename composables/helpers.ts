export const getQueryParams = (data: Record<string, any> = {}): string => {
    const urlSearchParams = new URLSearchParams();

    Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            value.forEach(el => {
                urlSearchParams.append(key, el);
            });
        } else {
            if (value) urlSearchParams.append(key, value);
        }
    });

    return urlSearchParams.toString();
};
