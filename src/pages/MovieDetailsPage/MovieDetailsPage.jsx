import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Header from "../../components/Header/Header";
import ActorCard from "../../components/ActorCard/ActorCard";
import MovieCard from "../../components/MovieCard/MovieCard";
import CircularProgressWithLabel from "../../components/RatingProgress/RatingProgress";

import { CircularProgress } from "@mui/material";

import {
  BlueArea,
  CastContainer,
  MovieDetails,
  MovieDetailsContainer,
  RecomendationsContainer,
  TrailerContainer,
} from "./styled";

import { getMovieData } from "../../data/getMovieData";

const MovieDetailsPage = () => {
  const pathParams = useParams();

  const [movieDetails, setMovieDetails] = useState({
    title: null,
    posterPath: null,
    releaseDate: { date: null, country: null, certification: null },

    genres: [],
    runtime: null,
    rating: null,
    cast: [],
    crew: [],
    overview: null,
    video: [],
    recomendations: [],
  });

  useEffect(() => {
    window.scroll(0, 0);
    getMovieData(pathParams.id, setMovieDetails);
  }, [pathParams.id]);

  return (
    <>
      <Header></Header>

      <MovieDetailsContainer>
        <BlueArea>
          {movieDetails ? (
            <MovieDetails>
              <div id="poster">
                {movieDetails.posterPath ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movieDetails.posterPath}`}
                    alt="Cover"
                  />
                ) : (
                  <CircularProgress />
                )}
              </div>

              <div id="details">
                {movieDetails.title && movieDetails.releaseDate.date ? (
                  <p id="title">
                    {movieDetails.title} (
                    {movieDetails.releaseDate.date.split("/")[2]})
                  </p>
                ) : (
                  <p id="title">Titulo (ANO)</p>
                )}
                <div id="sub-title">
                  {movieDetails.releaseDate.certification ? (
                    <p>
                      {movieDetails.releaseDate.certification}{" "}
                      {isNaN(Number(movieDetails.releaseDate.certification))
                        ? ` `
                        : `anos `}
                      &bull;
                    </p>
                  ) : (
                    <p>{`Classificação Indicativa `} &bull;</p>
                  )}{" "}
                  <p>
                    {movieDetails.releaseDate.date
                      ? movieDetails.releaseDate.date
                      : `Data de Lançamento`}{" "}
                    (
                    {movieDetails.releaseDate.country
                      ? movieDetails.releaseDate.country
                      : `PAÍS`}
                    ) &bull;{" "}
                  </p>
                  <p>
                    {movieDetails.genres && movieDetails.genres.length > 0
                      ? movieDetails.genres.toString().replaceAll(",", ", ")
                      : `Géneros`}{" "}
                    &bull;{" "}
                  </p>
                  <p>
                    {movieDetails.runtime
                      ? movieDetails.runtime
                      : `Tempo de tela`}
                  </p>
                </div>

                <section>
                  <CircularProgressWithLabel
                    value={movieDetails.rating ? movieDetails.rating * 10 : 100}
                    id="rating"
                  />
                  <p>
                    Avaliação dos <br /> usuários
                  </p>
                </section>
                <p id="overview-title">Sinopse</p>
                <p id="overview">
                  {movieDetails.overview
                    ? movieDetails.overview
                    : "Sinopse do filme"}{" "}
                </p>
                <div id="crew">
                  {movieDetails.crew
                    ? movieDetails.crew.map((item) => {
                        if (
                          item.job === "Characters" ||
                          item.job === "Director" ||
                          item.job === "Screenplay"
                        ) {
                          return (
                            <div key={item.id}>
                              <p id="name">{item.name}</p>
                              <p id="job">{item.job}</p>
                            </div>
                          );
                        } else {
                          return false;
                        }
                      })
                    : "Equipe de Produção"}
                </div>
              </div>
            </MovieDetails>
          ) : null}
        </BlueArea>

        <CastContainer>
          <p>Elenco Original</p>
          <div>
            {movieDetails.cast &&
              movieDetails.cast.map((actor) => (
                <ActorCard key={actor.id} actor={actor} />
              ))}
          </div>
        </CastContainer>

        {movieDetails.video && (
          <TrailerContainer>
            <p>{movieDetails.video.type}</p>
            <iframe
              src={`https://www.youtube.com/embed/${movieDetails.video.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </TrailerContainer>
        )}

        {movieDetails.recomendations[0] && (
          <RecomendationsContainer>
            <p>Recomendações</p>
            <div>
              {movieDetails.recomendations.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          </RecomendationsContainer>
        )}
      </MovieDetailsContainer>
    </>
  );
};

export default MovieDetailsPage;
