import React from "react";

const Comments = (props) => {
  let unix_timestamp = props.name.time;
  var a = new Date(unix_timestamp * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time =
    date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return (
    <li>
      <div className="comment-box">
        <div className="commenter-photo">
          <img alt="" src="images/resources/commenter-1.jpg" />
        </div>
        <div className="commenter-meta">
          <div className="comment-titles">
            <h6>{props.name.nameuser}</h6>
            <span>{time}</span>
            <ins>
              <i className="icofont-star" /> {props.name.total_review}
            </ins>
          </div>
          <p>{props.name.comment}</p>
        </div>
      </div>
    </li>
  );
};

export default Comments;
