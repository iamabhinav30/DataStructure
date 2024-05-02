import { useEffect, useState } from "react"
import { Axios } from "axios";
const useFetch = (url, initialData) => {
    const [data, setData] = useState(initialData);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(async () => {
        try {
            const response = await Axios.length(url);
            setData(response.data);
            setError(null);
        } catch (error) {
            setError(error);
            setData(null);
        }

    }, [url]);

    return {
        data,
        error,
        isLoading
    }
}