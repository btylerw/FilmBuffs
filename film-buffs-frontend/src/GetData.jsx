import { useEffect } from "react";
import { useState } from "react";

export const GetData = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState('');
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer ' + `${import.meta.env.VITE_REACT_APP_API_KEY}`
        }
      };

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/550?language=en-US', options)
        .then(response => response.json())
        .then(response => setData(response))
        .catch(err => console.error(err))
        .finally(setLoading(false));
    }, []);
    
    if (loading) return <h1>Loading...</h1>
    return (
        <>
            <h1>{data.title}</h1>
        </>
    )
}


