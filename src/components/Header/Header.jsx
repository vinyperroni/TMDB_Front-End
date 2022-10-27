import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderContainer } from "./styled";

import logo from "../../assets/logo-header.svg";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <img src={logo} alt="logo" onClick={() => navigate("/1")} />
    </HeaderContainer>
  );
};

export default Header;
