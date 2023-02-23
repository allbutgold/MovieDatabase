import './movieData.css'
import movies from '../../data/MoviesArray.js';
import { useState, useMemo } from 'react';



function SortMovies() {
    const [sorting, setSorting] = useState(null)
console.log(movies)
    const sortedMovies = useMemo(() => {
        if(sorting === 'year') {
            return [...movies.sort((a, b) => a.year - b.year)];
        } else if (sorting === 'duration') {
            return [...movies.sort((a, b) => a.duration - b.duration)];
        } else if (sorting === 'rating') {
            return [...movies.sort((a, b) => a.rate - b.rate)];
        } else if (sorting === 'a-z') {
            return [...movies.sort((a, b) => a.title.localeCompare(b.title))];
        }  
        
        else if (sorting === 'z-a') {
            return [...movies.sort((a, b) => b.title.localeCompare(a.title))];
        } else {
            return movies;
        } 
    }, [sorting]);

    return (
        <article className='container'>
            <div className='buttonContainer'>
                <h1>MOVIE DATABASE</h1>

                <div className='buttons'>
                <h3>Sort by:</h3>
                <button onClick={() => setSorting('year')}>YEAR</button>
                <button onClick={() => setSorting('rating')}>RATING</button>
                <button onClick={() => setSorting('a-z')}>A - Z</button>
                <button onClick={() => setSorting('z-a')}>Z - A</button>
                </div>

            </div>
                
            
        
        {sortedMovies.map((movie) => (
            <article className='movieContainer'>
            <div className='movieCard'>
                <h2>{movie.title}</h2>
                <p>{movie.year}</p>
                <p>{movie.director}</p>
                <p>{movie.duration}</p>
                {movie.genre.map((movie) => {
                return <p>{movie}</p>})}
                <p>{movie.rate}</p>
            </div>
            </article>
        
    ))}
    </article>
    );
}


export default SortMovies;