import { AddBasketFoodAction } from "./../../types/redux";
import styled from "styled-components";

export const MainDiv = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0;

  background-color: transparent;
`;

export const BgDiv = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 0.35;
  background-color: black;
  z-index: 4;
`;

export const BasketDiv = styled.div`
  position: absolute;
  width: 70vw;
  height: 85vh;
  background-color: white;
  opacity: 1;
  z-index: 5;
  border-radius: 30px;

  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

  > img {
    width: 30px;
    height: 30px;
    position: relative;
    top: 17px;
    left: 17px;
    padding-bottom: 30px;

    &:hover {
      opacity: 0.75;
      transform: scale(1.03);
      cursor: pointer;
    }
  }

  > div {
    background-color: #575757;

    display: flex;
    position: fixed;
    height: 80px;
    width: 70vw;
    justify-content: space-around;
    align-items: center;
    bottom: 0;
    left: 0;
    border-radius: 0px 0px 30px 30px;

    p {
      color: white;
      font-size: 15;
      font-weight: 700;
    }

    button {
      color: #575757;
      font-weight: 700;

      &:hover {
        opacity: 0.95;
        transform: scale(1.05);
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    overflow: auto;
    height: 350px;
    width: 65vw;
    position: relative;
    bottom: 20px;
    border-radius: 20px;
    padding-top: 20px;

    li {
      display: flex;
      gap: 8px;
      div {
        :nth-child(1) {
          height: 30px;
        }
      }
    }

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    p {
      width: 70px;
      font-size: 10px;
    }

    button {
      font-size: 10px;
      &:hover {
        opacity: 0.9;
        transform: scale(1.07);
      }
    }
  }
`;
