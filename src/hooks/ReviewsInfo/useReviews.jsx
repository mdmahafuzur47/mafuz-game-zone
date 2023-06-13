import { useQuery } from "@tanstack/react-query";

const useReviews = () => {
  const { data: reviewsData = [], isLoading: reviewsLoading } = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/reviews");
      return res.json();
    },
  });
  return [reviewsData, reviewsLoading];
};

export default useReviews;
