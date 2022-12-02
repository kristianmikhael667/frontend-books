import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        <figure className="bottom-mockup">
          <img src="images/footer.png" alt="" />
        </figure>
        <div className="bottombar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <span className="">
                  © copyright All rights reserved by Socimo 2020
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
