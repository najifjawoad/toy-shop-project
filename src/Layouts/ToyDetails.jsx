import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { toast } from "react-toastify";

const ToyDetails = () => {
  const datas = useLoaderData(); // all toys
  const { id } = useParams(); // toyId from URL
  const [toy, setToy] = useState(null); // single toy
  const [carted, setCarted] = useState(false);

  useEffect(() => {
    const found = datas.find((t) => t.toyId === parseInt(id));
    setToy(found);
  }, [datas, id]);

  const handleCartAdd = () => {
    toast.success("Item Added To Cart");
    setCarted(true);
  };

  const handleCartRemove = () => {
    toast.success("Item Removed From Cart");
    setCarted(false);
  };

  if (!toy) {
    return (
      <div className="text-center mt-10 text-xl">Loading toy details...</div>
    );
  }

  const {
    toyName,
    pictureURL,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    description,
    subCategory,
    isPopular,
    newArrival,
    discount,
  } = toy;

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);

    return (
      <div className="flex items-center text-yellow-400">
        {[...Array(full)].map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}
        {half && <FaStarHalfAlt />}
        {[...Array(empty)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}
      </div>
    );
  };

  return (
    <div className="h-screen mx-auto bg-[#FFE1AF]">
      {/* Header section */}
      <Header />

      {/* Details section */}
      <div className="max-w-5xl mx-auto p-6">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="lg:w-1/2 p-4">
            <img
              src={pictureURL}
              alt={toyName}
              className="rounded-xl object-cover w-full"
            />
          </figure>

          <div className="card-body lg:w-1/2">
            <h2 className="card-title text-2xl font-bold">{toyName}</h2>
            <p className="text-gray-600">{description}</p>

            <div className="space-y-1 mt-2">
              <p>
                <span className="font-semibold">Seller:</span> {sellerName}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {sellerEmail}
              </p>
              <p>
                <span className="font-semibold">Category:</span> {subCategory}
              </p>
              <p>
                <span className="font-semibold">Available:</span>{" "}
                {availableQuantity} pcs
              </p>
              <p>
                <span className="font-semibold">Price:</span> $
                {price?.toFixed(2)}
              </p>
            </div>

            <div className="mt-2">
              <span className="font-semibold">Rating:</span>
              {renderStars(rating)}
              <span className="text-sm ml-2 text-gray-500">({rating})</span>
            </div>

            <div className="mt-3 flex gap-2 flex-wrap items-center">
              {isPopular && (
                <span className="badge badge-primary">Popular</span>
              )}
              {newArrival && (
                <span className="badge badge-success">New Arrival</span>
              )}
              {discount && (
                <span className="badge badge-warning text-white">
                  Discount
                </span>
              )}
              {carted ? (
                <button
                  onClick={handleCartRemove}
                  className="btn btn-secondary rounded-full "
                >
                  Remove From Cart
                </button>
              ) : (
                <button
                  onClick={handleCartAdd}
                  className="btn btn-secondary rounded-full "
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ToyDetails;
