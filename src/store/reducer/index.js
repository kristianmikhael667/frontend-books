import { combineReducers } from "redux";

import SampleReducer from "./SampleReducer";
import BooksReducer from "./BooksReducer";
import BorrowReducer from "./BorrowReducer";

export default combineReducers({
  SampleReducer,
  BooksReducer,
  BorrowReducer,
});
