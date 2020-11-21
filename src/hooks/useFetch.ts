import { useState } from 'react';

export function useFetch<T>(url: string) {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string>('');

    const doFetch = () => {
        setIsLoading(true);
        setError('');
        fetch(url)
            .then((response) => response.json())
            .then((data: T) => {
                setData(data);
            })
            .catch(() => {
                setError('Error occurred while loading the data');
            })
            .finally(() => setIsLoading(false));
    };

    return [{ data, error, isLoading }, doFetch] as const;
}
