import React, { useState } from 'react';
import products from '../../../public/products.json'
import { FaRegStar, FaStar } from 'react-icons/fa';
const BestSeller = () => {
 const [currentPage, setCurrentPage] = useState(0);
 const [itemsPerPage, setItemsPerPage] = useState(3);


 const totalPages = Math.ceil(products.length / itemsPerPage);
 const currentItems = products.slice(
   currentPage * itemsPerPage,
   currentPage * itemsPerPage + itemsPerPage
 );

    return (
      <div>
        <div className="lg:m-5 m-2 lg:flex justify-center items-start lg:my-20 my-10">
          <div className="lg:w-1/2 w-full">
            <img
              className="w-full"
              src="https://img.freepik.com/premium-vector/free-delivery-banner-with-courier-scooter-delivers-package-free-shipping-order-fast-delivery-badge-advertisement-express-delivery-with-man-scooter-vector-illustration_435184-1202.jpg"
              alt=""
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="flex justify-between items-center">
              <h1 className="lg:text-3xl text-xl font-bold">Best Sellers</h1>
              <div>
                <button
                  onClick={() =>
                    setCurrentPage(currentPage === 0 ? 2 : currentPage - 1)
                  }
                  className="size-3 p-2 bg-gray-400 hover:bg-orange-500 m-2 rounded-full"
                ></button>
                <button
                  onClick={() =>
                    setCurrentPage(
                      currentPage === totalPages - 1 ? 0 : currentPage + 1
                    )
                  }
                  className="size-3 p-2 bg-gray-400 hover:bg-orange-500 m-2 rounded-full"
                ></button>
                <button
                  onClick={() =>
                    setCurrentPage(
                      currentPage === totalPages - 1 ? 0 : currentPage + 1
                    )
                  }
                  className="size-3 p-2 bg-gray-400 hover:bg-orange-500 m-2 rounded-full"
                ></button>
              </div>
            </div>
            <div className="w-full my-4">
              {currentItems.map((product, i) => {
                return (
                  <div className="flex justify-center items-start gap-5 my-2">
                    <div className="lg:w-1/3 w-full">
                      <img
                        className="w-full  h-60"
                        src={product.image}
                        alt=""
                      />
                    </div>
                    <div className="lg:w-2/3 w-full">
                      <div className="flex justify-start items-start lg:w-1/2 ">
                        <div className="flex ">
                          {product.review !== 0 &&
                            Array.from(Array(product.review).keys()).map(() => {
                              return (
                                <FaStar className="text-yellow-400 size-5" />
                              );
                            })}
                        </div>
                        <div className="flex">
                          {product.review !== 0 &&
                            Array.from(Array(5 - product.review).keys()).map(
                              () => {
                                return (
                                  <FaRegStar className="text-yellow-400 size-5" />
                                );
                              }
                            )}
                        </div>
                      </div>
                      <h1 className="my-3 text-xl font-bold">
                        {product.title}
                      </h1>
                      <h1 className="my-3 text-2xl text-orange-600 font-bold">
                        ${product.price}
                      </h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
};

export default BestSeller;