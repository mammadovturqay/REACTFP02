import React from "react";
import { ButtonsDiv, HeaderComponent } from "./styles";
import Logo from "../../assets/images/additionImage/Logo.png";
import BasketIcon from "../../assets/images/additionImage/BasketIcon.png";
import ProfilIcon from "../../assets/images/additionImage/profilIcon.png";
import { NavLink, useNavigate } from "react-router-dom";
import "./stylesCss.css";

interface Props {
  setBasketOpened: (value: boolean) => void;
}

const Header: React.FC<Props> = ({ setBasketOpened }) => {
  const navigate = useNavigate();

  const enterBasketEvent = () => {
    setBasketOpened(true);
  };

  const enterProfil = () => {
    navigate("/profil", { replace: true });
  };

  const handleNavigation = (path: string) => {
    navigate(path, { replace: true });
  };

  return (
    <HeaderComponent>
      <img src={Logo} alt="Logo" />
      <ButtonsDiv>
        <p className="active" onClick={() => handleNavigation("/breakfast")}>
          Breakfast
        </p>
        <p className="active" onClick={() => handleNavigation("/lunch")}>
          Lunch
        </p>
        <p className="active" onClick={() => handleNavigation("/dinner")}>
          Dinner
        </p>
      </ButtonsDiv>
      <div>
        <img src={BasketIcon} alt="BasketIcon" onClick={enterBasketEvent} />
        <img src={ProfilIcon} alt="ProfilIcon" onClick={enterProfil} />
      </div>
    </HeaderComponent>
  );
};

export default Header;
