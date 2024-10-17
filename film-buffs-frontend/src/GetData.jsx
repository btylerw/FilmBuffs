import { useEffect } from "react";
import { useState } from "react";
import { options } from "./options";

export const GetData = () => {
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState(null);
    const [film, setFilm] = useState('');
    const [filmDate, setFilmDate] = useState('');
    const [image, setImage] = useState('');
    const url = 'https://image.tmdb.org/t/p/original';

    // Whenever search is updated, searches for a movie using the value of search as a query
    useEffect(() => {
        if (search) {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => {
            // Takes the retrieved title and release date and sets our states to them
            console.log(response);
            setFilm(response.results[0].title);
            setFilmDate(response.results[0].release_date);
            // Concatenates result into image URL
            setImage(url + response.results[0].poster_path);
        })
        .catch(err => console.error(err));
        }
    }, [search]);

    // Retrieves the value from our search bar and parses it to be ready to insert into our API call URL
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        // Encodes our search value to insert into URL: 'Fight Club' => 'fight%20club'
        setSearch(encodeURIComponent(formJson.Title.toLowerCase()));
    }
    
    if (loading) return <h1>Loading...</h1>
    return (
        <>
            <h1>{film}</h1>
            <h1>{filmDate}</h1>
            <img src={image} style={{height: '500px', width: 'auto'}} alt="" />
            <form onSubmit={handleSubmit}>
                <input name="Title" type="text" placeholder="Enter Movie Title"/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}