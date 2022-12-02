import React from "react";

export default function Sidemenu() {
  return (
    <section>
      <div className="white-bg">
        <div className="container-fluid">
          <div className="menu-caro">
            <div className="row">
              <div className="col-lg-2">
                <div className="sidemenu">
                  <i>
                    <svg
                      id="side-menu"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
