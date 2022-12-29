import Cookies from "js-cookie";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { getAllCategory, getDetailBook } from "../../store/action/BooksAction";
import { API, BASE_URL } from "../../store/api";
import { Catalog, Footer, Header, Sidebar, Sidemenu } from "../components";
import { Comments, Error404, Loading, Reviews, Star } from "../components/Atom";
import AskComponent from "../components/Molekul/AskComponent";
import BottomBarComponent from "../components/Molekul/BottomBarComponent";
import ChatComponent from "../components/Molekul/ChatComponent";
import InviteCollagueComponent from "../components/Molekul/InviteCollagueComponent";
import MessagePopupCompoenent from "../components/Molekul/MessagePopupComponent";
import NewPostComponent from "../components/Molekul/NewPostComponent";
import SlideMessComponent from "../components/Molekul/SlideMessComponent";
import "./../../static/css/HomePage.css";
import "./detailbook.css";

const DetailBookPage = () => {
  const {
    getDetailBookDataLoading,
    getDetailBookDataBook,
    getDetailBookComment,
    getDetailBookReviewer,
    getDetailBookDataError,

    getListCatalogLoading,
    getListCatalogResult,
    getListCatalogError,
  } = useSelector((state) => state.BooksReducer);

  const [count, setCount] = useState(1);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  let { slug } = useParams();
  const navigate = useNavigate();
  const token = Cookies.get("token");
 
  useEffect(() => {
    if (token) {
      dispatch(getDetailBook(slug, token));
      dispatch(getAllCategory());
    } else {
      console.log('benrrr');
      navigate("/login", { replace: true });
    }
  }, [token]);

  const handleMinus = () => {
    if (count > 1) {
      setCount(count - 1);
      setError(null);
    } else {
      setError("Please Enter a Valid Number");
    }
  };

  const handlePlus = () => {
    if (count === null || count === "") {
      setCount(1);
    } else {
      setCount(count + 1);
      setError(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/checkout", {
      state: {
        qty: count,
        uid: getDetailBookDataBook.uid,
        author_book: getDetailBookDataBook.author_book,
        title_book: getDetailBookDataBook.title_book,
        publish_book: getDetailBookDataBook.publish_book,
        publish_date: getDetailBookDataBook.publish_date,
        sinopsis_book: getDetailBookDataBook.sinopsis_book,
        cover_book: getDetailBookDataBook.cover_book,
        name_catalog: getDetailBookDataBook.name_catalog,
      },
    });
  };



  return (
    <>
      <div className="theme-layout">
        {/* responsive header & header */}
        <Header />

        {/* nav sidebar */}
        <Sidebar />

        {/* Sidemenu */}
        <Sidemenu />

        {/* carousel menu */}
        <section>
          <div className="gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div id="page-contents" className="row merged20">
                    <div className="col-lg-9">
                      <div className="main-wraper">
                        {getDetailBookDataLoading ? (
                         <Loading/>
                        ) : getDetailBookDataBook ? (
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="full-book">
                                <figure>
                                  <img
                                    style={{
                                      width: "100%",
                                      height: 290,
                                    }}
                                    src={
                                      BASE_URL +
                                      API +
                                      "/" +
                                      getDetailBookDataBook.cover_book
                                    }
                                    alt=""
                                  />
                                  {/* <span>Trending</span> */}
                                </figure>
                                <div className="prod-stat">
                                  <ul>
                                    {getDetailBookDataLoading ? (
                                      <Loading />
                                    ) : getDetailBookReviewer ? (
                                      <>
                                        <li>
                                          <span>Visited:</span>{" "}
                                          {getDetailBookReviewer.totalCount ==
                                          null
                                            ? `0`
                                            : getDetailBookReviewer.totalCount}
                                        </li>
                                        <li>
                                          <span>Rating:</span>{" "}
                                          {getDetailBookReviewer.averageRating ==
                                          null
                                            ? `0`
                                            : getDetailBookReviewer.averageRating}
                                        </li>
                                        <li>
                                          <span>Stock:</span>{" "}
                                          {getDetailBookReviewer.qty}
                                        </li>
                                      </>
                                    ) : getDetailBookDataError ? (
                                      getDetailBookDataError
                                    ) : (
                                      "Data null"
                                    )}
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8">
                              <div className="prod-detail">
                                <ul className="stars">
                                  {/* Data props Start */}
                                  {getDetailBookDataLoading ? (
                                    <p>Loading nom ... </p>
                                  ) : getDetailBookReviewer ? (
                                    <Star
                                      data={getDetailBookReviewer.averageRating}
                                    />
                                  ) : getDetailBookDataError ? (
                                    getDetailBookDataBook
                                  ) : (
                                    "data nulll"
                                  )}
                                </ul>
                                <h4>{getDetailBookDataBook.title_book}</h4>

                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: getDetailBookDataBook.sinopsis_book,
                                  }}
                                ></p>
                                <ul className="item-info">
                                  <li>
                                    <span>Author:</span>{" "}
                                    {getDetailBookDataBook.author_book}
                                  </li>
                                  <li>
                                    <span>Pages:</span> 100
                                  </li>
                                  <li>
                                    <span>Publish:</span>{" "}
                                    {getDetailBookDataBook.publish_date}
                                  </li>
                                  <li>
                                    <span>Category:</span>{" "}
                                    {getDetailBookDataBook.name_catalog}
                                  </li>
                                  <li>
                                    <span>Publisher:</span>{" "}
                                    {getDetailBookDataBook.publish_book}
                                  </li>
                                </ul>
                                <div className="number">
                                  <button
                                    onClick={handleMinus}
                                    className="minus"
                                  >
                                    -
                                  </button>
                                  <input
                                    className="inputan"
                                    readOnly
                                    type="text"
                                    value={
                                      count > getDetailBookDataBook.qty
                                        ? null
                                        : count
                                    }
                                    onChange={setCount}
                                  />
                                  <button onClick={handlePlus} className="plus">
                                    +
                                  </button>
                                </div>
                                <div className="sale-button">
                                  <button
                                    onClick={(event) => handleSubmit(event)}
                                    className="main-btn purchase-btn"
                                  >
                                    <i className="icofont-cart-alt" /> Borrow
                                    Now
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : getDetailBookDataError ? (
                          getDetailBookDataError
                        ) : (
                          "Data nullls"
                        )}
                        <div className="comment-area product mt-5">
                          <h4 className="comment-title">Comment</h4>
                          <ul className="comments">
                            {getDetailBookDataLoading ? (
                              <Loading/>
                            ) : getDetailBookComment &&
                              getDetailBookComment.length > 0 ? (
                              getDetailBookComment.map((data, key) => {
                                return <Comments key={key} name={data} />;
                              })
                            ) : getDetailBookDataError ? (
                              getDetailBookDataError
                            ) : (
                              <Error404 />
                            )}
                          </ul>
                          {/* Comments */}
                          <Reviews name={getDetailBookDataBook} />
                        </div>
                      </div>
                      {/* Same Catalog */}
                      {/* <SameCatalog /> */}
                    </div>
                    <div className="col-lg-3">
                      <aside className="sidebar static right">
                        <div className="widget">
                          <h4 className="widget-title">Catalog</h4>
                          {/* map */}
                          {getListCatalogLoading ? (
                            <Loading />
                          ) : getListCatalogResult &&
                            getListCatalogResult.length > 0 ? (
                            getListCatalogResult.map((data, key) => {
                              return <Catalog key={key} name={data} />;
                            })
                          ) : getListCatalogError ? (
                            getListCatalogError
                          ) : (
                            "Data null"
                          )}
                        </div>

                        <div className="widget">
                          <h4 className="widget-title">
                            Explor Events{" "}
                            <a className="see-all" href="#" title="">
                              See All
                            </a>
                          </h4>
                          <div className="rec-events bg-purple">
                            <i className="icofont-gift" />
                            <h6>
                              <a title="" href="">
                                BZ University good night event in columbia
                              </a>
                            </h6>
                            <img alt="" src="images/clock.png" />
                          </div>
                          <div className="rec-events bg-blue">
                            <i className="icofont-microphone" />
                            <h6>
                              <a title="" href="">
                                The 3rd International Conference 2020
                              </a>
                            </h6>
                            <img alt="" src="images/clock.png" />
                          </div>
                        </div>
                      </aside>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
        {/* bottombar */}
        <BottomBarComponent />

        {/* invite colleague popup */}
        <InviteCollagueComponent />

        {/* send message popup */}
        <MessagePopupCompoenent />

        {/* side slide message & popup */}
        <SlideMessComponent />

        {/* New post popup */}
        <NewPostComponent />

        {/* ask question */}
        <AskComponent />

        {/* chat box */}
        <ChatComponent />
      </div>
    </>
  );
};

export default DetailBookPage;
