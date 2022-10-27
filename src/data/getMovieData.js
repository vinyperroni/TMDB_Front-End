import axios from "axios";

import { API_KEY, BASE_URL, COUNTRY, LANGUAGE } from "../constants/constants";

export const getMovieData = (id, setMovieDetails) => {
  const detailsUrl = `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=${LANGUAGE}`;
  const creditsUrl = `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=${LANGUAGE}`; // cast
  const recomendationsUrl = `${BASE_URL}movie/${id}/recommendations?api_key=${API_KEY}&language=${LANGUAGE}`; // recomendations
  const releaseDatesUrl = `${BASE_URL}movie/${id}/release_dates?api_key=${API_KEY}&language=${LANGUAGE}`; // release dates
  const videosUrl = `${BASE_URL}movie/${id}/videos?api_key=${API_KEY}&language=${LANGUAGE}`;

  axios
    .get(detailsUrl)
    .then((response) => {
      setMovieDetails((prevState) => ({
        ...prevState,
        title: response.data.title,
        posterPath: response.data.poster_path,
        overview: response.data.overview,
        runtime: convertRuntime(response.data.runtime),
        genres: response.data.genres.map((genre) => genre.name),
        rating: response.data.vote_average,
      }));
    })
    .catch((error) => console.log(error.message));

  axios
    .get(creditsUrl)
    .then((response) => {
      setMovieDetails((prevState) => ({
        ...prevState,
        cast: response.data.cast,
        crew: response.data.crew,
      }));
    })

    .catch((error) => console.log(error.message));

  axios
    .get(recomendationsUrl)
    .then((response) => {
      setMovieDetails((prevState) => ({
        ...prevState,
        recomendations: response.data.results,
      }));
    })
    .catch((error) => console.log(error.message));

  axios
    .get(releaseDatesUrl)
    .then((response) => {
      const filteredResponse =
        response.data.results.filter(
          (item) => item.iso_3166_1 === COUNTRY
        )[0] ||
        response.data.results.filter((item) => item.iso_3166_1 === "US")[0] ||
        response.data.results[0];

      setMovieDetails((prevState) => ({
        ...prevState,
        releaseDate: {
          date: new Date(filteredResponse.release_dates[0].release_date)
            .toLocaleString()
            .split(" ")[0],
          certification: filteredResponse.release_dates[0].certification,
          country: filteredResponse.iso_3166_1,
        },
      }));
    })
    .catch((error) => console.log(error.message));

  axios
    .get(videosUrl)
    .then((response) => {
      const trailers = response.data.results.filter(
        (video) => video.type === "Trailer"
      );
      const teasers = response.data.results.filter(
        (video) => video.type === "Teaser"
      );

      const others = response.data.results.filter(
        (video) => video.type !== "Teaser" && video.type !== "Trailer"
      );

      setMovieDetails((prevState) => ({
        ...prevState,
        video: trailers[0] || teasers[0] || others[0] || "",
      }));
    })
    .catch((error) => console.log(error.message));
};

const convertRuntime = (runtime) => {
  let minutes = runtime;
  let hours = 0;

  while (minutes > 60) {
    hours++;
    minutes = minutes - 60;
  }

  return `${hours}h ${minutes}m`;
};
