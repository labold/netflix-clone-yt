import { Movie } from "@/typing";
import Image from "next/image";

interface Props {
  // When using firebase
  // movies: Movie | documentData;
  movies: Movie;
}
function Thumbnail({ movies }: Props) {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 ms:min-w-[260px] md:hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movies.backdrop_path || movies.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        fill
        alt="thumbnail-netflix"
      />
    </div>
  );
}

export default Thumbnail;
