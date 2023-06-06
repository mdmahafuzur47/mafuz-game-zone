const CategoryItmes = ({ img, name }) => {
  return (
    <div className="text-white  text-center font-poppins font-semibold">
      <img src={img} alt="" />
      <h4 className="mt-4 text-xl tracking-[1.3px] mb-2">{name}</h4>
      <button className="text-[#ff7a21] border-b-[2px] border-[#ff7a21]">
        Shop Now
      </button>
    </div>
  );
};

export default CategoryItmes;
