import React from "react";

export default function SameCatalog() {
  return (
    <div className="main-wraper">
      <h4 className="main-title">
        Related Books{" "}
        <a className="view-all" href="#" title="">
          view all
        </a>
      </h4>
      <div className="books-caro">
        <div className="book-post">
          <figure>
            <a href="book-detail.html" title="">
              <img src="images/resources/book1.jpg" alt="" />
            </a>
          </figure>
          <a href="book-detail.html" title="">
            Html5 Brick Breaker
          </a>
        </div>
        <div className="book-post">
          <figure>
            <a href="book-detail.html" title="">
              <img src="images/resources/book3.jpg" alt="" />
            </a>
          </figure>
          <a href="book-detail.html" title="">
            Python Tricks
          </a>
        </div>
        <div className="book-post">
          <figure>
            <a href="book-detail.html" title="">
              <img src="images/resources/book5.jpg" alt="" />
            </a>
          </figure>
          <a href="book-detail.html" title="">
            Technology Wants
          </a>
        </div>
        <div className="book-post">
          <figure>
            <a href="book-detail.html" title="">
              <img src="images/resources/book2.jpg" alt="" />
            </a>
          </figure>
          <a href="book-detail.html" title="">
            The Aesthetic Ideology
          </a>
        </div>
        <div className="book-post">
          <figure>
            <a href="book-detail.html" title="">
              <img src="images/resources/book4.jpg" alt="" />
            </a>
          </figure>
          <a href="book-detail.html" title="">
            Holy Bible Old
          </a>
        </div>
      </div>
    </div>
  );
}
