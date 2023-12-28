import { useEffect, useState } from "react";
import Product from "../../components/Product/product";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import products from "./../../../public/products.json";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import BestSeller from "../../components/Product/bestSeller";
// ..
AOS.init();
const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [screenWidth, setScreenWidth] = useState(
    window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
  );

  const laptopThreshold = 1024;
  const tabletThreshold = 850;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(
        window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth < tabletThreshold) {
      setItemsPerPage(1);
    } else if (screenWidth < laptopThreshold) {
      setItemsPerPage(2);
    } else {
      setItemsPerPage(4);
    }
  }, [screenWidth]);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentItems = products.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <div>
      <div
        data-aos="fade-left"
        className="flex justify-center items-center my-10"
      >
        <div>
          <button
            className="lg:p-3 p-1 hover:bg-orange-500 bg-gray-100 rounded-full"
            onClick={() =>
              setCurrentPage(currentPage === 0 ? 2 : currentPage - 1)
            }
          >
            <MdKeyboardArrowLeft className="size-10" />
          </button>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 ">
          {currentItems.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
        <div>
          <button
            className="lg:p-3 p-1 hover:bg-orange-500 bg-gray-100 rounded-full"
            onClick={() =>
              setCurrentPage(
                currentPage === totalPages - 1 ? 0 : currentPage + 1
              )
            }
          >
            <MdOutlineKeyboardArrowRight className="size-10" />
          </button>
        </div>
      </div>

  <BestSeller/>
    </div>
  );
};

export default Home;
