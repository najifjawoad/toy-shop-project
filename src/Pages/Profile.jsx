import React, { use, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { FaUserEdit } from "react-icons/fa";
import userImg from '../assets/user.png'

const Profile = () => {
  const { user } = use(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!name || !photoURL) {
      toast.error("Name and Photo URL cannot be empty.");
      return;
    }

    try {
      setLoading(true);
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      toast.success("Profile updated successfully. Please reload to see changes.");
    } catch (error) {
      toast.error(error.message || "Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFE1AF] p-6 flex flex-col items-center justify-center">
      <div className="card w-full max-w-md bg-white shadow-lg p-6">
       
        <div className="text-center mb-6">

            {
                user ?  <img
            src={user?.photoURL}
            alt="User"
            className="w-24 h-24 rounded-full mx-auto border-4 border-primary object-cover"
          /> :  <img
            src={userImg}
            alt="User"
            className="w-24 h-24 rounded-full mx-auto border-4 border-primary object-cover"
          />
            }
         
          <h2 className="text-xl font-bold mt-2">{user?.displayName || "No Name"}</h2>
          <p className="text-gray-600">{user?.email}</p>
        </div>

       
        <form onSubmit={handleUpdate} className="space-y-4 border-t pt-4">
          <h3 className="text-lg font-semibold text-center">Edit Your Info</h3>

          <div className="form-control">
            <label className="label font-medium">Name</label>
            <br />
            <input
              type="text"
              className="input input-bordered"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-medium">Photo URL</label>
            <br />
            <input
              type="text"
              className="input input-bordered"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Photo URL"
              required
            />
          </div>

          <button
            type="submit"
            className={`btn btn-primary w-full flex items-center justify-center gap-2 ${
              loading ? "loading" : ""
            }`}
            disabled={loading}
          >
            <FaUserEdit />
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
