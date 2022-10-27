import React from "react";
import { MovieCardContainer } from "./styled";
import { useNavigate } from "react-router-dom";

const MovieCard = (props) => {
  const { movie } = props;

  const navigate = useNavigate();

  const completeDate = new Date(movie.release_date)
    .toDateString()
    .toUpperCase();
  const dateSplit = completeDate.split(" ");
  const date = `${dateSplit[1]} ${dateSplit[2]} ${dateSplit[3]}`;

  return (
    <MovieCardContainer onClick={() => navigate(`/movie/${movie.id}`)}>
      <img
        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
        alt="Movie Cover"
      />
      <p id="title">{movie.title}</p>
      <p id="releaseDate">{date}</p>
    </MovieCardContainer>
  );
};

export default MovieCard;
