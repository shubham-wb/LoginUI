import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  let [userEmail, setUserEmail] = useState("");
  let [uid, setUid] = useState(false);
  let [otpVerified, setOtpVerified] = useState(false);

  const login = (email) => {
    localStorage.setItem("email", JSON.stringify(email));
    setUserEmail(email);
    return true;
  };

  const updateUid = (uid) => {
    localStorage.setItem("uid", JSON.stringify(uid));
    setUid(uid);
  };

  const handleResetUid = () => {
    localStorage.removeItem("uid");
    setUid("");
  };

  const handleOtpVerification = (otp) => {
    setOtpVerified(true);
    localStorage.setItem("verified", true);
  };

  return (
    <AuthContext.Provider
      value={{
        uid,
        userEmail,
        login,
        updateUid,
        otpVerified,
        handleOtpVerification,
        handleResetUid,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
