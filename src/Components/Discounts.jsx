import { useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { FaEye, FaStar } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

const DiscountedToys = () => {
  const toys = useLoaderData();
  const discountedToys = toys.filter((toy) => toy.discount);

  
  useEffect(() => {
    Aos.init({
      duration: 800,  
      offset: 120,    
      easing: "ease-in-out",
      once: true,   
    });
  }, []);

  return (
    <div className="py-10 px-5 lg:px-20 min-h-screen bg-[#FFF9F3]">
      <h2
        className="text-3xl lg:text-4xl font-bold text-center mb-10 text-secondary"
        data-aos="fade-down"
      >
        <MdDiscount className="inline-block mr-2 text-yellow-500" />
        Discounted Toys
      </h2>

      {discountedToys.length === 0 ? (
        <p
          className="text-center text-lg text-gray-600"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          No discounted toys available.
        </p>
      ) : (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
        >
          {discountedToys.map((toy, index) => (
            <div
              key={toy.toyId}
              data-aos="zoom-in"
              data-aos-delay={index * 100} 
              className="card bg-base-100 shadow-xl border border-primary/20 hover:shadow-2xl transition duration-300"
            >
              <figure className="px-4 pt-4">
                <img
                  src={toy.pictureURL}
                  alt={toy.toyName}
                  className="rounded-xl h-52 object-cover"
                  data-aos="fade-up"
                  data-aos-delay={index * 120 + 150}
                />
              </figure>

              <div className="card-body">
                <h3
                  className="card-title text-lg font-bold"
                  data-aos="fade-right"
                  data-aos-delay={index * 150 + 100}
                >
                  {toy.toyName}
                  <div
                    className="badge badge-success"
                    data-aos="fade-left"
                    data-aos-delay={index * 180 + 200}
                  >
                    -{Math.floor(Math.random() * 30 + 10)}%
                  </div>
                </h3>

                <p
                  className="text-sm text-gray-500"
                  data-aos="fade-up"
                  data-aos-delay={index * 150 + 150}
                >
                  {toy.description}
                </p>

                <div
                  className="flex justify-between items-center mt-2"
                  data-aos="zoom-in-up"
                  data-aos-delay={index * 150 + 200}
                >
                  <span className="text-secondary font-semibold text-lg">
                    ${toy.price}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <FaStar />
                    <span className="text-sm text-gray-600">{toy.rating}</span>
                  </div>
                </div>

                <div
                  className="text-sm text-gray-600 mt-2"
                  data-aos="fade-right"
                  data-aos-delay={index * 200 + 150}
                >
                  <span className="font-medium">Category:</span>{" "}
                  {toy.subCategory}
                </div>

                <div
                  className="card-actions justify-end mt-4"
                  data-aos="fade-left"
                  data-aos-delay={index * 200 + 250}
                >
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
