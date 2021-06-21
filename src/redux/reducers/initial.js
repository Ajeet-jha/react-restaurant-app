import * as types from "../actions/types";
const initialSate = [];

export const initialData = (state = initialSate, action) => {
  switch (action.type) {
    case types.GEt_INITIAL_DATA:
      return state;
    default:
      return state;
  }
};
