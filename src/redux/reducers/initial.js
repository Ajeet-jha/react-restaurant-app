import * as types from "../actions/types";
const initialSate = [];

export const initialData = (state = initialSate, action) => {
  switch (action.type) {
    case types.GET_ALL_CATEGORIES:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
};
