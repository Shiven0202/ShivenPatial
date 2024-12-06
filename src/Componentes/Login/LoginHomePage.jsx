import React, { useRef, useState } from 'react';
import './Login.css';
import {Link } from 'react-router-dom'
import NetflixLogo from '../Components/assets/Loogo.png';  
import Template from '../Components/assets/Slider1.jpg';
import Movie1 from '../Components/assets/Movie1.png';
import Movie2 from '../Components/assets/Movie2.png';
import Movie3 from '../Components/assets/Movie3.png';
import Movie4 from '../Components/assets/Movie4.png';
import Movie5 from '../Components/assets/Movie5.png';
import Movie6 from '../Components/assets/Movie6.png';
import Movie7 from '../Components/assets/Movie7.png';
import Movie8 from '../Components/assets/Movie8.png';
import Movie9 from '../Components/assets/Movie9.png';
import Movie10 from '../Components/assets/Movie10.png';
import Netflix1 from '../Components/assets/NetflixMovie1.png';
import Netflix2 from '../Components/assets/NetflixMovie2.png';
import Netflix3 from '../Components/assets/NetflixMovie3.png';
import Netflix4 from '../Components/assets/NetflixMovie4.png';
import Netflix5 from '../Components/assets/NetflixMovie5.png';
import Netflix6 from '../Components/assets/NetflixMovie6.png';
import Netflix7 from '../Components/assets/NetflixMovie7.png';
import Netflix8 from '../Components/assets/NetflixMovie8.png';
import Netflix9 from '../Components/assets/NetflixMovie9.png';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import HandshakeIcon from '@mui/icons-material/Handshake';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const LoginHomePage = () => {
  const trendingSliderRef = useRef(null);
  const netflixSliderRef = useRef(null);

  // Function to scroll left for the "Trending Now" section
  const scrollLeftTrending = () => {
    if (trendingSliderRef.current) {
      trendingSliderRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  // Function to scroll right for the "Trending Now" section
  const scrollRightTrending = () => {
    if (trendingSliderRef.current) {
      trendingSliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  // Function to scroll left for the "Only on Netflix" section
  const scrollLeftNetflix = () => {
    if (netflixSliderRef.current) {
      netflixSliderRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  // Function to scroll right for the "Only on Netflix" section
  const scrollRightNetflix = () => {
    if (netflixSliderRef.current) {
      netflixSliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is Netflix?',
      answer: 'Netflix is a streaming service that offers a wide variety of television shows and movies.',
    },
    {
      question: 'How much does Netflix cost?',
      answer: 'Netflix offers several subscription plans, starting at $9.99/month.',
    },
    {
      question: 'Can I watch Netflix offline?',
      answer: 'Yes, Netflix allows you to download shows and movies for offline viewing.',
    },
    {
      question: 'How do I cancel my Netflix account?',
      answer: 'You can cancel your account anytime by going to your account settings.',
    },
  ];

  return (
    <div className="LoginPageBox">
      <div className="LoginPageBoxInner">
        <div className="LogoImage">
          <img src={NetflixLogo} alt="Netflix Logo" width="70px" height="40px" className="Netflix" />
        </div>
        <div className="Privacy-Extra-Navbat">
          <div className="Privicy">
            <h2 className="PrivicyBar">PRIVACY</h2>
          </div>
          <div className="SignIn">
            <h2 className="Sign">SIGN IN</h2>
          </div>
          <div className="more">
            <MoreVertIcon sx={{ fontSize: "25px" }} />
          </div>
        </div>
      </div>
      <div className="TemplateImage">
        <img src={Template} alt="" className="SliderAddvertisment" />
        <div className="MamberShipPrice">
          <h1 className="Movies">Unlimited Movies ,  Tv  <br /> Shows and More</h1>
          <p className="MamberShip">
            Start At 149$. Cancel At Any Time
          </p>
        </div>
      </div>
      <div className="Ready-For-Watch">
        <p className="Watch">Ready To Watch? Enter your email to create or restart your membership</p>
        <div className="Requarments">
          <div className="Gmail">
            <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
          </div>
          <div className="StartButton">
            <button type="button" className="btn btn-secondary">
              Get Started  <ArrowForwardIosIcon className="RightArrow" sx={{ fontSize: "25px" }} />
            </button>
          </div>
        </div>
      </div>

      {/* Trending Now Section */}
      <div className="Move-Trending">
        <h1 className="Trending">Trending Now</h1>
        <div className="movie-section-01">
          <button className="arrow-button left" onClick={scrollLeftTrending}>
            <ArrowBackIosIcon className="arrow-icon" />
          </button>
          <div className="movie-section-inner" ref={trendingSliderRef}>
            <img src={Movie1} alt="Movie 1" className="poster" />
            <img src={Movie2} alt="Movie 2" className="poster" />
            <img src={Movie3} alt="Movie 3" className="poster" />
            <img src={Movie4} alt="Movie 4" className="poster" />
            <img src={Movie5} alt="Movie 5" className="poster" />
            <img src={Movie6} alt="Movie 6" className="poster" />
            <img src={Movie7} alt="Movie 7" className="poster" />
            <img src={Movie8} alt="Movie 8" className="poster" />
            <img src={Movie9} alt="Movie 9" className="poster" />
            <img src={Movie10} alt="Movie 10" className="poster" />
          </div>
          <button className="arrow-button right" onClick={scrollRightTrending}>
            <ArrowForwardIosIcon className="arrow-icon" />
          </button>
        </div>
      </div>

      {/* Only on Netflix Section */}
      <div className="Move-Trending-Box">
        <h1 className="Trending">Only on Netflix</h1>
        <div className="movie-section-02">
          <button className="arrow-button left" onClick={scrollLeftNetflix}>
            <ArrowBackIosIcon className="arrow-icon" />
          </button>
          <div className="movie-section-inner" ref={netflixSliderRef}>
            <img src={Netflix1} alt="Netflix Movie 1" className="NetflixMovie" />
            <img src={Netflix2} alt="Netflix Movie 2" className="NetflixMovie" />
            <img src={Netflix3} alt="Netflix Movie 3" className="NetflixMovie" />
            <img src={Netflix4} alt="Netflix Movie 4" className="NetflixMovie" />
            <img src={Netflix5} alt="Netflix Movie 5" className="NetflixMovie" />
            <img src={Netflix6} alt="Netflix Movie 6" className="NetflixMovie" />
            <img src={Netflix7} alt="Netflix Movie 7" className="NetflixMovie" />
            <img src={Netflix8} alt="Netflix Movie 8" className="NetflixMovie" />
            <img src={Netflix9} alt="Netflix Movie 9" className="NetflixMovie" />
          </div>
          <button className="arrow-button right" onClick={scrollRightNetflix}>
            <ArrowForwardIosIcon className="arrow-icon" />
          </button>
        </div>
      </div>

      <div className="More-Reason-To-J">
        <h1 className="More-Reason">More Reasons to Join</h1>
        <div className="ReasonBoxc">
          <div className="Reasion-one">
            <p className="add">Stories tailored to your <br /> taste</p>
            <p className="hand"><VolunteerActivismIcon sx={{ fontSize: "25px" }} /></p>
          </div>
          <div className="Reasion-one">
            <p className="add">Cancel or switch plans<br /> anytime </p>
            <p className="hand"><HandshakeIcon sx={{ fontSize: "25px" }} /></p>
          </div>
          <div className="Reasion-one">
            <p className="add">A place just for kids</p>
            <p className="hand"><FavoriteIcon sx={{ fontSize: "25px" }} /></p>
          </div>

          <div className="Reasion-one">
            <p className="add">For your phone, tablet, <br /> laptop and TV</p>
            <p className="hand"><PhonelinkIcon sx={{ fontSize: "25px" }} /></p>
          </div>
        </div>
      </div>

      <div className="NetflixQutions">
  <h1 className="NetflixQ">Frequently Asked Questions</h1>
  {faqs.map((faq, index) => (
    <div key={index} className="QutionsBox" onClick={() => toggleAnswer(index)}>
      <div className="QutionHeader">
        <p className="qutions">{faq.question}</p>
        <span className="icon">{openIndex === index ? '−' : '+'}</span>
      </div>
      {openIndex === index && (
        <div className="Ans">
          <p className="ans">{faq.answer}</p>
        </div>
      )}
    </div>
  ))}
</div>

<div className="GetStartButton">
  {/* Use Link to navigate to the LoginId page */}
  <Link to='/LoginId'>
    <button type="button" className="btn btn-danger">Get Started</button>
  </Link>
  <p className='Create-Membership'>Create or restart your membership</p>
</div>



<div className="CallNumber">
  <a href='' className="Call">Questions? Call 000-800-919-1743</a>
</div>
<div className="HelpCenter">
  <a href='' className='Fq'>How to watch on Netflix</a>
  <a href='' className='Fq'>Account & Billing</a>
  <a href='' className='Fq'>Playback Issues</a>
  <a href='' className='Fq'>Streaming Quality</a>
  <a href='' className='Fq'>App & Devices</a>
  <a href='' className='Fq'>Sign In Problems</a>
  <a href='' className='Fq'>Help with Password</a>
  <a href='' className='Fq'>Netflix Features</a>
  <a href='' className='Fq'>Membership & Plan</a>
  <a href='' className='Fq'>Cancel Netflix</a>
  <a href='' className='Fq'>Contact Netflix Support</a>
</div>

    </div>
    
  );
};

export default LoginHomePage;
