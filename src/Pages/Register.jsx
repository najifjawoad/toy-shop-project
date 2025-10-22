import React, { useState, use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👈 Add this

const Register = () => {
  const { createUser, setUser, upadteTheUser } = use(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // 👈 State to toggle password

  const handleRegister = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const pass = event.target.password.value;
    const name = event.target.name.value;
    const photoURLL = event.target.photoURL.value;

    const errors = [];

    if (pass.length < 6) {
      errors.push("Password must be at least 6 characters long.");
    }

    if (!/[A-Z]/.test(pass)) {
      errors.push("Password must include at least one uppercase letter.");
    }

    if (!/[a-z]/.test(pass)) {
      errors.push("Password must include at least one lowercase letter.");
    }

    if (errors.length > 0) {
      errors.forEach((err) => toast.error(err));
      return;
    }

    createUser(email, pass)
      .then((res) => {
        const user = res.user;
        toast.success("Registration Done");

        upadteTheUser({ displayName: name, photoURL: photoURLL })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURLL });
          })
          .catch((error) => {
            toast.error(error.message);
            setUser(user);
          });

        navigate("/home");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex items-center min-h-screen">
      <div className="card bg-[#E2A16F] w-full mx-auto max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-bold text-2xl text-center">Register Your Account</h2>
        <form onSubmit={handleRegister} className="card-body">
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

            {/* password */}
            <label className="label font-bold text-black my-3">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"} // 👈 Toggle
                className="input w-full pr-10"
                placeholder="Password"
                required
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-lg text-gray-600"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <label className="label mt-4">
              <input
                name="checkbox"
                type="checkbox"
                className="checkbox"
                required
              />
              Accept Terms & Conditions
            </label>

            <button className="btn btn-neutral mt-4">Register</button>

            <p className="mt-5 text-center font-semibold">
              Already Have An Account?{" "}
              <Link to="/auth/login" className="text-red-500 hover:text-red-800">
                Log In
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
