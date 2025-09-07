import React from 'react'
import tag from '../components/Tag';
import { useState, useEffect } from 'react';
import axios from 'axios';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&random_id=${Math.random()}`;
const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

const useGif = (tag) => {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);

    async function fetchData(tag) {
        try {
            setLoading(true);
            const { data } = await axios.get(tag ? tagMemeUrl : randomMemeUrl);
            setGif(data.data.images.downsized_large.url);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { gif, loading, fetchData }


}

export default useGif
