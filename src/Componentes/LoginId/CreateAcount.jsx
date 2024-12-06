import React, {useState} from 'react'
import {Link , useNavigate} from 'react-router-dom'
import AcountImage from '../Components/assets/Slider2.png'

const CreateAcount = () => {
    const [email , serEmail] = useState();
    const validEmail = ""
    
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (email === validEmail ) {
            alert("Account Created Successfully")
            navigate('/UserLoginPassword')
            } else {
                alert("Invalid Email or Password")

            }
        }

    
  return (
    <div>
      <div className="Ready-And-Watch">
<img src={AcountImage} alt="" className="Acountbackground" />
        <div className="SignPage">
        <h1 className='rtw'>Ready to Watch ?</h1>
        <p className="EnterEmail">Enter your email to create or sign in to <br/> your account</p>
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <div className="Emailaddress">
            <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => serEmail(e.target.value)}
         
              />
              </form>
              </div>
              <div className="Create-GetStart-Button">
             <Link to='/UserPassord'><button type="button" className="btn btn-danger">Get Started</button></Link> 
              </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAcount
