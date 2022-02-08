import useSWR from "swr";

const baseUrl = 'http://localhost:3100/api/';

export const useRequest = (path) => {
    if (!path) {
        throw new Error('Path is required');
    }

    const url = baseUrl + path
    const { data, error } = useSWR(url)

    return { data, error }
}