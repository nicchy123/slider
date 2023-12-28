import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { LuRefreshCw } from "react-icons/lu";

const Product = ({ product }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleMouseEnter = (productId) => {
    setHoveredProduct(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };
  const { image, title, price, description, discount } = product;
  return (
    <div className="flex lg:flex-row flex-col justify-center items-start lg:p-5 p-2 lg:m-2 m-1 gap-5">
      <div
        onMouseEnter={() => handleMouseEnter(product.id)}
        onMouseLeave={() => handleMouseLeave(null)}
        className="relative lg:w-1/2 mx-auto h-full flex justify-center items-center hover:bg-gray-200 rounded-md"
      >
        <img
          className=" lg:h-60 lg:w-5/6 w-full  mx-auto object-cover"
          src={image}
          alt=""
        />
        {discount && (
          <p className="absolute lg:p-3 p-1 rounded-full bg-orange-500 top-10 left-20">
            -{discount}%
          </p>
        )}
        {hoveredProduct === product.id && (
          <div className="absolute top-50 left-50 flex justify-center items-center gap-3">
            <p className=" lg:p-3 p-1 rounded-full bg-orange-500 cursor-pointer ">
              <CiBookmark />
            </p>
            <p className=" lg:p-3 p-1 rounded-full bg-orange-500 cursor-pointer">
              <IoSearchSharp />
            </p>
            <p className=" lg:p-3 p-1 rounded-full bg-orange-500 cursor-pointer">
              <LuRefreshCw />
            </p>
          </div>
        )}
      </div>
      <div className="lg:w-1/2">
        <div className="flex justify-start items-start lg:w-1/2 ">
          <div className="flex ">
            {product.review !== 0 &&
              Array.from(Array(product.review).keys()).map(() => {
                return <FaStar className="text-yellow-400 size-5" />;
              })}
          </div>
          <div className="flex">
            {product.review !== 0 &&
              Array.from(Array(5 - product.review).keys()).map(() => {
                return <FaRegStar className="text-yellow-400 size-5" />;
              })}
          </div>
        </div>
        <h1 className="my-3 text-xl font-bold ">{title}</h1>
        <h1 className="my-3 text-2xl font-bold text-orange-600">${price}</h1>
        <p>{description.split(0, 10)[0]}</p>
        <button className="bg-gray-600 my-2 text-white text-sm lg:p-3 p-2 rounded-xl">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Product;
