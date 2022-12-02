import axios from "axios";
import Cookies from "js-cookie";
import { API, BASE_URL } from "../api";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const postLoginUser = (data) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_USER,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });

    axios({
      method: "POST",
      url: `${BASE_URL + API}/login`,
      data: data,
    })
      .then((res) => {
        if (
          res.data.code == 400 ||
          res.data.code == 401 ||
          res.data.code == 404 ||
          res.data.code == 500
        ) {
          dispatch({
            type: LOGIN_USER,
            payload: {
              loading: false,
              data: false,
              errorMassage: res.data.message,
            },
          });
        } else {
          const token = res.data.token;
          const tokenBase64 = btoa(token);
          Cookies.set("token", tokenBase64, { expires: 1 });
          Cookies.set("dataUser", JSON.stringify(res.data.users));
          dispatch({
            type: LOGIN_USER,
            payload: {
              loading: false,
              data: res.data,
              errorMassage: false,
            },
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_USER,
          payload: {
            loading: false,
            data: false,
            errorMassage: err.message,
          },
        });
      });
  };
};

export const postLogoutUser = (data) => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_USER,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });

    axios({
      method: "POST",
      url: `${BASE_URL + API}/user/logout`,
      headers: { Authorization: "Bearer " + data },
      data: data,
    })
      .then((res) => {
        if (
          res.data.code == 400 ||
          res.data.code == 401 ||
          res.data.code == 404 ||
          res.data.code == 500
        ) {
          dispatch({
            type: LOGOUT_USER,
            payload: {
              loading: false,
              data: false,
              errorMassage: res.data.message,
            },
          });
        } else {
          dispatch({
            type: LOGOUT_USER,
            payload: {
              loading: false,
              data: res.data,
              errorMassage: false,
            },
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: LOGOUT_USER,
          payload: {
            loading: false,
            data: false,
            errorMassage: err.message,
          },
        });
      });
  };
};
