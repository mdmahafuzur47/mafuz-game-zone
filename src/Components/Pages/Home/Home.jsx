// import { Link } from "react-router-dom";
import Banner from "../../Shared_Pages/Banner/Banner";
import Category from "../../Shared_Pages/Category/Category";
import Services from "../../Shared_Pages/Services/Services";
// import { BiArrowFromBottom } from "react-icons/bi";
import Games from "../../Shared_Pages/Our_Games/Games";
import Reviews from "../../Shared_Pages/Reviews/Reviews";

const Home = () => {
  return (
    <div className="relative text-white">
      <Banner />
      <Services />
      <Category />
      <Games />
      <Reviews />

      {/* ToDo Top Button  */}
      {/* <Link to={""}>
        <div className="fixed z-10 w-12 h-12 border-black border-[3px] outline-[#F67929] outline text-4xl bg-[#F67929] rounded-full bottom-6 right-6 flex items-center justify-center">
          <span className="text-white ">
            <BiArrowFromBottom />
          </span>
        </div>
      </Link> */}
    </div>
  );
};

export default Home;
