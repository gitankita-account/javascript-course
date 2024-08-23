import {
  DATA_FAILURE,
  DATA_FETCHING,
  DATA_SUCCESS,
} from "../types/fetchDataTypes";

const initialState = {
  isLoading: true,
  data: [],
  error: "",
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_FETCHING:
      return { ...state, isLoading: action.payload };
    case DATA_SUCCESS:
      return { data: action.payload, isLoading: false, error: "" };
    case DATA_FAILURE:
      return { data: [], error: action.payload, isLoading: false };
    default:
      return { ...state };
  }
};
