import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { getAccount, getFoodsBreakfast } from "./redux/selectors"; // -
import axios from "axios";
import {
  changeFoodsBreakfast,
  changeFoodsDinner,
  changeFoodsLunch,
} from "./redux/slices/foodsSlice";
import { useEffect, useState } from "react";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import BreakfastPage from "./pages/BreakfastPage/BreakfastPage";
import LunchPage from "./pages/LunchPage/LunchPage";
import DinnerPage from "./pages/DinnerPage/DinnerPage";
import Header from "./components/Header/Header";
import "./App.css";
import BasketFoods from "./components/BasketFoods/BasketFoods";
import ProfilPage from "./pages/ProfilPage/ProfilPage";

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const account = useSelector(getAccount);
  const [basketOpened, setBasketOpened] = useState(false);

  const getFoodsInApi = async () => {
    const breakfastResopnse = await axios.get(
      "http://localhost:3000/BreakfastFood"
    );
    const lunchResopnse = await axios.get("http://localhost:3000/LunchFood");
    const dinnerResopnse = await axios.get("http://localhost:3000/DinnerFood");

    dispatch(changeFoodsBreakfast(breakfastResopnse.data));
    dispatch(changeFoodsLunch(lunchResopnse.data));
    dispatch(changeFoodsDinner(dinnerResopnse.data));
  };

  useEffect(() => {
    getFoodsInApi();
    if (account.name == "") {
      navigate("/registration", { replace: true });
    }
  }, []);

  return (
    <div>
      {account.name == "" ? (
        <Routes key={location.key}>
          <Route
            path="/registration"
            element={<RegistrationPage isPage={true} />}
          />
        </Routes>
      ) : (
        <>
          <Header setBasketOpened={setBasketOpened} />
          <Routes key={location.key}>
            <Route path="/breakfast" element={<BreakfastPage />} />
            <Route path="/lunch" element={<LunchPage />} />
            <Route path="/dinner" element={<DinnerPage />} />
            <Route path="/profil" element={<ProfilPage />} />
          </Routes>
          {basketOpened ? (
            <BasketFoods setBasketOpened={setBasketOpened} />
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};

export default App;
