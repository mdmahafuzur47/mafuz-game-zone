import { useQuery } from "@tanstack/react-query";

const useGames = () => {
  const {
    data: gameData = [],
    isLoading: gameloading,
    refetch,
  } = useQuery({
    queryKey: ["GamesInfo"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/gameinfo");
      return res.json();
    },
  });
  return [gameData, gameloading, refetch];
};

export default useGames;
