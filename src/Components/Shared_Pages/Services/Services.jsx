import GamesImg from "../GamesImg/GamesImg";
import img1 from "../../../assets/imges/1.webp";
import img2 from "../../../assets/imges/2.webp";
import ServicesItems from "./ServicesItems";
import { TbTruckDelivery, TbFileDollar } from "react-icons/tb";
import { MdOutlineAttachMoney, MdPercent } from "react-icons/md";

const Services = () => (
  <div className="container mt-28 text-white">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
      <ServicesItems
        Icon={<TbTruckDelivery />}
        header={"Free Delivery"}
        title={"Free shipping on all order"}
      />
      <ServicesItems
        Icon={<TbFileDollar />}
        header={"Money Return"}
        title={"Back guarantee in 7 days"}
      />
      <ServicesItems
        Icon={<MdPercent />}
        header={"Member Discount"}
        title={"On every order over $130.00"}
      />
      <ServicesItems
        Icon={<MdOutlineAttachMoney />}
        header={"Return Policy"}
        title={"Support 24 hours a day"}
      />
    </div>
    <div className="grid grid-col-1 lg:grid-cols-2 gap-10">
      <GamesImg
        img={img1}
        header={"DEAD RISING"}
        subheader={"ZOMBIES"}
        title={"Best Action Game"}
      />
      <GamesImg
        img={img2}
        header={"FAST DRIVE"}
        subheader={"RACING"}
        title={"3D Pixel Racing"}
      />
    </div>
  </div>
);

export default Services;
