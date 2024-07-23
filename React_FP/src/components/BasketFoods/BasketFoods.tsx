import React from "react";
import { BasketDiv, BgDiv, MainDiv } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getFoodsBasket } from "../../redux/selectors";

import xButton from "../../assets/images/additionImage/X_Button.png";
import { FoodType } from "../../types";
import {
  clearBasketFoods,
  deleteBasketFood,
} from "../../redux/slices/foodsSlice";

interface Props {
  setBasketOpened: (value: boolean) => void;
}

const BasketFoods: React.FC<Props> = ({ setBasketOpened }) => {
  const dispatch = useDispatch();
  const basketFoods = useSelector(getFoodsBasket) as FoodType[];

  const exitBasketEvent = () => {
    setBasketOpened(false);
  };

  const deleteBasketFoodEvent = (id: string) => {
    dispatch(deleteBasketFood(id));
  };

  const buyAllFoods = () => {
    dispatch(clearBasketFoods());
  };

  return (
    <MainDiv>
      <BgDiv></BgDiv>
      <BasketDiv>
        <img
          src={xButton}
          width={50}
          height={50}
          alt="X Button"
          onClick={exitBasketEvent}
        />
        <ul>
          {basketFoods.map((f, i) => {
            return (
              <li key={i}>
                <img src={f.image} alt="img" />
                <div>
                  <p>{f.name}</p>
                  <p>${f.price}</p>
                  <button
                    onClick={() => {
                      deleteBasketFoodEvent(f.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <div>
          <button onClick={buyAllFoods}>Buy All</button>
          <p>Food Count: {basketFoods.length}</p>
          <p>
            Total Price:&nbsp;$
            {basketFoods
              .reduce((totalPrice, bf) => {
                return totalPrice + bf.price;
              }, 0)
              .toFixed(2)}
          </p>
        </div>
      </BasketDiv>
    </MainDiv>
  );
};

export default BasketFoods;
