import SectionTitle from "../SectionTitle/SectionTitle";
import CategoryItmes from "./CategoryItmes";

import img1 from "../../../assets/CategoryImg/1.webp";
import img2 from "../../../assets/CategoryImg/2.jpg";
import img3 from "../../../assets/CategoryImg/3.webp";

const Category = () => {
  return (
    <div className="container my-14">
      <SectionTitle title={"Special Category"} />
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-7">
        <CategoryItmes img={img1} name={"Latest Pubg Lite Game"} />
        <CategoryItmes img={img2} name={"New Battlefield 4 Game"} />
        <CategoryItmes img={img3} name={"Son Goku Jump Force"} />
      </div>
      <div className="border-[1px] border-gray-500 shadow-md mt-16"></div>
    </div>
  );
};

export default Category;
