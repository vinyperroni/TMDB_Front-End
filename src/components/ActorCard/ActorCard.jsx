import React from "react";
import { ActorCardContainer } from "./styled";
import { useNavigate } from "react-router-dom";

const ActorCard = (props) => {
  const { actor } = props;

  const navigate = useNavigate();

  return (
    <ActorCardContainer>
      <img
        src={`https://image.tmdb.org/t/p/w342/${actor.profile_path}`}
        alt="Profile Photo"
      />
      <p id="name">{actor.name}</p>
      <p id="character">{actor.character}</p>
    </ActorCardContainer>
  );
};

export default ActorCard;
