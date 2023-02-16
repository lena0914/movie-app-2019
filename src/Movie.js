import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

const Movie = ({ year, title, summary, poster, genres }) => {
  return (
    <div className="movie">
      <img className="movie__img" src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{`${title} (${year})`}</h3>
        <ul className="genres">
          {genres.map((genre, i) => (
            <li key={genre} className="genres__genre">
              {genre}
              {i !== genres.length - 1 && ","}
            </li>
          ))}
        </ul>
        <p className="movie__summary">
          {summary.length > 200 ? `${summary.slice(0, 200)}...` : summary}
        </p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
