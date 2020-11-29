import { useEffect, useState } from 'react';

export function useStorage<T>(key: string, defaultValue: T) {
    const [value, setValue] = useState<T>(() => {
        const initialValue = localStorage.getItem(key);
        return initialValue === undefined || initialValue === null
            ? defaultValue
            : JSON.parse(initialValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue] as const;
}
