import styled from "styled-components";

export const ActorCardContainer = styled.div`
  background-color: #ffff;
  min-width: 191px;
  min-height: 336px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  > img {
    width: 175px;
    height: 222px;
    border-radius: 4px;
    object-fit: cover;
    margin: 8px;
  }
  > p {
    padding: 8px;
    margin: 0;
  }
  #name {
    font-weight: 700;
    font-size: 18px;
  }
`;
