import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Acount.css";
import AcountImage from "../Components/assets/Slider2.png";
import NetflixLogo from "../Components/assets/Loogo.png";

const UserLoginPassword = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const validEmail = "";
  const validPassword = "";
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === validEmail && password === validPassword) {
      alert("Login Successfull");
      navigate("/MoviePage");
    } else {
      alert("Invalid Email or Password");
    }
  };
  return (
    <div>
      <div className="NavbarforSingh">
        <div className="NavImage">
          <img src={NetflixLogo} className="navimagelogo" alt="Logo" />
        </div>
        <div className="HelpNav">
          <Link to="/Help">
            <p className="netflixhelp">Help</p>
          </Link>
        </div>
        <div className="HelpSingh">
          <Link to="/LoginId">
            <p className="netflixhSingh">Sing In</p>
          </Link>
        </div>
      </div>
      <div className="Ready-And-Watch">
        <img src={AcountImage} alt="" className="Acountbackground" />
        <div className="SignPage">
          <h1 className="rtw">Ready to Watch ?</h1>
          <p className="EnterEmail">
            Enter your email to create or sign in to <br /> your account
          </p>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <form onSubmit={handleSubmit}>
            <div className="Emailaddress">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="userpassword">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>
          <div className="Create-GetStart-Button">
            <Link to="/MoviePage">
              <button type="button" className="btn btn-danger">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoginPassword;
