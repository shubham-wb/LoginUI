import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import genericLogo from "../assets/images/generic-logo-hi.png";
import digioLogo from "../assets/images/digio_logo.jpg";
import GoogleIcon from "../assets/images/google.png";
import { AuthContext } from "../Provider/authProvider";
function Register() {
  let [value, setValue] = useState("");
  let { login } = useContext(AuthContext);

  let navigate = useNavigate();
  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit() {
    window.location.replace("/authentication=true/uid_validation");
    // navigate("/authentication=true/uid_validation", { replace: true });
    login(value);
  }
  return (
    <div className='register'>
      <div className='register-wrapper'>
        <div className='reg-header'>
          <div className='reg-header-text'>
            <div>Sign Document using</div>
            <div style={{ fontSize: "0.8rem", marginTop: "10px" }}>{value}</div>
          </div>
          <div className='reg-header-logo'>
            <img src={genericLogo} alt='generic-logo'></img>
          </div>
        </div>
        <div className='gmail-section'>
          <div
            style={{
              marginTop: "40px",
              height: "20%",
              textAlign: "center",
              width: "60%",
            }}
          >
            {value} uses Gmail?
          </div>
          <div>login using Google</div>
          <div className='google-ico'>
            <img src={GoogleIcon} alt='Signin ? Google'></img>
          </div>
        </div>
        <div className='section-break'>
          <hr></hr>
          <span>OR</span>
          <hr></hr>
        </div>
        <div className='email-input'>
          <div> Proceed with your email address</div>
          <input
            type='email'
            className='reg-input'
            value={value}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className='accept-tc'>
          <div>
            By Continuing , I confirm to the Terms and Services and Privacy
            Policy of <Link to='Digio.in'></Link>
          </div>
        </div>
        <button
          className='submit-btn'
          onClick={() => {
            handleSubmit();
          }}
        >
          CONTINUE
        </button>
        <div className='footer'>
          <div
            style={{
              display: "flex",
              height: "100%",
              width: "25%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{
                height: "80%",
                width: "30%",
              }}
              src={digioLogo}
              alt='digiIcon'
            ></img>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <span style={{ marginTop: "5px" }}>Powered by</span>
              <span style={{ height: "50%", width: "100%" }}>
                <Link to='www.digio.in'></Link>
              </span>
            </div>
          </div>
          <div
            style={{
              alignItems: "center",
              height: "100%",
              width: "40%",
              display: "flex",
            }}
          >
            <span
              style={{
                fontSize: "20px",
              }}
            >
              1
            </span>
            /3 steps
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
