import styled from "styled-components";
import { MyColor } from "../../colors/MyColor";

export const DesignDiv = styled.div`
  background-color: ${MyColor.colorLightGreen};
  width: 100vw;
  height: 100vh;
  padding-top: 1px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    padding: 50px;
    padding-top: 30px;
    background-color: ${MyColor.colorGreen};
    border-radius: 2cqw;
    position: relative;
    top: 30px;

    color: ${MyColor.colorWhite};
    font-size: 23px;

    div {
      display: flex;
      gap: 8px;

      :nth-child(2) {
        font-weight: 700;
      }
    }
  }

  button {
    color: ${MyColor.colorGreen};
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    top: 20px;
    &:hover {
      opacity: 0.95;
      transform: translate(-50%, 0) scale(1.05);
    }
  }
`;
