import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Header from "../../components/Header/Header";
import MovieCard from "../../components/MovieCard/MovieCard";
import { CircularProgress } from "@mui/material";

import {
  CategoriesContainer,
  FilterContainer,
  MoviesContainer,
  Pagination,
} from "./styled";

import { BASE_URL, API_KEY, LANGUAGE } from "../../constants/constants";

import x from "../../assets/x-button.svg";
import next from "../../assets/next-page.svg";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [categoriesFilter, setCategoriesFilter] = useState([]);

  const pathParams = useParams();

  const [page, setPage] = useState();
  const [pages, setPages] = useState([]);

  const limitPage = 500;

  const [moviesList, setMoviesList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
    getPopularMovies(Number(pathParams.page) || 1);
    setPage(Number(pathParams.page) || 1);
  }, [pathParams.page]);

  const getPopularMovies = (pageNumber = page) => {
    axios
      .get(
        `${BASE_URL}movie/popular?api_key=${API_KEY}&page=${pageNumber}&language=${LANGUAGE}`
      )
      .then((response) => {
        const newMoviesList = response.data.results;
        setMoviesList(newMoviesList);
        getPages(pageNumber);
      })
      .catch((error) => console.log(error.message));
  };

  const getPages = (pageNumber = page) => {
    const newPages = [];
    for (let index = pageNumber; index <= pageNumber + 4; index++) {
      newPages.push(index);
    }
    setPages(newPages);
  };

  const changePage = (page) => {
    window.scroll(0, 500);
    navigate(`/${page}`);
    setPage(page);
    getPopularMovies(page);
  };

  const getCategories = () => {
    axios
      .get(
        `${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=${LANGUAGE}`
      )
      .then((response) => {
        const newCategories = response.data.genres.map((category) => {
          return {
            ...category,
            selected: false,
          };
        });
        setCategories(newCategories);
      })
      .catch((error) => console.log(error.message));
  };

  const onClickCategory = (categoryId) => {
    const newCategories = categories.map((category) => {
      if (category.id === categoryId) {
        return {
          ...category,
          selected: !category.selected,
        };
      }

      return category;
    });

    setCategories(newCategories);

    const newSelectedCategories = [];

    for (const category of newCategories) {
      if (category.selected) {
        newSelectedCategories.push(category.id);
      }
    }

    setCategoriesFilter(newSelectedCategories);
  };

  return (
    <>
      <Header></Header>
      <FilterContainer>
        <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já</h1>
        <p>FILTRE POR:</p>
        <CategoriesContainer>
          {categories.length > 0 ? (
            categories.map((category) => {
              if (category.selected) {
                return (
                  <button disabled id="selected" key={category.id}>
                    <p>{category.name}</p>
                    <img
                      onClick={() => onClickCategory(category.id)}
                      src={x}
                      alt="exclude"
                    />
                  </button>
                );
              } else {
                return (
                  <button
                    id="unSelected"
                    onClick={() => onClickCategory(category.id)}
                    key={category.id}
                  >
                    <p>{category.name}</p>
                  </button>
                );
              }
            })
          ) : (
            <CircularProgress />
          )}
        </CategoriesContainer>
      </FilterContainer>
      {categoriesFilter.length > 0 ? (
        <MoviesContainer>
          {moviesList.length > 0 ? (
            moviesList.filter((movie) => {
              for (const genre of movie.genre_ids) {
                if (categoriesFilter.includes(genre)) {
                  return true;
                }
              }
              return false;
            }).length > 0 ? (
              moviesList
                .filter((movie) => {
                  for (const genre of movie.genre_ids) {
                    if (categoriesFilter.includes(genre)) {
                      return true;
                    }
                  }
                  return false;
                })
                .map((movie) => <MovieCard movie={movie} key={movie.id} />)
            ) : (
              <p>Não existem filmes dessa(s) categorias na pagina atual</p>
            )
          ) : (
            <CircularProgress />
          )}
        </MoviesContainer>
      ) : (
        <MoviesContainer id="movies">
          {moviesList.length > 0 ? (
            moviesList.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))
          ) : (
            <p>Loading</p>
          )}
        </MoviesContainer>
      )}
      <Pagination>
        {page !== 1 && <a onClick={() => changePage(1)}>1</a>}

        {pages.length > 0 &&
          pages
            .filter((pageNumber) => pageNumber <= limitPage)
            .map((pageNumber) => {
              if (pageNumber !== page) {
                return (
                  <a onClick={() => changePage(pageNumber)} key={pageNumber}>
                    {pageNumber}
                  </a>
                );
              } else {
                return (
                  <a id="selected" key={pageNumber}>
                    {pageNumber}
                  </a>
                );
              }
            })}

        {page < limitPage && (
          <a onClick={() => changePage(page + 1)}>
            <img src={next} alt="next-page" />
          </a>
        )}
        {page < limitPage && (
          <a onClick={() => changePage(limitPage)}>Ultima</a>
        )}
      </Pagination>
    </>
  );
};

export default HomePage;
