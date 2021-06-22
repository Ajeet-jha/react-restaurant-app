import axios from "axios";
import * as types from "./types";

export const getInitialData = url => async (dispatch) => {
  const response = await axios.get(url);
  const data = await response.data.data.categories;
  dispatch({
    type: types.GET_ALL_CATEGORIES,
    payload: data,
  });
};