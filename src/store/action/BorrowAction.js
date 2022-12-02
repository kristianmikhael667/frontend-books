import axios from "axios";
import { API, BASE_URL } from "../api";

export const FETCH_GET_HISTORY_BORROW = "FETCH_GET_HISTORY_BORROW";

// Get All History Borrow Book
export const getAllHistory = (token) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_GET_HISTORY_BORROW,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: `${BASE_URL + API}/user/history`,
      headers: { Authorization: "Bearer " + token },
    })
      .then((res) => {
        console.log(res.data.data);
        dispatch({
          type: FETCH_GET_HISTORY_BORROW,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_GET_HISTORY_BORROW,
          payload: {
            loading: true,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};
