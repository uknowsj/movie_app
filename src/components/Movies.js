import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import {Link} from "react-router-dom";

function Movie({id,title,summary,year,poster,genres}){ //React.Component 를 상속받을 필요없음. state 안쓸거니까
    return(
        <Link to={{
            pathname:`/movie/${id}`,
            state:{
                title,
                summary,
                year,
                poster,
                genres
            }
        }}>
            <div className="movie">
                <img src={poster} alt={title} title={title}></img>
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((genre,index)=>(
                            <li key={index} className="genres__genre">{genre}</li>
                        ))}
                    </ul>

                    <p className="summary">{summary.slice(0,180)}...</p>
                </div>
            </div>
        </Link>
    )
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
    year : PropTypes.number.isRequired
}

export default Movie