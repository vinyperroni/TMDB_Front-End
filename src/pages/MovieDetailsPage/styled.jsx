import styled from "styled-components";

export const MovieDetailsContainer = styled.div`
  > div {
    position: relative;
    padding: 0 8vw;
    box-sizing: border-box;
  }
  @media (max-width: 850px) {
    position: static;
  }
  @media (max-width: 550px) {
  }
`;

export const BlueArea = styled.section`
  box-sizing: border-box;
  min-height: 600px;
  background-color: #2d0c5e;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 850px) {
    position: static;
    height: fit-content;
  }
  @media (max-width: 550px) {
  }
`;

export const MovieDetails = styled.div`
  position: absolute;
  top: 72px;
  padding: 0 8vw;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  column-gap: 33px;

  @media (max-width: 850px) {
    margin-top: 34px;
    margin-bottom: 40px;
    width: 100vw;
    box-sizing: border-box;
    flex-direction: column;
    gap: 40px;
    position: static;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 550px) {
  }

  #details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    > p {
      margin: 0;
      font-style: normal;
    }

    #title {
      grid-area: title;
      font-weight: 700;
      font-size: 32px;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    #sub-title {
      margin-top: 8px;
      margin-bottom: 16px;
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      > p {
        margin: 0;
        font-weight: 400;
        font-size: 18px;
      }

      /* @media (max-width: 850px) {
      }
      @media (max-width: 550px) {
        flex-direction: column;
        gap: 10px;
      } */
    }

    > section {
      display: flex;
      gap: 12px;
    }

    #rating {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 100px;
    }

    #overview-title {
      margin-top: 33px;
      margin-bottom: 8px;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
    }

    #overview {
      text-align: justify;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;

      @media (max-width: 850px) {
        overflow: visible;
        display: -webkit-box;
        -webkit-line-clamp: 20; // Quantidade de linhas
        -webkit-box-orient: vertical;
      }
      @media (max-width: 550px) {
      }
    }

    #crew {
      display: flex;
      flex-wrap: wrap;
      column-gap: 10px;
      row-gap: 23px;
      margin-top: 24px;
      overflow: hidden;

      max-height: 140px;

      > div {
        width: 150px;
        > p {
          margin: 0;
          margin-bottom: 5px;
        }
        #name {
          font-weight: 700;
          font-size: 16px;
        }
        #job {
          font-weight: 400;
          font-size: 14px;
        }
      }
    }
  }

  #poster {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 383px;
    height: 574px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    background-color: #ffffff11;
    border-radius: 8px;
    @media (max-width: 850px) {
      min-width: 300px;
      height: 490px;
    }
    @media (max-width: 550px) {
      min-width: 186px;
      height: 279px;
    }
    > img {
      width: 100%;
      height: 100%;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      border-radius: 8px;
      @media (max-width: 850px) {
        width: 300px;
        height: 490px;
      }
      @media (max-width: 550px) {
        width: 186px;
        height: 279px;
      }
    }
  }
  /* > img {
    max-width: 383px;


    @media (max-width: 850px) {
      max-width: 300px;
    }
    @media (max-width: 550px) {
      max-width: 186px;
    }
  } */
`;

export const CastContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 74px;
  > p {
    margin: 0;

    font-weight: 700;
    font-size: 28px;
  }
  > div {
    margin-top: 24px;
    padding-bottom: 26px;
    display: flex;
    overflow: scroll;
    gap: 16px;
  }
`;

export const TrailerContainer = styled.div`
  margin: 0 auto;
  margin-top: 39px;
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  > p {
    margin: 0;
    font-weight: 700;
    font-size: 28px;
  }
  > iframe {
    width: 907px;
    height: 510px;
    @media (max-width: 1000px) {
      width: 600px;
      height: 400px;
    }
    @media (max-width: 850px) {
      width: 300px;
      height: 200px;
    }
    @media (max-width: 550px) {
    }
  }
`;

export const RecomendationsContainer = styled.div`
  margin: 0 auto;
  margin-top: 39px;
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  > p {
    margin: 0;
    font-weight: 700;
    font-size: 28px;
  }
  > div {
    display: flex;
    overflow: scroll;
    gap: 32px;
  }
  img {
    width: 200px;
    @media (max-width: 850px) {
      max-width: 156px;
    }
  }
`;
