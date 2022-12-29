import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

import Cookies from "js-cookie";
import { API, BASE_URL } from "../../../../store/api";
const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: "",
    fullname: "",
  });
  const token = Cookies.get("token");

  useEffect(() => {
    const dataUser = Cookies.get("dataUser");
    if (token) {
      const jwtToken = atob(token);
      const payload = jwt_decode(jwtToken);
      const userFromPayload = payload.profile_photo_path;
      const IMG = BASE_URL + API;
      user.avatar = userFromPayload;
      const data = JSON.parse(dataUser);
      user.fullname = data.fullname;
      setIsLogin(true);
      setUser(user);
    }
  }, [token]);

  if (isLogin) {
    return (
      <div className="user-dp">
        <a href="profile-page2.html" title="">
          <img style={{ width: 35, height: 35 }} alt="" src={user.avatar == null ? "images/activity.png" : BASE_URL + API + '/' + user.avatar} />
          <div className="name">
            <h4>{user.fullname}</h4>
          </div>
        </a>
      </div>
    );
  }
  return (
    <div className="user-dp">
      <Link to="/login">
        <a title="">
          <div className="name">
            <h4>Login ELibrary</h4>
          </div>
        </a>
      </Link>
    </div>
  );
};
export default Login;
