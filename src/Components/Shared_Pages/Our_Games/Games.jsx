import useGames from "../../../hooks/GameInfo/useGames";
import Loader from "../Loader/Loader";
import SectionTitle from "../SectionTitle/SectionTitle";
import GamesCard from "./GamesCard";

const Games = () => {
  const [gameData, gameloading] = useGames();
  if (gameloading) {
    return <Loader />;
  }
  console.log(gameData);
  return (
    <div className="container pb-12">
      <SectionTitle title={"Our Popular Games"} />
      <div className="grid grid-cols-1 my-10 md:grid-cols-4 gap-5">
        {gameData?.slice(0, 8).map((data) => (
          <GamesCard key={data?._id} data={data} />
        ))}
      </div>
      <div className="text-center">
        <button className="px-9 hover:bg-gray-50 hover:text-black py-3 font-Oxanium tracking-[1px] bg-[#EF7628] rounded-sm font-semibold">
          View All Games
        </button>
      </div>
    </div>
  );
};

export default Games;
