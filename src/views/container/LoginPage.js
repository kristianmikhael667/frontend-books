import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postLoginUser } from "../../store/action/AuthAction";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("masuk ke 1");
    console.log("isisnya ", email);
    if (!email || !password) {
      console.log("emty");
      toast.error("Email and Password wajib diisi!!");
    } else {
      dispatch(postLoginUser({ email: email, password: password }));
      navigate("/", { replace: true });

      // console.log("apaa ", dispatch);
      // const token = Cookies.get("token");
      // console.log("masuk kok", token);
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
