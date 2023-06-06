const GamesImg = ({ img, header, subheader, title }) => {
  return (
    <div className="rounded-sm relative font-poppins  mt-20 overflow-hidden">
      <img className="hover:scale-125 w-full duration-1000 " src={img} alt="" />
      <div className="absolute top-[30%] right-0 text-white w-[40%] h-full">
        <div className="">
          <h3 className="text-[24px] tracking-[1.5px]">{title}</h3>
          <h1 className="text-[38px] tracking-[1.5px] mt-2 mb-6 font-semibold leading-[42px]">
            {header}
            <br />
            {subheader}
          </h1>
          <button className="px-7 py-3 font-Oxanium font-semibold rounded-sm bg-white text-black hover:bg-[#f66307]">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GamesImg;
