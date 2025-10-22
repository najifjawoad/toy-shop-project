import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";

const LogIn = () => {

   
    const {logInUser} = use(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const pass = event.target.password.value;
    logInUser(email,pass)
    .then((res)=>
        { 
            const user = res.user;
            
            toast.success(user.email +" " +'Logged In Successfully');
            navigate(`${location.state ? location.state : '/'}`);
            // event.target.reset();
        })
        .catch((error)=>{
            toast.error(error.message)
        })
    


  };

  return (
    <div className="flex items-center min-h-screen  ">
      <div className="card bg-red-200 w-full mx-auto max-w-sm shrink-0 shadow-2xl py-5 ">
        <h2 className="font-bold text-2xl text-center  ">
          Log In Your Account
        </h2>
        <form onSubmit={handleLogIn} className="card-body">
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
            <div className="font-semibold">
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button className="btn btn-neutral mt-4">Login</button>
            <p className="mt-5 text-center font-semiboldhe">
              Don't Have An Account ?{" "}
              <Link
                to="/auth/register"
                className="text-red-500  hover:text-red-800"
              >
                Register
              </Link>{" "}
            </p>
          </fieldset>
          <button className="btn bg-white text-black border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
