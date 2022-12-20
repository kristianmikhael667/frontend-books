import React from "react";

const Star = (props) => {
  if (props.data >= 5) {
    return (
      <>
        <li>
          <i className="icofont-star" />
        </li>
        <li>
          <i className="icofont-star" />
        </li>
        <li>
          <i className="icofont-star" />
        </li>
        <li>
          <i className="icofont-star" />
        </li>
        <li>
          <i className="icofont-star" />
        </li>
      </>
    );
  } else if (props.data > 4 && props.data < 5) {
    return (
      <>
        <li>
          <i className="icofont-star" />
        </li>
        <li>
          <i className="icofont-star" />
        </li>
        <li>
          <i className="icofont-star" />
        </li>
        <li>
          <i className="icofont-star" />
        </li>
        <li>
          <i style={{ color: "black" }} className="icofont-star" />
        </li>
      </>
    );
  } else if (props.data > 3 && props.data < 4) {
    return (
      <>
        <li>
          <i className="icofont-star" />
        </li>
        <li>
          <i className="icofont-star" />
        </li>
        <li>
          <i className="icofont-star" />
        </li>
        <li>
          <i style={{ color: "black" }} className="icofont-star" />
        </li>
        <li>
          <i style={{ color: "black" }} className="icofont-star" />
        </li>
      </>
    );
  } else if (props.data > 2 && props.data < 3) {
    return (
      <>
        <li>
          <i className="icofont-star" />
        </li>
        <li>
          <i className="icofont-star" />
        </li>
        <li>
          <i style={{ color: "black" }} className="icofont-star" />
        </li>
        <li>
          <i style={{ color: "black" }} className="icofont-star" />
        </li>
        <li>
          <i style={{ color: "black" }} className="icofont-star" />
        </li>
      </>
    );
  } else if (props.data > 1 && props.data < 2) {
    return (
      <>
        <li>
          <i className="icofont-star" />
        </li>
        <li>
          <i style={{ color: "black" }} className="icofont-star" />
        </li>
        <li>
          <i style={{ color: "black" }} className="icofont-star" />
        </li>
        <li>
          <i style={{ color: "black" }} className="icofont-star" />
        </li>
        <li>
          <i style={{ color: "black" }} className="icofont-star" />
        </li>
      </>
    );
  } else {
    return (
      <>
        <li>
          <i style={{ color: "black" }} className="icofont-star" />
        </li>
        <li>
          <i style={{ color: "black" }} className="icofont-star" />
        </li>
        <li>
          <i style={{ color: "black" }} className="icofont-star" />
        </li>
        <li>
          <i style={{ color: "black" }} className="icofont-star" />
        </li>
        <li>
          <i style={{ color: "black" }} className="icofont-star" />
        </li>
      </>
    );
  }
};

export default Star;
