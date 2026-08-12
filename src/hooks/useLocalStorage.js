import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
    const storedValue = localStorage.getItem(key);

    const [value, setValue] = useState(
        storedValue !== null ? storedValue : initialValue
    )

    useEffect(() => {
        if (value !== null){
        localStorage.setItem(key, value);
        }
    }, [key, value])

    return [value, setValue]

}
