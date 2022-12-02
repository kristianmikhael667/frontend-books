import {
  FETCH_SAMPLE_DATA,
  ADD_SAMPLE_DATA,
  DETAIL_FETCH_SAMPLE_DATA,
} from "../action/SampleAction";

const initialState = {
  getListSampleDataLoading: false,
  getListSampleDataResult: false,
  getListSampleDataError: false,

  getDetailListSampleDataLoading: false,
  getDetailListSampleDataResult: false,
  getDetailListSampleDataError: false,

  postInputSampleDataLoading: false,
  postInputSampleDataResult: false,
  postInputSampleDataError: false,
};

const SampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SAMPLE_DATA:
      console.log("4. Masuk Reducer: ", action);
      return {
        ...state,
        getListSampleDataLoading: action.payload.loading,
        getListSampleDataResult: action.payload.data,
        getListSampleDataError: action.payload.errorMassage,
      };
    case DETAIL_FETCH_SAMPLE_DATA:
      console.log("4. Masuk Reducer: ", action);
      return {
        ...state,
        getDetailListSampleDataLoading: action.payload.loading,
        getDetailListSampleDataResult: action.payload.data,
        getDetailListSampleDataError: action.payload.errorMassage,
      };
    case ADD_SAMPLE_DATA:
      console.log("4. Masuk Reducer: ", action);
      return {
        ...state,
        postInputSampleDataLoading: action.payload.loading,
        postInputSampleDataResult: action.payload.data,
        postInputSampleDataError: action.payload.errorMassage,
      };
    default:
      return state;
  }
};

export default SampleReducer;
