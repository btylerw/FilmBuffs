import { useEffect } from "react";
import { useState } from "react";
import { options } from "./options";

export const GetData = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState('')
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/550?language=en-US', options)
        .then(response => response.json())
        .then(response => setData(response))
        .catch(err => console.error(err))
        .finally(setLoading(false));
    }, []);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        setSearch(formJson.Title);
        console.log(search)
    }
    
    if (loading) return <h1>Loading...</h1>
    return (
        <>
            <h1>{data.title}</h1>
            <form onSubmit={handleSubmit}>
                <input name="Title" type="text" placeholder="Enter Movie Title"/>
                <button type="submit">Submit</button>
            </form>
            <h1>{search}</h1>
        </>
    )
}


