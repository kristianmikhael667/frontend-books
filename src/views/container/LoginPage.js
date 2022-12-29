import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { postLoginUser } from "../../store/action/AuthAction";
import { API, BASE_URL } from "../../store/api";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = Cookies.get("token");
  useEffect(() => {
    if (token) {
      navigate("/", { replace: true });
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      toast.error("Email and Password wajib diisi!!");
    } else {

      axios({
        method: "POST",
        url: `${BASE_URL + API}/login`,
        data: {
          'email': email,
          'password': password
        },
      })
        .then((res) => {
          if (
            res.data.code == 400 ||
            res.data.code == 401 ||
            res.data.code == 404 ||
            res.data.code == 500
          ) {
            toast.error("Email and Password salah");
          } else {
            console.log('btl');
            const token = res.data.token;
            const tokenBase64 = btoa(token);
            Cookies.set("token", tokenBase64, { expires: 1 });
            Cookies.set("dataUser", JSON.stringify(res.data.users));
            navigate("/", { replace: true });
          }
        })

    }
  };

  return (
    <div className="auth-login">
      <div className="logo">
        <img src="images/logo.png" alt="" />
        <span>Socimo</span>
      </div>
      <div className="mockup left-bottom">
        <img src="images/mockup.png" alt="" />
      </div>
      <div className="verticle-center">
        <div className="login-form">
          <ToastContainer />
          <h4>
            <i className="icofont-key-hole" /> Login
          </h4>
          <form onSubmit={(event) => handleSubmit(event)} className="c-form">
            <input
              type="email"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Input Email ..."
            />
            <input
              type="password"
              name="password"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="********"
            />
            <button className="main-btn" type="submit">
              <i className="icofont-key" /> Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
