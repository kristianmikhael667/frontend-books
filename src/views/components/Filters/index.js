import React from "react";
import { Link, useLocation } from "react-router-dom";

const Filters = () => {
  const localname = useLocation();

  return (
    <ul className="category">
      <li>
        <Link
          style={{
            color: localname.pathname == "/" ? "white" : "black",
            background: localname.pathname == "/" ? "black" : "white",
          }}
          to={"/"}
        >
          All
        </Link>
      </li>
      <li>
        <Link
          style={{
            color: localname.pathname == "/newbook" ? "white" : "black",
            background: localname.pathname == "/newbook" ? "black" : "white",
          }}
          to={"/newbook"}
        >
          New Book
        </Link>
      </li>
      <li>
        <Link
          style={{
            color: localname.pathname == "/mostview" ? "white" : "black",
            background: localname.pathname == "/mostview" ? "black" : "white",
          }}
          to={"/mostview"}
        >
          Most View
        </Link>
      </li>
      <li>
        <Link
          style={{
            color: localname.pathname == "/mostrating" ? "white" : "black",
            background: localname.pathname == "/mostrating" ? "black" : "white",
          }}
          to={"/mostrating"}
        >
          Most Rating
        </Link>
      </li>
    </ul>
  );
};

export default Filters;
