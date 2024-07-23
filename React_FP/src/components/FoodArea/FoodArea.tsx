import React, { useEffect, useState } from "react";
import { FoodType } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import {
  getFoodsBreakfast,
  getFoodsDinner,
  getFoodsLunch,
} from "../../redux/selectors";

import star from "../../assets/images/additionImage/star.png";
import whiteBg from "../../assets/images/additionImage/whiteBackground.png";
import fiqurDizayn from "../../assets/images/additionImage/figure of design.png";
import buttonIcon from "../../assets/images/additionImage/bottomIcon.png";
import {
  BgImg,
  FoodImageDiv,
  FoodImageDivImages,
  MainDiv,
  RoundDiv,
  StarsList,
  TitleDiv,
  FoodImageDivController,
} from "./styles";
import { addBasketFood } from "../../redux/slices/foodsSlice";

interface Props {
  foodTime: string;
  colorStyle: "orange" | "green";
}

const FoodArea: React.FC<Props> = ({ foodTime, colorStyle }) => {
  const dispatch = useDispatch();

  const [appearanceFood, setAppearanceFood] = useState<FoodType[]>([]);

  const [selectedFood, setSelectedFood] = useState<FoodType>();
  let foods: FoodType[] = useSelector(
    foodTime == "breakfast"
      ? getFoodsBreakfast
      : foodTime == "lunch"
      ? getFoodsLunch
      : foodTime == "dinner"
      ? getFoodsDinner
      : getFoodsDinner
  ) as FoodType[];

  useEffect(() => {
    if (foods.length > 0) {
      setSelectedFood(appearanceFood[2]);
    }
  }, [appearanceFood]);

  useEffect(() => {
    setAppearanceFood(foods);
  }, []);

  const clickNextFood = () => {
    const dataFood = appearanceFood[0];
    const updatedFoods = [...appearanceFood.slice(1), dataFood];
    setAppearanceFood(updatedFoods);
  };

  const clickPreviousFood = () => {
    const dataFood = appearanceFood[appearanceFood.length - 1];
    const updatedFoods = [dataFood, ...appearanceFood.slice(0, -1)];
    setAppearanceFood(updatedFoods);
  };

  const clickOrderNow = () => {
    dispatch(addBasketFood(selectedFood as FoodType));
  };

  return (
    <MainDiv>
      <BgImg src={whiteBg} alt="whiteBg" />
      <TitleDiv colorStyle={colorStyle}>
        <p>${selectedFood?.price}</p>
        <h1>{selectedFood?.name}</h1>
        <p>{selectedFood?.disclosure}</p>
        <StarsList>
          {[...Array(Math.max(Number(selectedFood?.starCount) || 0, 0))].map(
            (_, i) => (
              <li key={i}>
                <img src={star} alt="star" />
              </li>
            )
          )}
        </StarsList>
        <button onClick={clickOrderNow}>ORDER NOW</button>
        <p>Watch the Video</p>
      </TitleDiv>

      <FoodImageDiv>
        <FoodImageDivImages>
          <img src={fiqurDizayn} alt="fiqurDizayn" />
          <ul>
            {appearanceFood.map((f, i) => {
              return (
                <li key={i}>
                  <img src={f.image} alt="image" />
                </li>
              );
            })}
          </ul>
        </FoodImageDivImages>
        <FoodImageDivController>
          <img src={buttonIcon} alt="ButtonIcon" onClick={clickPreviousFood} />
          <img src={selectedFood?.image} alt="selectedFoodImg" />
          <img src={buttonIcon} alt="ButtonIcon" onClick={clickNextFood} />
        </FoodImageDivController>
      </FoodImageDiv>
      <RoundDiv colorStyle={colorStyle} />
    </MainDiv>
  );
};

export default FoodArea;
