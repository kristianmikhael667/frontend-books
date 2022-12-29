import {
  FETCH_GET_BOOKS,
  FETCH_GET_CATALOG,
  FETCH_GET_CATALOG_PRODUCT,
  FETCH_GET_DETAIL_BOOK,
  FETCH_GET_MOST_RATING,
  FETCH_GET_MOST_VIEW,
  FETCH_GET_NEW_BOOKS,
  FETCH_POST_RATING_BOOK,
} from "../action/BooksAction";

const initialState = {
  getListBookDataLoading: false,
  getListBookDataResult: false,
  getListBookDataError: false,

  getListMostViewDataLoading: false,
  getListMostViewDataResult: false,
  getListMostViewDataError: false,

  getListNewBookDataLoading: false,
  getListNewBookDataResult: false,
  getListNewBookDataError: false,

  getListMostRatingDataLoading: false,
  getListMostRatingDataResult: false,
  getListMostRatingDataError: false,

  getDetailBookDataLoading: false,
  getDetailBookDataBook: false,
  getDetailBookComment: false,
  getDetailBookReviewer: false,
  getDetailBookDataError: false,

  getListCatalogLoading: false,
  getListCatalogResult: false,
  getListCatalogError: false,

  getListCatalogProductLoading: false,
  getListCatalogProductResult: false,
  getListCatalogProductError: false,

  postRateBookLoading: false,
  postRateBookResult: false,
  postRateBookStatus: false,
  postRateBookError: false,
};

const BooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GET_BOOKS:
      return {
        ...state,
        getListBookDataLoading: action.payload.loading,
        getListBookDataResult: action.payload.data.data,
        getListBookDataError: action.payload.errorMessage,
      };
    case FETCH_GET_NEW_BOOKS:
      return {
        ...state,
        getListNewBookDataLoading: action.payload.loading,
        getListNewBookDataResult: action.payload.data.data,
        getListNewBookDataError: action.payload.errorMessage,
      };
    case FETCH_GET_MOST_VIEW:
      return {
        ...state,
        getListMostViewDataLoading: action.payload.loading,
        getListMostViewDataResult: action.payload.data.data,
        getListMostViewDataError: action.payload.errorMessage,
      };
    case FETCH_GET_MOST_RATING:
      return {
        ...state,
        getListMostRatingDataLoading: action.payload.loading,
        getListMostRatingDataResult: action.payload.data.data,
        getListMostRatingDataError: action.payload.errorMessage,
      };
    case FETCH_GET_DETAIL_BOOK:
      return {
        ...state,
        getDetailBookDataLoading: action.payload.loading,
        getDetailBookDataBook: action.payload.databook,
        getDetailBookComment: action.payload.comment,
        getDetailBookReviewer: action.payload.reviewer,
        getDetailBookDataError: action.payload.errorMassage,
      };
    case FETCH_POST_RATING_BOOK:
      return {
        ...state,
        postRateBookLoading: action.payload.loading,
        postRateBookResult: action.payload.data,
        postRateBookStatus: action.payload.status,
        postRateBookError: action.payload.errorMassage,
      };
    case FETCH_GET_CATALOG:
      return {
        ...state,
        getListCatalogLoading: action.payload.loading,
        getListCatalogResult: action.payload.data.data,
        getListCatalogError: action.payload.errorMessage,
      };
    case FETCH_GET_CATALOG_PRODUCT:
      return {
        ...state,
        getListCatalogProductLoading: action.payload.loading,
        getListCatalogProductResult: action.payload.data,
        getListCatalogProductError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default BooksReducer;
