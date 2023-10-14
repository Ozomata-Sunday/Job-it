import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const axios = require('axios');

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': 'b9fb21995amshb07944297b3b4a7p17bab6jsnf80aa4328e95',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {
            query: { ...query }
        },

    };

    const fetchdata = async () => {
        setIsLoading(true)

        try {
            const response = await axios.request
                (options);
            setData(response.data.data)
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert("There is an error")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchdata();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchdata();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;