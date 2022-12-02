import React, { Component } from "react";

export default class AskComponent extends Component {
  render() {
    return (
      <div className="share-wraper">
        <div className="share-options">
          <span className="close-btn">
            <i className="icofont-close-circled" />
          </span>
          <h5>
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-share"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1={12} y1={2} x2={12} y2={15} />
              </svg>
            </i>
            Share To!
          </h5>
          <form method="post">
            <textarea placeholder="Write Something" defaultValue={""} />
          </form>
          <ul>
            <li>
              <a title="" href="#">
                Your Timeline
              </a>
            </li>
            <li className="friends">
              <a title="" href="#">
                To Friends
              </a>
            </li>
            <li className="socialz">
              <a className="active" title="" href="#">
                Social Media
              </a>
            </li>
          </ul>
          <div style={{ display: "block" }} className="social-media">
            <ul>
              <li>
                <a title="" href="#" className="facebook">
                  <i className="icofont-facebook" />
                </a>
              </li>
              <li>
                <a title="" href="#" className="twitter">
                  <i className="icofont-twitter" />
                </a>
              </li>
              <li>
                <a title="" href="#" className="instagram">
                  <i className="icofont-instagram" />
                </a>
              </li>
              <li>
                <a title="" href="#" className="pinterest">
                  <i className="icofont-pinterest" />
                </a>
              </li>
              <li>
                <a title="" href="#" className="youtube">
                  <i className="icofont-youtube" />
                </a>
              </li>
              <li>
                <a title="" href="#" className="dribble">
                  <i className="icofont-dribbble" />
                </a>
              </li>
              <li>
                <a title="" href="#" className="behance">
                  <i className="icofont-behance-original" />
                </a>
              </li>
            </ul>
          </div>
          <div style={{ display: "none" }} className="friends-to">
            <div className="follow-men">
              <figure>
                <img
                  className="mCS_img_loaded"
                  src="images/resources/user1.jpg"
                  alt=""
                />
              </figure>
              <div className="follow-meta">
                <h5>
                  <a href="#" title="">
                    Jack Carter
                  </a>
                </h5>
                <span>family member</span>
              </div>
              <a href="#" title="">
                Share
              </a>
            </div>
            <div className="follow-men">
              <figure>
                <img
                  className="mCS_img_loaded"
                  src="images/resources/user2.jpg"
                  alt=""
                />
              </figure>
              <div className="follow-meta">
                <h5>
                  <a href="#" title="">
                    Xang Ching
                  </a>
                </h5>
                <span>Close Friend</span>
              </div>
              <a href="#" title="">
                Share
              </a>
            </div>
            <div className="follow-men">
              <figure>
                <img
                  className="mCS_img_loaded"
                  src="images/resources/user3.jpg"
                  alt=""
                />
              </figure>
              <div className="follow-meta">
                <h5>
                  <a href="#" title="">
                    Emma Watson
                  </a>
                </h5>
                <span>Matul Friend</span>
              </div>
              <a href="#" title="">
                Share
              </a>
            </div>
          </div>
          <button type="submit" className="main-btn">
            Publish
          </button>
        </div>
      </div>
    );
  }
}
