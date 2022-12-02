import { FETCH_GET_HISTORY_BORROW } from "../action/BorrowAction";

const initialState = {
  getListHistoryBookLoading: false,
  getListHistoryBookResult: false,
  getListHistoryBookError: false,
};

const BorrowReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GET_HISTORY_BORROW:
      console.log("kons ", action.payload.data.data);

      return {
        ...state,
        getListHistoryBookLoading: action.payload.loading,
        getListHistoryBookResult: action.payload.data.data,
        getListHistoryBookError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default BorrowReducer;
