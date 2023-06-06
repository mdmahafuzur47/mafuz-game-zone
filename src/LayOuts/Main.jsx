import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared_Pages/Header/Navbar";
import Footer from "../Components/Shared_Pages/Footer/Footer";

const Main = () => {
  return (
    <div className="bg-[#1A1A1A] min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
