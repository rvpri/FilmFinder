import React from "react"
import "./Cards.css"
import { Link } from "react-router-dom";
import bgimg from "./picture.png";

const Cards = ({movie}) => {

    const API_IMG = "https://image.tmdb.org/t/p/w500/";
    console.log(API_IMG + movie.poster_path)

    const handleImageError = (e) => {
        e.target.src = bgimg;
    }

    return <>
        <div className='card'>
            <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
                <div className='poster'>
                    <img src={movie.poster_path ? API_IMG + movie.poster_path : {bgimg}} alt=""
                        onError={handleImageError}
                    />
                </div>
                <div className='info'>
                    <div className='title'><span>{movie.title}</span></div> 
                    <div className='vote'><i className="fas fa-star" style={{color: "gold"}}></i><span>{movie.vote_average}</span></div>
                </div>
            </Link>
        </div>
    </>
}

export default Cards
