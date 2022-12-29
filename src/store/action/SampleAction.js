import axios from "axios";

import { BASE_URL, API } from "../api";

//SAMPLE VARIABEL FETCH
export const FETCH_SAMPLE_DATA = "FETCH_SAMPLE_DATA";
export const DETAIL_FETCH_SAMPLE_DATA = "DETAIL_FETCH_SAMPLE_DATA";
export const ADD_SAMPLE_DATA = "ADD_SAMPLE_DATA";

//FUNCTION FOR DISPATCH
export const getFetchSampleData = () => {
  return (dispatch) => {
    //Loading
    dispatch({
      type: FETCH_SAMPLE_DATA,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });

    //Get API
    axios({
      method: "GET",
      url: `${BASE_URL + API}`,
    })
      .then((response) => {
        //Berhasil Get API
        dispatch({
          type: FETCH_SAMPLE_DATA,
          payload: {
            loading: false,
            data: response.data,
            errorMassage: false,
          },
        });
      })
      .catch((error) => {
        //Gagal Get API
        dispatch({
          type: FETCH_SAMPLE_DATA,
          payload: {
            loading: true,
            data: false,
            errorMassage: error.message,
          },
        });
      });
  };
};
export const getDetailFetchSampleData = (data) => {
  return (dispatch) => {
    //Loading
    dispatch({
      type: DETAIL_FETCH_SAMPLE_DATA,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });

    //Get API
    axios({
      method: "GET",
      url: `${BASE_URL + API}/${data}`,
    })
      .then((response) => {
        //Berhasil Get API
        dispatch({
          type: DETAIL_FETCH_SAMPLE_DATA,
          payload: {
            loading: false,
            data: response.data,
            errorMassage: false,
          },
        });
      })
      .catch((error) => {
        //Gagal Get API
        dispatch({
          type: DETAIL_FETCH_SAMPLE_DATA,
          payload: {
            loading: true,
            data: false,
            errorMassage: error.message,
          },
        });
      });
  };
};

export const postInputSampleData = (data) => {
  return (dispatch) => {
    //Loading
    dispatch({
      type: ADD_SAMPLE_DATA,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });

    //Get API
    axios({
      method: "POST",
      url: `${BASE_URL + API}`,
      data: data,
    })
      .then((response) => {
        //Berhasil Get API
        dispatch({
          type: ADD_SAMPLE_DATA,
          payload: {
            loading: false,
            data: response.data,
            errorMassage: false,
          },
        });
      })
      .catch((error) => {
        //Gagal Get API
        dispatch({
          type: ADD_SAMPLE_DATA,
          payload: {
            loading: true,
            data: false,
            errorMassage: error.message,
          },
        });
      });
  };
};
