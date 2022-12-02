import React from "react";
import ReactLoading from "react-loading";
import "./loaders.css";

const Loading = () => {
  return (
    <div className="loaderes">
      <ReactLoading
        type={"balls"}
        color={"#ff0000"}
        height={"20%"}
        width={"20%"}
      />
    </div>
  );
};

export default Loading;
