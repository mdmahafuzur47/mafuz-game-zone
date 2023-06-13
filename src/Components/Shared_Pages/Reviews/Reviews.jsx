import { Swiper, SwiperSlide } from "swiper/react";
import useReviews from "../../../hooks/ReviewsInfo/useReviews";
import Loader from "../Loader/Loader";
import qute from "../../../assets/qute.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Reviews = () => {
  const [reviewsData, reviewsLoading] = useReviews();
  if (reviewsLoading) {
    return <Loader />;
  }
  return (
    <div
      style={{
        background: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)) ,linear-gradient(to left, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),url('https://img3.wallspic.com/previews/0/7/3/5/4/145370/145370-rallycross-racing_video_game-video_games-game-dirt_3-x750.jpg')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen  my-10"
    >
      <div className="w-[90%] mx-auto py-10">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviewsData?.map((data) => (
            <SwiperSlide className="p-20" key={data?._id}>
              <div className="flex justify-center flex-col items-center text-center gap-3">
                <div className="relative">
                  <img
                    className="w-24 h-24 rounded-full border-4 mb-3 border-[#F67929]"
                    src={data?.img}
                    alt="reviewPerson"
                  />
                  <img
                    className="absolute -left-2 -top-1 bg-[#F67929] rounded-full p-1"
                    src={qute}
                    alt=""
                  />
                </div>
                <h1 className="font-Oxanium font-semibold text-xl racking-[1px]">
                  {data?.name}{" "}
                  <span className="text-[#F67929]">({data?.role})</span>
                </h1>
                <p className="text-gray-400 font-Oxanium font-medium tracking-[1px]">
                  {data?.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
