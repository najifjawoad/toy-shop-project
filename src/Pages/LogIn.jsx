import React from 'react';
import { Link } from 'react-router';


const LogIn = () => {
    return (
        <div className="flex items-center min-h-screen  ">
      <div className="card bg-red-200 w-full mx-auto max-w-sm shrink-0 shadow-2xl py-5 ">
        <h2 className="font-bold text-2xl text-center  ">
          Log In Your Account
        </h2>
        <form  className="card-body">
          <fieldset className="fieldset">
            <label className="label font-bold text-black my-3">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label font-bold text-black my-3">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <div className='font-semibold'><a className="link link-hover">Forgot password?</a></div>

            <button className="btn btn-neutral mt-4">Login</button>
            <p className="mt-5 text-center font-semibold">
              Don't Have An Account ?{" "}
              <Link
                to="/auth/register"
                className="text-red-500  hover:text-red-800"
              >
                Register
              </Link>{" "}
            </p>
          </fieldset>
        </form>
      </div>
    </div>
    );
};

export default LogIn;