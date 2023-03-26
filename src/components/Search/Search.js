import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Search.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${query}`);
  
    setQuery('');
  };

  return (
    <div >
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
        required
      />
       <span className="search-icon" onClick={handleSubmit}>
        <FontAwesomeIcon icon={faSearch} />
      </span>
    
    </form>
    </div>
  );
};

export default Search;
