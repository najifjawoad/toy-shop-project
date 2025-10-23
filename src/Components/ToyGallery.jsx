import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";

const Wishlist = () => {
  const toys = useLoaderData(); // fetched toy data
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (toy) => {
    const exists = wishlist.find((item) => item.toyId === toy.toyId);
    if (exists) {
      setWishlist(wishlist.filter((item) => item.toyId !== toy.toyId));
      toast.info(`Removed "${toy.toyName}" from wishlist`);
    } else {
      setWishlist([...wishlist, toy]);
      toast.success(`Added "${toy.toyName}" to wishlist`);
    }
  };

  const isWishlisted = (toyId) => wishlist.some((item) => item.toyId === toyId);

  return (
    <div className="bg-[#FFF1F1]">
      <Helmet>
        <title>My Wishlist</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <Header></Header>
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Your Wishlist</h2>

        {wishlist.length === 0 ? (
          <div className="text-center text-gray-500">
            Your wishlist is empty.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {wishlist.map((toy) => (
              <div
                key={toy.toyId}
                className="card bg-[#E9B3FB] shadow-xl hover:shadow-2xl transition-all"
              >
                <figure className="p-4">
                  <img
                    src={toy.pictureURL}
                    alt={toy.toyName}
                    className="rounded-xl object-cover h-40"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{toy.toyName}</h2>
                  <p className="text-sm text-gray-600">{toy.subCategory}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold text-primary">
                      ${toy.price?.toFixed(2)}
                    </span>
                    <button
                      onClick={() => toggleWishlist(toy)}
                      className="text-red-500 hover:text-red-700 text-xl"
                      title="Remove from wishlist"
                    >
                      <FaHeart />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-3">Browse Toys</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {toys.map((toy) => (
              <div
                key={toy.toyId}
                className="card bg-base-100 border hover:shadow-md transition-all"
              >
                <figure className="p-4">
                  <img
                    src={toy.pictureURL}
                    alt={toy.toyName}
                    className="rounded-xl object-cover h-40"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{toy.toyName}</h2>
                  <p className="text-sm text-gray-600">{toy.subCategory}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold text-primary">
                      ${toy.price?.toFixed(2)}
                    </span>
                    <button
                      onClick={() => toggleWishlist(toy)}
                      className="text-red-500 hover:text-red-700 text-xl"
                      title={
                        isWishlisted(toy.toyId)
                          ? "Remove from wishlist"
                          : "Add to wishlist"
                      }
                    >
                      {isWishlisted(toy.toyId) ? <FaHeart /> : <FaRegHeart />}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Wishlist;
