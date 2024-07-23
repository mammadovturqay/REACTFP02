import { AccountType, FoodType } from "./index";

export type FoodAction = {
  type: string;
  payload: FoodType[];
};

export type AccountAction = {
  type: string;
  payload: AccountType;
};

export type AddBasketFoodAction = {
  type: string;
  payload: FoodType;
};
export type DeleteBasketFoodAction = {
  type: string;
  payload: string;
};

export type ClearBasketFoodsAction = {
  type: string;
  payload: string;
};

export type FoodsState = {
  breakfastFoods: FoodType[];
  LunchFoods: FoodType[];
  dinnerFoods: FoodType[];
  basketFoods: FoodType[];
};
