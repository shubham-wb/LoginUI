import React, { useEffect, useState } from "react";
import "../assets/css/loggingin.css";
function Loggingin() {
  let [signingIn, setSigningIn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSigningIn(false);
    }, 3000);
  });

  return (
    <div
      className='signingin'
      style={{
        width: "100%",
        height: "30%",
        backgroundColor: "transparent",
      }}
    >
      {signingIn ? (
        <div>
          <div>Signing In...</div>
          <div>Mutual Non-Disclousre aggrement</div>
        </div>
      ) : (
        <div
          className='verified'
          style={{
            height: "20%",
            width: "70%",
          }}
        >
          Aadhar Verified SuccessFully
        </div>
      )}
    </div>
  );
}

export default Loggingin;
