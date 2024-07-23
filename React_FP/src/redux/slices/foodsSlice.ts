import {
  FoodAction,
  FoodsState,
  AddBasketFoodAction,
  DeleteBasketFoodAction,
  ClearBasketFoodsAction,
} from "./../../types/redux";
import { FoodType } from "./../../types/index";
import { createSlice } from "@reduxjs/toolkit";

const foodsState = {
  breakfastFoods: [],
  LunchFoods: [],
  dinnerFoods: [],
  basketFoods: [],
};

const foodsSlice = createSlice({
  name: "foods",
  initialState: foodsState,
  reducers: {
    changeFoodsBreakfast: {
      reducer(state: FoodsState, action: FoodAction) {
        state.breakfastFoods = action.payload;
      },
      prepare(foods: FoodType[]) {
        return {
          payload: foods,
        };
      },
    },
    changeFoodsLunch: {
      reducer(state: FoodsState, action: FoodAction) {
        state.LunchFoods = action.payload;
      },
      prepare(foods: FoodType[]) {
        return {
          payload: foods,
        };
      },
    },
    changeFoodsDinner: {
      reducer(state: FoodsState, action: FoodAction) {
        state.dinnerFoods = action.payload;
      },
      prepare(foods: FoodType[]) {
        return {
          payload: foods,
        };
      },
    },
    // Bastet Foods
    addBasketFood: {
      reducer(state: FoodsState, action: AddBasketFoodAction) {
        state.basketFoods.push(action.payload);
      },
      prepare(newFood: FoodType) {
        return {
          payload: {
            id: Date.now().toString(),
            name: newFood.name,
            disclosure: newFood.disclosure,
            price: newFood.price,
            image: newFood.image,
            starCount: newFood.starCount,
          },
        };
      },
    },

    deleteBasketFood: {
      reducer(state: FoodsState, action: DeleteBasketFoodAction) {
        state.basketFoods.forEach((f, i) => {
          if (f.id == action.payload) {
            state.basketFoods.splice(i, 1);
          }
        });
      },
      prepare(id: string) {
        return {
          payload: id,
        };
      },
    },

    clearBasketFoods: {
      reducer(state: FoodsState, action: ClearBasketFoodsAction) {
        state.basketFoods = [];
      },
      prepare() {
        return {
          payload: "",
        };
      },
    },
  },
});

export const {
  changeFoodsBreakfast,
  changeFoodsLunch,
  changeFoodsDinner,
  addBasketFood,
  deleteBasketFood,
  clearBasketFoods,
} = foodsSlice.actions;
export const foodsReducer = foodsSlice.reducer;
