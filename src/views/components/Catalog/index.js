import React from "react";
import { Link } from "react-router-dom";
import { API, BASE_URL } from "../../../store/api";

function Catalog(props) {
  return (
    <div className="popular-book">
      <figure>
        <img width={100} height={200} src={BASE_URL + API + "/" + props.name.image_catalog} alt="" />
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
