import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./SearchResults.css"
import Cards from '../Card/Cards';

const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d95e0cdf1c3ab3e6ae0b406f1cdfb2b1&query=${query}`);
      setResults(response.data.results);
    };
    fetchData();
  }, [query]);

  return (
    <div>
      <div className='page_title'><h2 >Seach results for "{query}"</h2></div>
      <div className='movie__list'>
      <div className="movie_cards">
        {results.map((movie) => (
          <Cards movie={movie} />
         ))}
      </div>
      </div>
    </div>
  );
};

export default SearchResults;





