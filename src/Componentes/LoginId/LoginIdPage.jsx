import React, { useState } from 'react';
import {Link , useNavigate} from 'react-router-dom'
import './IdPassWord.css';  
import Theme from '../Components/assets/Movietheme.png'; 

const LoginIdPage = () => {
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();
  const navigate = useNavigate();

  const validEmail = "shivemdhiman98@gmail.com";
  const validPassword = "0123";
  const handleSubmit = (e) => {
    e.preventDefault();
    if(email === validEmail && password === validPassword){
      alert("Login Successfull");
      navigate('/MoviePage');
    }
    else{
      alert("Invalid Email or Password");
      }
    }

    

  return (
    <div className="LoginIdPage">
      <div className="ThemePhoto">
        <img src={Theme} alt="Movie Theme" className="themepic" />
      </div>
      <div className="LoginForm">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
          </div>
          {/*  Display error message if credentials are incorrect*/}
      

         <Link to='/MoviePage'><button type="submit" className="btn btn-primary">Sign In</button></Link> 
        </form>
        <div className="footer-text">
          <p>Need help? <a href="#">Contact Netflix Support</a></p>
        </div>
        <div className="Acount-text">
        <Link to='/Newuser'> <p className="NewAcount"> <a className='newacount' href="#">Create A New Acount  </a></p> </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginIdPage;
