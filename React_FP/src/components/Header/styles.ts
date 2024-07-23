import { MyColor } from "../../colors/MyColor";
import { MainDiv } from "./../../pages/RegistrationPage/styles";
import styled from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-around;
  gap: 100px;
  width: 1313px;
  z-index: 3;

  position: fixed;
  top: 0;
  padding-top: 40px;

  img {
    height: 30px;
  }

  div {
    display: flex;
    gap: 25px;

    img {
      height: 25px;

      &:hover {
        opacity: 0.8;
        transform: scale(1.1);
        cursor: pointer;
      }
    }
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 270px;
  position: relative;
  right: 150px;
  bottom: 10px;
  p {
    padding: 0;
    background-color: transparent;
    border: 0px;
    &:hover {
      opacity: 0.8;
      transform: scale(1.05);
      cursor: pointer;
    }
    color: ${MyColor.colorBlack};
  }
`;
