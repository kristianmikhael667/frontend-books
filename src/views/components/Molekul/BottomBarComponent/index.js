import React, { Component } from "react";

export default class BottomBarComponent extends Component {
  render() {
    return (
      <div className="wraper-invite">
        <div className="popup">
          <span className="popup-closed">
            <i className="icofont-close" />
          </span>
          <div className="popup-meta">
            <div className="popup-head">
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
                    className="feather feather-mail"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </i>{" "}
                Invite Colleagues
              </h5>
            </div>
            <div className="invitation-meta">
              <p>
                Enter an email address to invite a colleague or co-author to
                join you on socimo. They will receive an email and, in some
                cases, up to two reminders.
              </p>
              <form method="post" className="c-form">
                <input type="text" placeholder="Enter Email" />
                <button type="submit" className="main-btn">
                  Invite
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
