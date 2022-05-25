import React, { useContext, useState } from "react";
import aadhar from "../assets/images/1200px-Aadhaar_Logo.svg.png";
import { AuthContext } from "../Provider/authProvider";
import "../assets/css/uidform.css";
import { Toaster, toast } from "react-hot-toast";
export default function UidForm(props) {
  let auth = useContext(AuthContext);
  let handleOtpVerification = auth.handleOtpVerification;
  let handleResetUid = auth.handleResetUid;
  let updateUid = auth.updateUid;
  let uid = localStorage.getItem("uid");
  uid = JSON.parse(uid);
  let [OtpbtnEnable, setOtpBtnEnable] = useState(true);
  let [uidbtnEnable, setUidBtnEnable] = useState(true);
  let [agreeTC, setAgreeTc] = useState(false);
  let [uidValue, setUidValue] = useState("");
  let [otp, setOtp] = useState();

  function isNaturalNumber(n) {
    n = n.toString(); // force the value incase it is not
    var n1 = Math.abs(n),
      n2 = parseInt(n, 10);
    return !isNaN(n1) && n2 === n1 && n1.toString() === n;
  }

  function handleReset() {
    setUidValue("");
    setUidBtnEnable(true);
    handleResetUid();
  }
  function handleuidChange(event) {
    if (event.target.value.length >= 0 && event.target.value.length <= 12) {
      setUidValue(event.target.value);

      if (
        event.target.value.length === 12 &&
        isNaturalNumber(event.target.value)
      ) {
        setUidBtnEnable(false);
      } else {
        setUidBtnEnable(true);
      }
    }
  }

  function handleOtpChange(event) {
    if (event.target.value.length >= 0 && event.target.value.length <= 6) {
      setOtp(event.target.value);

      if (
        event.target.value.length === 6 &&
        isNaturalNumber(event.target.value) &&
        uid &&
        agreeTC
      ) {
        setOtpBtnEnable(false);
      } else {
        setOtpBtnEnable(true);
      }
    }
  }

  function handleAgreeTCChange() {
    setAgreeTc((prev) => !prev);
  }

  function handleSubmitOtp() {
    console.log(otp);
    if (otp === "123456") {
      handleOtpVerification(otp);
      props.btn();
    } else {
      toast.error("Wrong OTP Entered !! ");
      setOtp("");
    }
  }

  function handleSubmitUid() {
    updateUid(uidValue);
  }

  return (
    <>
      <Toaster position='top-center' />
      <div className='register_uid'>
        <div className='uid-header'>Register Aadhar</div>
        <div className='uid-main'>
          <div className='adhar-img'>
            <img src={aadhar} alt='img-logo'></img>
          </div>
          <div className='uid-main-form'>
            <div className='uid-input'>
              <input
                type='text'
                value={uid ? uid : uidValue}
                onChange={handleuidChange}
                placeholder='Aadhar UID must be of 12 Digits'
              ></input>
              {!uid ? (
                <button disabled={uidbtnEnable} onClick={handleSubmitUid}>
                  Submit
                </button>
              ) : (
                <button
                  onClick={() => {
                    handleReset();
                  }}
                >
                  Reset
                </button>
              )}
            </div>
            <div className='uid-input'>
              <input
                style={{ width: "10%", height: "40%" }}
                type='checkbox'
                value={agreeTC}
                onChange={handleAgreeTCChange}
              ></input>
              <span>
                I agree to eSign this <span>KYC document</span> to get started
              </span>
            </div>

            <div className='uid-input'>
              <input type='text' value={otp} onChange={handleOtpChange}></input>
              <button
                disabled={OtpbtnEnable}
                onClick={() => {
                  handleSubmitOtp();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
