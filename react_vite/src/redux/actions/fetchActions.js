import { httpService } from "../../services";
import {
  DATA_FAILURE,
  DATA_FETCHING,
  DATA_SUCCESS,
} from "../types/fetchDataTypes";

export const dataFetching = (type, payload) => {
  return {
    type,
    payload,
  };
};

export const dataSuccess = (type, payload) => {
  return {
    type,
    payload,
  };
};

export const dataFailure = (type, payload) => {
  return {
    type,
    payload,
  };
};

//  fetchData

export const fetchData = (id) => {
  return async (dispatch) => {
    dispatch(dataFetching(DATA_FETCHING, true));
    try {
      const res = await httpService.get(`/posts/${id}`);
      if (res) {
        dispatch(dataSuccess(DATA_SUCCESS, res));
      }
    } catch (error) {
      dispatch(dataFailure(DATA_FAILURE, error.message));
    }
  };
};
