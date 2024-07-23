import { RootState } from "./store";


// islemir baxxxxxxx        

export const getFoodsBreakfast = (state: RootState) =>
  state.foods.breakfastFoods;
export const getFoodsLunch = (state: RootState) => state.foods.LunchFoods;
export const getFoodsDinner = (state: RootState) => state.foods.dinnerFoods;
export const getFoodsBasket = (state: RootState) => state.foods.basketFoods;  // + baxildi 

export const getAccount = (state: RootState) => state.account;
