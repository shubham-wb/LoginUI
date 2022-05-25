import React, { useContext, useEffect, useState } from "react";
import UidForm from "./UidForm";
import TC from "../assets/images/T&C.jpg";
import { AuthContext } from "../Provider/authProvider";
import Loggingin from "./Loggingin";
function ValidateDoc() {
  let { otpVerified } = useContext(AuthContext);
  console.log(otpVerified);
  let [uidForm, setShowUidForm] = useState(false);
  let [signingIn, setSigningIn] = useState(false);
  let [showBtn, setShowBtn] = useState(true);

  // window.addEventListener("click", () => {
  //   setShowUidForm(false);
  // });

  useEffect(() => {
    if (!localStorage.getItem("verified")) {
      setShowUidForm(true);
    }
  }, []);

  function handleClick() {
    setShowUidForm(true);
  }

  function handleAccepted() {
    setShowUidForm(false);
    setSigningIn(true);
  }
  return (
    <>
      {!signingIn ? (
        uidForm ? (
          <UidForm btn={handleAccepted} />
        ) : null
      ) : (
        <Loggingin />
      )}
      <div className='doc'>
        <img src={TC} alt='terms and conditions'></img>
      </div>
      {!localStorage.getItem("verified") ? (
        <button
          onClick={() => {
            handleClick();
          }}
        >
          Request OTP to Sign
        </button>
      ) : null}
    </>
  );
}

export default ValidateDoc;
