import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import genericLogo from "../assets/images/generic-logo-hi.png";
import digioLogo from "../assets/images/digio_logo.jpg";
import GoogleIcon from "../assets/images/google.png";
import { AuthContext } from "../Provider/authProvider";
import { Toaster, toast } from "react-hot-toast";
function Register() {
  function validateEmail(email) {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email || regex.test(email) === false) {
      return false;
    }
    return true;
  }

  let [value, setValue] = useState("");
  let { login } = useContext(AuthContext);

  let navigate = useNavigate();
  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit() {
    if (validateEmail(value)) {
      window.location.replace("/authentication=true/uid_validation");
      login(value);
    } // navigate("/authentication=true/uid_validation", { replace: true });
    else {
      toast.error("Enter valid email");
    }
  }
  return (
    <>
      <Toaster position='top-center' />

      <div className='register'>
        <div className='register-wrapper'>
          <div className='reg-header'>
            <div className='reg-header-text'>
              <div>Sign Document using</div>
              <div style={{ fontSize: "0.8rem", marginTop: "10px" }}>
                {value}
              </div>
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
              Policy of <Link to='Digio.in'>Digio.in</Link>
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
                width: "30%",
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
                <span
                  style={{
                    marginTop: "5px",
                    marginLeft: "20px",
                    fontSize: "14px",
                  }}
                >
                  Powered by
                </span>
                <span
                  style={{
                    height: "50%",
                    width: "100%",
                    marginLeft: "20px",
                  }}
                >
                  <Link to='www.digio.in'>Digio</Link>
                </span>
              </div>
            </div>
            <div
              style={{
                justifyContent: "flex-end",
                height: "100%",
                width: "40%",
                marginRight: "10px",
                display: "flex",
              }}
            >
              <span
                style={{
                  color: "gray",
                  marginTop: "-26px",
                  fontSize: "40px",
                }}
              >
                1
              </span>
              /3 steps
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
