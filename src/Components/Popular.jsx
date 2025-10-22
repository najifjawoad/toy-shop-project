import { useLoaderData } from "react-router-dom";
import { FaStar, FaEye } from "react-icons/fa";
import { Link, NavLink } from "react-router";


const PopularToys = () => {
  const toys = useLoaderData();

  const popularToys = toys.filter((toy) => toy.isPopular);

  console.log(toys);

  return (
    <div className="py-10 px-5 lg:px-20  min-h-screen">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-error">
        🔥 Popular Toys
      </h2>

      {popularToys.length === 0 ? (
        <p className="text-center text-lg">No popular toys found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularToys.map((toy) => (
            <div
              key={toy.toyId}
              className="card bg-base-200 shadow-md hover:shadow-xl transition duration-300 border border-error/10"
            >
              <figure className="p-4">
                <img
                  src={toy.pictureURL}
                  alt={toy.toyName}
                  className="rounded-xl h-48 object-cover w-full"
                />
              </figure>
              <div className="card-body pt-0">
                <h3 className="text-lg font-semibold text-error">
                  {toy.toyName}
                </h3>

                <div className="flex items-center gap-2 text-yellow-400 mt-1">
                  <FaStar />
                  <span className="text-sm text-gray-700">{toy.rating}</span>
                </div>

                <div className="text-sm text-gray-600 mt-2">
                  <span className="font-medium">Available:</span>{" "}
                  {toy.availableQuantity}
                </div>

                <div className="text-lg font-bold text-error mt-1">
                  ${toy.price}
                </div>

                <div className="card-actions justify-end mt-4">
                  <Link
                    to={`/details/${toy.toyId}`}
                    className="btn btn-sm btn-error text-white flex items-center gap-2"
                  >
                    <FaEye />
                    View More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularToys;
