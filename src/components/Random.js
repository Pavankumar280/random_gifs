import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);

  // async function fetchData() {
  //   try {
  //     setLoading(true);
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&random_id=${Math.random()}`;
  //     const { data } = await axios.get(url);
  //     setGif(data.data.images.downsized_large.url);
  //   } catch (err) {
  //     console.error(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => s{
  //   fetchData();
  // }, []);

  const{gif, loading, fetchData} = useGif();

  function clickHnadler() {
    fetchData();
  }

  return (
    <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[12px] text-2xl underline font-bold uppercase">A Random Gif</h1>

      {loading ? <Spinner /> : gif && <img src={gif} width="450" alt="Random gif" />}

      <button
        onClick={clickHnadler}
        className="w-10/12 bg-yellow-400 text-lg py-2 rounded-lg mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
