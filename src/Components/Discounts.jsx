import { useLoaderData } from "react-router-dom";
import { FaEye, FaStar } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { Link } from "react-router";

const DiscountedToys = () => {
  const toys = useLoaderData();

  const discountedToys = toys.filter(toy => toy.discount);

  return (
    <div className="py-10 px-5 lg:px-20  min-h-screen">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-secondary">
        <MdDiscount className="inline-block mr-2 text-yellow-500" />
        Discounted Toys
      </h2>

      {discountedToys.length === 0 ? (
        <p className="text-center text-lg">No discounted toys available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {discountedToys.map(toy => (
            <div
              key={toy.toyId}
              className="card bg-base-100 shadow-xl border border-primary/20 hover:shadow-2xl transition duration-300"
            >
              <figure className="px-4 pt-4">
                <img
                  src={toy.pictureURL}
                  alt={toy.toyName}
                  className="rounded-xl h-52 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-lg font-bold">
                  {toy.toyName}
                  <div className="badge badge-success">-{Math.floor(Math.random() * 30 + 10)}%</div>
                </h3>
                <p className="text-sm text-gray-500">{toy.description}</p>

                <div className="flex justify-between items-center mt-2">
                  <span className="text-secondary font-semibold text-lg">${toy.price}</span>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <FaStar />
                    <span className="text-sm text-gray-600">{toy.rating}</span>
                  </div>
                </div>

                <div className="text-sm text-gray-600 mt-2">
                  <span className="font-medium">Category:</span> {toy.subCategory}
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

export default DiscountedToys;
