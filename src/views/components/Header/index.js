import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { postLogoutUser } from "../../../store/action/AuthAction";
import jwt_decode from "jwt-decode";

import { Login } from "../Atom";

function Header() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const token = Cookies.get("token");

  const Logout = (event) => {
    console.log("mssss k");
    event.preventDefault();
    console.log("mssss k");

    const jwtToken = atob(token);
    const payload = jwt_decode(jwtToken);
    dispatch(postLogoutUser({ token: payload }));

    Cookies.remove("token");
    Cookies.remove("dataUser");
    // this.context.router.replace("/sample");
    navigate("/login", { replace: true });
  };
  return (
    <>
      <div className="responsive-header">
        <div className="logo res">
          <img src="images/logo.png" alt="" />
          <span>ELibrary</span>
        </div>
        <div className="user-avatar mobile">
          <a href="profile.html" title="View Profile">
            <img alt="" src="images/resources/user.jpg" />
          </a>
          <div className="name">
            <h4>Danial Cardos</h4>
            <span>Ontario, Canada</span>
          </div>
        </div>
        <div className="right-compact">
          <div className="sidemenu">
            <i>
              <svg
                id="side-menu2"
                xmlns="http://www.w3.org/2000/svg"
                width={26}
                height={26}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu"
              >
                <line x1={3} y1={12} x2={21} y2={12} />
                <line x1={3} y1={6} x2={21} y2={6} />
                <line x1={3} y1={18} x2={21} y2={18} />
              </svg>
            </i>
          </div>
          <div className="res-search">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-search"
              >
                <circle cx={11} cy={11} r={8} />
                <line x1={21} y1={21} x2="16.65" y2="16.65" />
              </svg>
            </span>
          </div>
        </div>
        <div className="restop-search">
          <span className="hide-search">
            <i className="icofont-close-circled" />
          </span>
          <form method="post">
            <input type="text" placeholder="Search..." />
          </form>
        </div>
      </div>
      <header className="">
        <div className="topbar stick">
          <div className="logo">
            <img src="images/logo.png" alt="" />
            <span>ELibrary</span>
          </div>
          <div className="searches">
            <form method="post">
              <input type="text" placeholder="Search..." />
              <button type="submit">
                <i className="icofont-search" />
              </button>
              <span className="cancel-search">
                <i className="icofont-close" />
              </span>
              <div className="recent-search">
                <h4 className="recent-searches">Your's Recent Search</h4>
                <ul className="so-history">
                  <li>
                    <div className="searched-user">
                      <figure>
                        <img src="images/resources/user1.jpg" alt="" />
                      </figure>
                      <span>Danial Carabal</span>
                    </div>
                    <span className="trash">
                      <i className="icofont-close-circled" />
                    </span>
                  </li>
                  <li>
                    <div className="searched-user">
                      <figure>
                        <img src="images/resources/user2.jpg" alt="" />
                      </figure>
                      <span>Maria K</span>
                    </div>
                    <span className="trash">
                      <i className="icofont-close-circled" />
                    </span>
                  </li>
                  <li>
                    <div className="searched-user">
                      <figure>
                        <img src="images/resources/user3.jpg" alt="" />
                      </figure>
                      <span>Fawad Khan</span>
                    </div>
                    <span className="trash">
                      <i className="icofont-close-circled" />
                    </span>
                  </li>
                  <li>
                    <div className="searched-user">
                      <figure>
                        <img src="images/resources/user4.jpg" alt="" />
                      </figure>
                      <span>Danial Sandos</span>
                    </div>
                    <span className="trash">
                      <i className="icofont-close-circled" />
                    </span>
                  </li>
                  <li>
                    <div className="searched-user">
                      <figure>
                        <img src="images/resources/user5.jpg" alt="" />
                      </figure>
                      <span>Jack Carter</span>
                    </div>
                    <span className="trash">
                      <i className="icofont-close-circled" />
                    </span>
                  </li>
                </ul>
              </div>
            </form>
          </div>

          <ul className="web-elements">
            <li>
              {/* login */}
              <Login />
            </li>

            <li>
              <Link to="/">
                <a title="Home" data-toggle="tooltip">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-home"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </i>
                </a>
              </Link>
            </li>
            <li>
              <a
                className="mesg-notif"
                href="#"
                title="Notifications"
                data-toggle="tooltip"
              >
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-bell"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </i>
              </a>
              <span />
            </li>

            <li>
              <a href="#" title="">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-grid"
                  >
                    <rect x={3} y={3} width={7} height={7} />
                    <rect x={14} y={3} width={7} height={7} />
                    <rect x={14} y={14} width={7} height={7} />
                    <rect x={3} y={14} width={7} height={7} />
                  </svg>
                </i>
              </a>
              <ul className="dropdown">
                <li>
                  <a href="profile.html" title="">
                    <i className="icofont-user-alt-3" /> Your Profile
                  </a>
                </li>

                <li>
                  <a href="help-faq.html" title="">
                    <i className="icofont-question-circle" /> Help
                  </a>
                </li>
                <li>
                  <a href="settings.html" title="">
                    <i className="icofont-gear" /> Setting
                  </a>
                </li>

                {/* <li>
                  <a className="dark-mod" href="#" title="">
                    <i className="icofont-moon" /> Dark Mode
                  </a>
                </li> */}
                <li className="logout">
                  <a onClick={(event) => Logout(event)} title="">
                    <i className="icofont-power" /> Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
