import { FetchOptions } from "ohmyfetch";

export const useCustomFetch = (url: string, options?: FetchOptions) => {
    return $fetch(url, {
        ...options,
        async onResponse({ request, response, options }) {
            console.log("[fetch response]");
        },
        async onResponseError({ request, response, options }) {
            console.log("[fetch response error]");
        },

        async onRequest({ request, options }) {
            const token = useCookie('apiToken')

            if (token.value) {
                options.headers = {
                    ...options.headers,
                    Authorization: `Bearer ${token.value}`,
                }
            }

            console.log("[fetch request]");
        },
        async onRequestError({ request, options, error }) {
            console.log("[fetch request error]");
        },
    });
};
