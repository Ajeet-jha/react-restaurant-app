import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getInitialData } from "../../redux/actions";

import Home from "../../components/Home.js";

function HomeContainer() {
  const selector = useSelector((state) => state.allCategoriesData);
  const dispatch = useDispatch();
  const BASE_URL = "https://stg.app2food.com/menu/";
  useEffect(() => {
    dispatch(getInitialData(BASE_URL));
  }, []);
  return <Home initialData={selector} />;
}

export default HomeContainer;
