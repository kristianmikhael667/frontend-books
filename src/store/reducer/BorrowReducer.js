import {
  FETCH_GET_HISTORY_BORROW,
  FETCH_POST_CHECKOUT,
} from "../action/BorrowAction";

const initialState = {
  getListHistoryBookLoading: false,
  getListHistoryBookResult: false,
  getListHistoryBookError: false,

  postBorrowBookLoading: false,
  postBorrowBookResult: false,
  postBorrowBookError: false,
};

const BorrowReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GET_HISTORY_BORROW:
      return {
        ...state,
        getListHistoryBookLoading: action.payload.loading,
        getListHistoryBookResult: action.payload.data.data,
        getListHistoryBookError: action.payload.errorMessage,
      };
    case FETCH_POST_CHECKOUT:
      return {
        ...state,
        postBorrowBookLoading: action.payload.loading,
        postBorrowBookResult: action.payload.data.data,
        postBorrowBookError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default BorrowReducer;
