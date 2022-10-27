import styled from "styled-components";

export const MovieCardContainer = styled.div`
  width: 200px;
  min-height: 380px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > p {
    margin: 0;
  }
  > img {
    width: 100%;
    border: 1px solid #e7e7e7;
    border-radius: 4px;
  }
  #releaseDate {
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #646464;
  }
  #title {
    text-decoration: none;
    color: black;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  @media (max-width: 850px) {
    width: 156px;
    min-height: 310px;
    #releaseDate {
      font-size: 12px;
    }
    #title {
      font-size: 14px;
    }
  }

  /* @media (max-width: 550px) {
    justify-content: flex-start;
  } */
`;
