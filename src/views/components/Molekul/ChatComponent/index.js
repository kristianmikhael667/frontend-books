import React, { Component } from "react";

export default class ChatComponent extends Component {
  render() {
    return (
      <div className="chat-box">
        <div className="chat-head">
          <h4>New Messages</h4>
          <span className="clozed">
            <i className="icofont-close-circled" />
          </span>
          <form method="post">
            <input type="text" placeholder="To.." />
          </form>
        </div>
        <div className="user-tabs">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="active" href="#link1" data-toggle="tab">
                All Friends
              </a>
            </li>
            <li className="nav-item">
              <a className="" href="#link2" data-toggle="tab">
                Active
              </a>
              <em>3</em>
            </li>
            <li className="nav-item">
              <a className="" href="#link3" data-toggle="tab">
                Groups
              </a>
            </li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content">
            <div className="tab-pane active fade show " id="link1">
              <div className="friend">
                <a href="#" title="">
                  <figure>
                    <img src="images/resources/user1.jpg" alt="" />
                    <span className="status online" />
                  </figure>
                  <span>Oliver</span>
                  <i className="">
                    <img src="images/resources/user1.jpg" alt="" />
                  </i>
                </a>
                <a href="#" title="">
                  <figure>
                    <img src="images/resources/user2.jpg" alt="" />
                    <span className="status away" />
                  </figure>
                  <span>Amelia</span>
                  <i className="icofont-check-circled" />
                </a>
                <a href="#" title="">
                  <figure>
                    <img src="images/resources/user3.jpg" alt="" />
                    <span className="status offline" />
                  </figure>
                  <span>George</span>
                  <i className="">
                    <img src="images/resources/user3.jpg" alt="" />
                  </i>
                </a>
                <a href="#" title="">
                  <figure>
                    <img src="images/resources/user4.jpg" alt="" />
                    <span className="status online" />
                  </figure>
                  <span>Jacob</span>
                  <i className="icofont-check-circled" />
                </a>
                <a href="#" title="">
                  <figure>
                    <img src="images/resources/user5.jpg" alt="" />
                    <span className="status away" />
                  </figure>
                  <span>Poppy</span>
                  <i className="icofont-check-circled" />
                </a>
                <a href="#" title="">
                  <figure>
                    <img src="images/resources/user6.jpg" alt="" />
                    <span className="status online" />
                  </figure>
                  <span>Sophia</span>
                  <i className="">
                    <img src="images/resources/user6.jpg" alt="" />
                  </i>
                </a>
                <a href="#" title="">
                  <figure>
                    <img src="images/resources/user7.jpg" alt="" />
                    <span className="status away" />
                  </figure>
                  <span>Leo king</span>
                  <i className="">
                    <img src="images/resources/user7.jpg" alt="" />
                  </i>
                </a>
              </div>
            </div>
            <div className="tab-pane fade" id="link2">
              <div className="friend">
                <a href="#" title="">
                  <figure>
                    <img src="images/resources/user1.jpg" alt="" />
                    <span className="status online" />
                  </figure>
                  <span>Samu Jane</span>
                  <i className="">
                    <img src="images/resources/user1.jpg" alt="" />
                  </i>
                </a>
                <a href="#" title="">
                  <figure>
                    <img src="images/resources/user6.jpg" alt="" />
                    <span className="status online" />
                  </figure>
                  <span>Tina Mark</span>
                  <i className="">
                    <img src="images/resources/user6.jpg" alt="" />
                  </i>
                </a>
                <a href="#" title="">
                  <figure>
                    <img src="images/resources/user7.jpg" alt="" />
                    <span className="status online" />
                  </figure>
                  <span>Ak William</span>
                  <i className="">
                    <img src="images/resources/user7.jpg" alt="" />
                  </i>
                </a>
              </div>
            </div>
            <div className="tab-pane fade" id="link3">
              <div className="friend">
                <a href="#" title="">
                  <figure className="group-chat">
                    <img src="images/resources/user5.jpg" alt="" />
                    <img
                      className="two"
                      src="images/resources/user3.jpg"
                      alt=""
                    />
                    <span className="status online" />
                  </figure>
                  <span>Boys World</span>
                  <i className="icofont-check-circled" />
                </a>
                <a href="#" title="">
                  <figure className="group-chat">
                    <img src="images/resources/user2.jpg" alt="" />
                    <img
                      className="two"
                      src="images/resources/user3.jpg"
                      alt=""
                    />
                    <span className="status online" />
                  </figure>
                  <span>KK university Fellows</span>
                  <i className="icofont-check-circled" />
                </a>
                <a href="#" title="">
                  <figure className="group-chat">
                    <img src="images/resources/user3.jpg" alt="" />
                    <img
                      className="two"
                      src="images/resources/user2.jpg"
                      alt=""
                    />
                    <span className="status away" />
                  </figure>
                  <span>Education World</span>
                  <i className="icofont-check-circled" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-card">
          <div className="chat-card-head">
            <img src="images/resources/user13.jpg" alt="" />
            <h6>George Floyd</h6>
            <div className="frnd-opt">
              <div className="more">
                <div className="more-post-optns">
                  <i className="">
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
                      className="feather feather-more-horizontal"
                    >
                      <circle cx={12} cy={12} r={1} />
                      <circle cx={19} cy={12} r={1} />
                      <circle cx={5} cy={12} r={1} />
                    </svg>
                  </i>
                  <ul>
                    <li>
                      <i className="icofont-pen-alt-1" />
                      Edit Post
                      <span>Edit This Post within a Hour</span>
                    </li>
                    <li>
                      <i className="icofont-ban" />
                      Hide Chat
                      <span>Hide This Post</span>
                    </li>
                    <li>
                      <i className="icofont-ui-delete" />
                      Delete Chat
                      <span>If inappropriate Post By Mistake</span>
                    </li>
                    <li>
                      <i className="icofont-flag" />
                      Report
                      <span>Inappropriate Chat</span>
                    </li>
                  </ul>
                </div>
              </div>
              <span className="close-mesage">
                <i className="icofont-close" />
              </span>
            </div>
          </div>
          <div className="chat-list">
            <ul>
              <li className="me">
                <div className="chat-thumb">
                  <img src="images/resources/chatlist1.jpg" alt="" />
                </div>
                <div className="notification-event">
                  <div className="chat-message-item">
                    <figure>
                      <img src="images/resources/album5.jpg" alt="" />
                    </figure>
                    <div className="caption">
                      4.5kb <i className="icofont-download" title="Download" />
                    </div>
                  </div>
                  <span className="notification-date">
                    <time
                      dateTime="2004-07-24T18:18"
                      className="entry-date updated"
                    >
                      Yesterday at 8:10pm
                    </time>
                    <i>
                      <img src="images/d-tick.png" alt="" />
                    </i>
                  </span>
                </div>
              </li>
              <li className="me">
                <div className="chat-thumb">
                  <img src="images/resources/chatlist1.jpg" alt="" />
                </div>
                <div className="notification-event">
                  <span className="chat-message-item">
                    Hi James! Please remember to buy the food for tomorrow! I’m
                    gonna be handling the gifts and Jake’s gonna get the drinks
                  </span>
                  <span className="notification-date">
                    <time
                      dateTime="2004-07-24T18:18"
                      className="entry-date updated"
                    >
                      Yesterday at 8:10pm
                    </time>
                    <i>
                      <img src="images/d-tick.png" alt="" />
                    </i>
                  </span>
                </div>
              </li>
              <li className="you">
                <div className="chat-thumb">
                  <img src="images/resources/chatlist2.jpg" alt="" />
                </div>
                <div className="notification-event">
                  <span className="chat-message-item">
                    Hi James! Please remember to buy the food for tomorrow! I’m
                    gonna be handling the gifts and Jake’s gonna get the drinks
                  </span>
                  <span className="notification-date">
                    <time
                      dateTime="2004-07-24T18:18"
                      className="entry-date updated"
                    >
                      Yesterday at 8:10pm
                    </time>
                    <i>
                      <img src="images/d-tick.png" alt="" />
                    </i>
                  </span>
                </div>
              </li>
              <li className="me">
                <div className="chat-thumb">
                  <img src="images/resources/chatlist1.jpg" alt="" />
                </div>
                <div className="notification-event">
                  <span className="chat-message-item">
                    Hi James! Please remember to buy the food for tomorrow! I’m
                    gonna be handling the gifts and Jake’s gonna get the drinks
                  </span>
                  <span className="notification-date">
                    <time
                      dateTime="2004-07-24T18:18"
                      className="entry-date updated"
                    >
                      Yesterday at 8:10pm
                    </time>
                    <i>
                      <img src="images/d-tick.png" alt="" />
                    </i>
                  </span>
                </div>
              </li>
            </ul>
            <form className="text-box">
              <textarea placeholder="Write Mesage..." defaultValue={""} />
              <div className="add-smiles">
                <span>
                  <img src="images/smiles/happy-3.png" alt="" />
                </span>
              </div>
              <div className="smiles-bunch">
                <i>
                  <img src="images/smiles/thumb.png" alt="" />
                </i>
                <i>
                  <img src="images/smiles/angry-1.png" alt="" />
                </i>
                <i>
                  <img src="images/smiles/angry.png" alt="" />
                </i>
                <i>
                  <img src="images/smiles/bored-1.png" alt="" />
                </i>
                <i>
                  <img src="images/smiles/confused-1.png" alt="" />
                </i>
                <i>
                  <img src="images/smiles/wink.png" alt="" />
                </i>
                <i>
                  <img src="images/smiles/weep.png" alt="" />
                </i>
                <i>
                  <img src="images/smiles/tongue-out.png" alt="" />
                </i>
                <i>
                  <img src="images/smiles/suspicious.png" alt="" />
                </i>
                <i>
                  <img src="images/smiles/crying-1.png" alt="" />
                </i>
                <i>
                  <img src="images/smiles/crying.png" alt="" />
                </i>
                <i>
                  <img src="images/smiles/embarrassed.png" alt="" />
                </i>
                <i>
                  <img src="images/smiles/emoticons.png" alt="" />
                </i>
                <i>
                  <img src="images/smiles/happy-2.png" alt="" />
                </i>
              </div>
              <button type="submit">
                <i className="icofont-paper-plane" />
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
