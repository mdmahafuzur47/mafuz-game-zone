import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart, AiFillEye } from "react-icons/ai";

const GamesCard = ({ data }) => {
  const { img, name, price, rating } = data;
  const [love, setLove] = useState(false);
  return (
    <div className="flex group flex-col gap-3 justify-center items-center">
      <div className="relative">
        <img
          className="w-full transition-all h-60 group-hover:scale-105 rounded-md"
          src={img}
          alt="gameImg"
        />
        <div className="hidden group-hover:block transition-all">
          <div className="absolute top-3 right-3 text-[#EF7628] text-2xl font-Oxanium flex flex-col gap-2 justify-center items-center ">
            <span
              onClick={() => setLove(!love)}
              className="p-2 bg-gray-800 rounded-lg"
            >
              {love ? <AiFillHeart /> : <AiOutlineHeart />}
            </span>
            <span className="p-2 bg-gray-800 rounded-lg">
              <AiFillEye />
            </span>
          </div>
        </div>
      </div>
      <Rating style={{ maxWidth: 110 }} value={rating} readOnly />
      <h1 className="font-Oxanium font-semibold text-xl">{name}</h1>
      <h1 className="font-Oxanium text-[#EF7628] font-medium ">${price}.00</h1>
    </div>
  );
};

export default GamesCard;
