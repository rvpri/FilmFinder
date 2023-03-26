import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../Card/Cards"
import axios from 'axios';

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        const getData = async () => {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`);
          setMovieList(response.data.results);
        };
        getData();
      }, [type]);

    const getTitle = () => {
        if (type === "top_rated") {
            return "TOP RATED"
        } else {
            return type ? type.toUpperCase() : "POPULAR"
        }
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{getTitle()}</h2>
            <div className="movie_cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList