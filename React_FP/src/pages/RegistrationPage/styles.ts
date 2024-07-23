import { MyColor } from "./../../colors/MyColor";
import styled from "styled-components";

export const MainDiv = styled.div`
  background-color: ${MyColor.colorLightOrange};
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  img {
    position: relative;
    bottom: 30px;
    width: 150px;
  }
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  top: 20px;

  label {
    font-weight: 700;
  }

  div {
    display: flex;
    flex-direction: row;
    height: 20px;
    gap: 40px;

    p {
      position: relative;
      bottom: 16px;
      color: red;
      font-weight: 700;
    }
  }
  button {
    background-color: ${MyColor.colorOrange};
    color: ${MyColor.colorWhite};
    font-size: 16px;
    border: ${MyColor.colorBlack} solid 1px;
    position: relative;
    top: 20px;
  }
`;

export const InputComponent = styled.input`
  padding: 10px;
  font-size: 18px;
  border: ${MyColor.colorBlack} solid 1px;
  border-radius: 5px;
  font-weight: 700;
`;
