import axios from "axios";
import Cookies from "js-cookie";
import { API, BASE_URL } from "../api";

export const FETCH_GET_BOOKS = "FETCH_GET_BOOKS";
export const FETCH_GET_NEW_BOOKS = "FETCH_GET_NEW_BOOKS";
export const FETCH_GET_MOST_VIEW = "FETCH_GET_MOST_VIEW";
export const FETCH_GET_MOST_RATING = "FETCH_GET_MOST_RATING";
export const FETCH_GET_DETAIL_BOOK = "FETCH_GET_DETAIL_BOOK";

export const FETCH_GET_CATALOG = "FETCH_GET_CATALOG";
export const FETCH_GET_CATALOG_PRODUCT = "FETCH_GET_CATALOG_PRODUCT";

// Get All Book
export const getAllBooks = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_GET_BOOKS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: `${BASE_URL + API}/books`,
    })
      .then((res) => {
        dispatch({
          type: FETCH_GET_BOOKS,
          payload: {
            loading: false,
            data: res.data.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_GET_BOOKS,
          payload: {
            loading: true,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

// Get New Book
export const getNewBooks = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_GET_NEW_BOOKS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: `${BASE_URL + API}/books/new`,
    })
      .then((res) => {
        if (res.data.code == 404) {
          dispatch({
            type: FETCH_GET_NEW_BOOKS,
            payload: {
              loading: false,
              data: "gak ada",
              errorMessage: res.data.message,
            },
          });
        } else {
          dispatch({
            type: FETCH_GET_NEW_BOOKS,
            payload: {
              loading: false,
              data: res.data.data,
              errorMessage: false,
            },
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: FETCH_GET_NEW_BOOKS,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

// Get Most View Book
export const getMostViewBooks = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_GET_MOST_VIEW,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: `${BASE_URL + API}/books/viewer`,
    })
      .then((res) => {
        dispatch({
          type: FETCH_GET_MOST_VIEW,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_GET_MOST_VIEW,
          payload: {
            loading: true,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

// Get Most Rating Book
export const getMostRatingBooks = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_GET_MOST_RATING,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: `${BASE_URL + API}/books/avgbooks`,
    })
      .then((res) => {
        dispatch({
          type: FETCH_GET_MOST_RATING,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_GET_MOST_RATING,
          payload: {
            loading: true,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

// Get Detail Book
export const getDetailBook = (id, token) => {
  return (dispatch) => {
    //Loading
    dispatch({
      type: FETCH_GET_DETAIL_BOOK,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });

    //Get API
    axios({
      method: "GET",
      url: `${BASE_URL + API}/book/review/${id}`,
      headers: { Authorization: "Bearer " + token },
    })
      .then((response) => {
        console.log("apa sig bro ", response.data.code);
        if (
          response.data.code == 401 ||
          response.data.code == 433 ||
          response.data.code == 190
        ) {
          console.log("msk 401");
          dispatch({
            type: FETCH_GET_DETAIL_BOOK,
            payload: {
              loading: false,
              data: response.data.status,
              errorMassage: false,
            },
          });
        } else {
          //Berhasil Get API
          // console.log("msk 200");
          // console.log("apa 200 ", response.data.data);

          dispatch({
            type: FETCH_GET_DETAIL_BOOK,
            payload: {
              loading: false,
              databook: response.data.data.databook,
              comment: response.data.data.comment,
              reviewer: response.data.data,
              errorMassage: false,
            },
          });
        }
      })
      .catch((error) => {
        console.log("error apa ini ", error.message);
        //Gagal Get API
        dispatch({
          type: FETCH_GET_DETAIL_BOOK,
          payload: {
            loading: true,
            data: false,
            errorMassage: error.message,
          },
        });
      });
  };
};

// Get All Category
export const getAllCategory = () => {
  return (dispatch) => {
    //Loading
    dispatch({
      type: FETCH_GET_CATALOG,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });

    //Get API
    axios({
      method: "GET",
      url: `${BASE_URL + API}/category`,
    })
      .then((response) => {
        //Berhasil Get API
        dispatch({
          type: FETCH_GET_CATALOG,
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
          type: FETCH_GET_CATALOG,
          payload: {
            loading: true,
            data: false,
            errorMassage: error.message,
          },
        });
      });
  };
};

// Get All Product by Cat
export const getAllProdCategory = (id) => {
  return (dispatch) => {
    //Loading
    dispatch({
      type: FETCH_GET_CATALOG_PRODUCT,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });

    //Get API
    axios({
      method: "GET",
      url: `${BASE_URL + API}/product/${id}/category`,
    })
      .then((response) => {
        //Berhasil Get API
        dispatch({
          type: FETCH_GET_CATALOG_PRODUCT,
          payload: {
            loading: false,
            data: response.data.data,
            errorMassage: false,
          },
        });
      })
      .catch((error) => {
        //Gagal Get API
        dispatch({
          type: FETCH_GET_CATALOG_PRODUCT,
          payload: {
            loading: true,
            data: false,
            errorMassage: error.message,
          },
        });
      });
  };
};
