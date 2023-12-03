// import { axios } from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from "axios"

export default function useFetch(url, method, body = null) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsPending(true);
                const response = await axios({
                    method,
                    url,
                    data: body ? JSON.stringify(body) : null,
                });
                const json = response.data;
                setData(json);
            } catch(error) {
                setError(error)
            } finally {
                setIsPending(false);
            }
        } 

        fetchData();
    }, [url, method, body])

  return {data, isPending, error} 
}
