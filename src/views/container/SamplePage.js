import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFetchSampleData } from "../../store/action/SampleAction";
import SampleComponent from "../components/SampleComponent";

const SamplePage = () => {
  const {
    getListSampleDataLoading,
    getListSampleDataResult,
    getListSampleDataError,
  } = useSelector((state) => state.SampleReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("1. Use effect component did mount");
    dispatch(getFetchSampleData());
  }, [dispatch]);
  return (
    <div className="SamplePage">
      <h1>SamplePage</h1>
      <Link to="/input-data">Input Data Baru</Link>
      <h1>Data API</h1>
      {getListSampleDataLoading ? (
        <p>Loading Mas Bro....</p>
      ) : getListSampleDataResult && getListSampleDataResult.length > 0 ? (
        getListSampleDataResult.map((data, key) => {
          return (
            <SampleComponent
              key={key}
              nama={data.company}
              contact={data.contact}
              email={data.email}
              id={data.id}
            />
          );
        })
      ) : getListSampleDataError ? (
        getListSampleDataError
      ) : (
        "data kosong"
      )}
    </div>
  );
};

export default SamplePage;
