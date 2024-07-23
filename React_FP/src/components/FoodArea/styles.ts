import styled, { css } from "styled-components";
import { MyColor } from "../../colors/MyColor";

interface RoundDivProps {
  colorStyle: "orange" | "green";
}

const shouldForwardProp = (prop: string) => !["colorStyle"].includes(prop);

export const MainDiv = styled.div`
  display: flex;
`;

export const RoundDiv = styled.div.withConfig({
  shouldForwardProp,
})<RoundDivProps>`
  background-color: ${({ colorStyle }) =>
    colorStyle === "orange"
      ? MyColor.colorLightOrange
      : colorStyle === "green"
      ? MyColor.colorLightGreen
      : "transparent"};

  border-radius: 50%;
  width: 1300px;
  height: 1150px;
  position: absolute;
  top: -723px;
  left: 271.5px;
`;

export const BgImg = styled.img`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  top: 0px;
  left: 0px;
`;

export const TitleDiv = styled.div.withConfig({
  shouldForwardProp,
})<RoundDivProps>`
  z-index: 2;
  position: relative;
  left: 105px;
  top: 120px;
  height: 500px;

  :nth-child(1) {
    color: ${({ colorStyle }) =>
      colorStyle === "orange"
        ? MyColor.colorOrange
        : colorStyle === "green"
        ? MyColor.colorGreen
        : "transparent"};
    font-size: 38px;
    font-weight: 700;
  }

  h1 {
    width: 400px;
  }

  :nth-child(3) {
    width: 400px;
  }

  button {
    background-color: ${({ colorStyle }) =>
      colorStyle === "orange"
        ? MyColor.colorOrange
        : colorStyle === "green"
        ? MyColor.colorGreen
        : "transparent"};
    color: white;
    font-weight: 700;
    border-radius: 25px;
    padding: 12px 25px;

    &:hover {
      opacity: 0.8;
    }
  }

  :nth-child(6) {
    position: relative;
    top: 40px;
  }
`;

export const StarsList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  padding-bottom: 15px;
  margin: 0;

  li {
    width: 20px !important;
    position: relative;
    display: flex;
    justify-content: center;
  }

  img {
    width: 20px;
  }
`;

export const FoodImageDiv = styled.div`
  position: relative;
  left: 225px;
  top: 180px;
`;

export const FoodImageDivImages = styled.div`
  position: relative;
  z-index: 1;

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    bottom: 150px;
    right: 45px;
    width: 600px;
    gap: 40px;

    img {
      width: 85px;
      height: 85px;
      border-radius: 50%;
    }

    :nth-child(1) > img {
      position: relative;
      right: 10px;
      bottom: 20px;
    }
    :nth-child(2) > img {
      position: relative;
      bottom: 140px;
      right: 45px;
    }
    :nth-child(3) > img {
      position: relative;
      bottom: 190px;
      right: 10px;
    }
    :nth-child(4) > img {
      position: relative;
      bottom: 134px;
      left: 30px;
    }
    :nth-child(5) > img {
      position: relative;
      bottom: 7px;
    }
  }
`;
export const FoodImageDivController = styled.div`
  position: relative;
  z-index: 2;
  left: 44px;

  display: flex;
  gap: 50px;

  bottom: 430px;

  :nth-child(2) {
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }

  :nth-child(1),
  :nth-child(3) {
    height: 60px;
    position: relative;
    top: 200px;
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
`;
