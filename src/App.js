import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import MovieList from './components/MovieList/movieList';
import Movie from './pages/MovieDetail/Movie';
import SearchResults from './components/Search/SearchResults';
import "./App.css";

function App() {
  return (
    <div className="MyApp">
        <Router>
          <Navbar />
            <Routes>
                <Route path="/FilmFinder/" element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="search/:query" element={<SearchResults />} ></Route>
                <Route path="/*" element={<h1 className="error">Oops....Page Not Found</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;