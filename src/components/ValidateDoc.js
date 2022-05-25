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

  useEffect(() => {
    if (!localStorage.getItem("verified")) {
      setShowUidForm(true);
    }
  }, []);

  function handleClick() {
    setShowUidForm(true);
  }

  setTimeout(() => {
    document.getElementById("doc").addEventListener("click", () => {
      setShowUidForm(false);
    });
  }, 2000);
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
      <div
        className='doc'
        id='doc'
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={TC}
          style={{
            height: "90%",
            width: "40%",
          }}
          alt='terms and conditions'
        ></img>
      </div>
      <div
        style={{
          height: "10%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!localStorage.getItem("verified") ? (
          <button
            style={{
              cursor: "pointer",
              height: "40px",
              width: "200px",
              background: "skyblue",
              zIndex: "100",
            }}
            onClick={() => {
              handleClick();
            }}
          >
            Request OTP to Sign
          </button>
        ) : null}
      </div>
    </>
  );
}

export default ValidateDoc;
