import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import Search from "../Search/Search"
import logo from './logo.png';

const Navbar = () => {
    return (
        <div className="header">
            <div className="headermain">
            <div className="headercontent">
            <Link to="/"><img src={logo} alt=""  /> </Link>
            <Link to="/movies/top_rated" ><span>Top Rated</span></Link>
            <Link to="/movies/upcoming" ><span>Upcoming</span></Link>
            </div>
            <div className="search">
            <Search />
            </div>
          </div>
      
        </div>
    )
}

export default Navbar