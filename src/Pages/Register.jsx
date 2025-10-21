import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
     <div className="flex items-center min-h-screen ">
      <div className="card bg-[#E2A16F] w-full mx-auto max-w-sm shrink-0 shadow-2xl py-5 ">
        <h2 className="font-bold text-2xl text-center  ">
          Register Your Account
        </h2>
        <form className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label font-bold text-black my-3">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
            
            {/* photoURL */}
            <label className="label font-bold text-black my-3">Photo URL</label>
            <input
              name="photoURL"
              type="text"
              className="input"
              placeholder="Photo URL"
              required
            />
            {/* email */}
            <label className="label font-bold text-black my-3">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* pass */}
            <label className="label font-bold text-black my-3">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            <label className="label mt-4">
              <input
                name="checkbox"
                type="checkbox"
                className="checkbox"
                required
              />
              Accept Term & Conditions
            </label>

            <button className="btn btn-neutral mt-4">Register</button>
            <p className="mt-5 text-center font-semibold">
              Already Have An Account ?{" "}
              <Link
                to="/auth/login"
                className="text-red-500  hover:text-red-800"
              >
                Log In
              </Link>{" "}
            </p>
          </fieldset>
        </form>
      </div>
    </div>
    );
};

export default Register;