import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import img1 from "../../../assets/bannerImg/1.webp";
import img2 from "../../../assets/bannerImg/2.webp";

const Banner = () => {
  return (
    <AwesomeSlider className="h-[80vh] mt-[80px]">
      <div className="relative">
        <img
          className="w-full bg-cover bg-center bg-no-repeat"
          src={img2}
          alt=""
        />
        <div className="text-white absolute w-full top-[35%]">
          <div className="w-[80%] font-Oxanium mx-auto text-center">
            <h4 className="text-4xl tracking-[3px] mb-5">Best Shooting Game</h4>
            <h1 className="text-[70px] font-semibold mb-5">
              SHADOWGUN WAR GAMES
            </h1>
            <button className="px-9 py-3 font-Oxanium font-semibold rounded-md bg-[#F67929] hover:bg-[#f66307]">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <img
          className="w-full bg-cover bg-center bg-no-repeat"
          src={img1}
          alt=""
        />
        <div className="text-white absolute w-full top-[35%]">
          <div className="w-[80%] font-Oxanium mx-auto text-center">
            <h4 className="text-4xl tracking-[3px] mb-5">
              Star Wars Up Coming
            </h4>
            <h1 className="text-[70px] font-semibold mb-5">
              GAME GUIDE UNOFFICIAL
            </h1>
            <button className="px-9 py-3 font-Oxanium font-semibold rounded-md bg-[#F67929] hover:bg-[#f66307]">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </AwesomeSlider>
  );
};

export default Banner;
