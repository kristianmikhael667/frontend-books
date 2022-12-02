import React from "react";
import { Link } from "react-router-dom";

function Catalog(props) {
  return (
    <div className="popular-book">
      <figure>
        <img src="images/resources/book10.jpg" alt="" />
      </figure>
      <div className="book-about">
        <h6>
          <Link
            to={"/category/" + props.name.uid}
            state={{
              name: props.name.name_catalog,
            }}
          >
            <a title="">{props.name.name_catalog}</a>
          </Link>
        </h6>
        <span>{props.name.name_catalog}</span>
      </div>
    </div>
  );
}
export default Catalog;
