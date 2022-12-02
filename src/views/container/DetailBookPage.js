import Cookies from "js-cookie";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import {
  getAllCategory,
  GetDetailBook,
  getDetailBook,
} from "../../store/action/BooksAction";
import { API, BASE_URL } from "../../store/api";
import { Catalog, Footer, Header, Sidebar, Sidemenu } from "../components";
import { Comments, Loading, SameCatalog, Star } from "../components/Atom";
import AskComponent from "../components/Molekul/AskComponent";
import BottomBarComponent from "../components/Molekul/BottomBarComponent";
import ChatComponent from "../components/Molekul/ChatComponent";
import InviteCollagueComponent from "../components/Molekul/InviteCollagueComponent";
import MessagePopupCompoenent from "../components/Molekul/MessagePopupComponent";
import NewPostComponent from "../components/Molekul/NewPostComponent";
import SlideMessComponent from "../components/Molekul/SlideMessComponent";
import "./../../static/css/HomePage.css";

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

  const dispatch = useDispatch();
  let { slug } = useParams();
  const navigate = useNavigate();
  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      const jwtToken = atob(token);
      dispatch(getDetailBook(slug, jwtToken));
      dispatch(getAllCategory());
    } else {
      navigate("/login", { replace: true });
    }
  }, [token]);

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
                          <p> Loading </p>
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
                                    "data null"
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
                                <div className="sale-button">
                                  <a
                                    href="#"
                                    title=""
                                    className="main-btn purchase-btn"
                                  >
                                    <i className="icofont-cart-alt" /> Borrow
                                    Now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : getDetailBookDataError ? (
                          getDetailBookDataError
                        ) : (
                          "Data null"
                        )}
                        <div className="comment-area product mt-5">
                          <h4 className="comment-title">Comment</h4>
                          <ul className="comments">
                            {getDetailBookDataLoading ? (
                              <p>Loading naomi ... </p>
                            ) : getDetailBookComment &&
                              getDetailBookComment.length > 0 ? (
                              getDetailBookComment.map((data, key) => {
                                return <Comments key={key} name={data} />;
                              })
                            ) : getDetailBookDataError ? (
                              getDetailBookDataError
                            ) : (
                              "Data null"
                            )}
                          </ul>
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
                            <form method="post" className="c-form">
                              <input type="text" placeholder="Name" />
                              <input type="text" placeholder="Email" />
                              <textarea
                                rows={4}
                                placeholder="Write Message"
                                defaultValue={""}
                              />
                              <button className="main-btn" type="submit">
                                Add Review
                              </button>
                            </form>
                          </div>
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
