

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import { toast } from "react-toastify";
import app from "../firebase/firebase.config";
import { Helmet } from "react-helmet-async";
const auth = getAuth(app);
const ForgotPassword = () => {
  const location = useLocation();
 

  const [email, setEmail] = useState("");


  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent. Redirecting to Gmail...");
        setTimeout(() => {
          window.location.href = "https://mail.google.com"; 
        }, 1500);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex items-center min-h-screen justify-center">
            <Helmet>
              <title>Reset Password</title>
              <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
      <div className="card w-full max-w-sm shadow-2xl bg-base-100 p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
        <form onSubmit={handleReset}>
          <label className="label font-semibold">Enter Your Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full mb-4"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="btn btn-primary w-full" type="submit">
            Send Reset Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
