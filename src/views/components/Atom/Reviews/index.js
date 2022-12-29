import Cookies from "js-cookie";
import React, { useState } from "react";
import Rating from "react-rating";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { postRatingBook } from "../../../../store/action/BooksAction";

const Reviews = (props) => {
  const {   
    postRateBookStatus,
  } = useSelector((state) => state.BooksReducer);
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const token = Cookies.get("token");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!rating || !comment) {
      toast.error("Rating and Comment wajib diisi");
    } else {
      if (postRateBookStatus === 404) {
        toast.error("Sudah Rate");
      } else {
        toast.success("Success Rate");

        dispatch(
          postRatingBook({
            book_uid: props.name.uid,
            total_review: rating,
            comment: comment,
            token: token,
          })
        );
        setTimeout(() => {
          navigate(0);
        }, 2000);
      }
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="add-comment">
        <span>Give Your Rating</span>
        <ul className="stars">
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
        </ul>
        <form onSubmit={(event) => handleSubmit(event)} className="c-form">
          <Rating
            onChange={(value) => {
              setRating(value);
            }}
          />
          <textarea
            onChange={(event) => setComment(event.target.value)}
            rows={4}
            placeholder="Write Message"
            defaultValue={""}
          />
          <button className="main-btn" type="submit">
            Add Review
          </button>
        </form>
      </div>
    </>
  );
};

export default Reviews;
