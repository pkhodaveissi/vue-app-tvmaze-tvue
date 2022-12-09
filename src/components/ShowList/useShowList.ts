import axios from "axios";
import { useQuery } from "@tanstack/vue-query";
export type ShowType = {
  id: number;
  name: string;
  genres: string[];
  image: Record<string, string>;
  language: string;
  status: string;
  summary: string;
  rating: {
    average: number;
  };
};

const sortByRatingFn = (ShowA: ShowType, ShowB: ShowType) => {
  return ShowB.rating.average - ShowA.rating.average;
};

const queryFn = async (genre: string) => {
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/shows`);
  if (data.length > 0) {
    const filteredData = data.filter((item: ShowType) => {
      return item.genres
        .map((genreItem) => genreItem.toLowerCase())
        .includes(genre.toLowerCase());
    });

    filteredData.sort(sortByRatingFn);

    const topten = filteredData.slice(0, 10);

    return topten;
  } else return data;
};

export function useShows(genre: string) {
  return useQuery({
    queryKey: ["shows", genre],
    queryFn: () => queryFn(genre),
  });
}
