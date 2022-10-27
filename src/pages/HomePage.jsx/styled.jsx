import styled from "styled-components";

export const HomePageContainer = styled.div``;

export const FilterContainer = styled.div`
  min-height: 449px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  background-color: #2d0c5e;
  > h1 {
    margin: 0;
    padding: 0;
    margin-top: 80px;
    font-size: 48px;
    max-width: 60vw;
    @media (max-width: 850px) {
      max-width: 90vw;
      text-align: left;
    }
    @media (max-width: 550px) {
      font-size: 24px;
      margin-top: 40px;
    }
  }
  > p {
    margin: 0;
    margin-top: 40px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    @media (max-width: 850px) {
      width: 90vw;
      text-align: left;
    }
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  gap: 12px;
  max-width: 80vw;
  flex-wrap: wrap;
  justify-content: center;
  margin: 16px 0;
  > button {
    padding: 8px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
    border-radius: 4px;
    border: none;
    font-size: 16px;
    font-weight: 700;
    color: #323232;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    > p {
      margin: 0;
    }
    > img {
      cursor: pointer;
    }
  }
  #selected {
    background-color: #d18000;
    color: white;
  }
  #unSelected {
    cursor: pointer;
  }

  @media (max-width: 850px) {
    max-width: 90vw;
  }

  @media (max-width: 550px) {
    justify-content: flex-start;
  }
`;

export const MoviesContainer = styled.div`
  margin: 0 auto;
  margin-top: 32px;
  max-width: 90vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 32px;
  @media (max-width: 850px) {
    max-width: 100vw;
    gap: 16px;
  }
`;

export const Pagination = styled.div`
  margin: 80px;
  display: flex;
  gap: 30px;
  justify-content: center;
  > a {
    cursor: pointer;
    color: #5c16c5;
    text-decoration: none;
    font-weight: bold;
  }
  #selected {
    text-decoration: none;
    font-weight: bold;
    color: grey;
  }
  @media (max-width: 850px) {
    gap: 20px;
  }
`;

export const A = styled.a``;
