import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import Like from "./Like";
import { Heart } from "lucide-react";

type Artwork = {
  _id: string;
  artist: {
    name: string;
  } | null;
  title: string;
  imageUrl: string;
  likesCount: number;
};

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Display: React.FC = () => {
  const { data: artworks, error } = useSWR<Artwork[]>(
    "http://localhost:5000/api/artworks",
    fetcher
  );

  if (error) {
    return (
      <div className="text-center text-red-500 mt-20 min-h-[70vh]">
        Something went wrong. Please try again later.
      </div>
    );
  }

  if (!artworks) {
    return (
      <div className="text-center text-gray-500 mt-20 min-h-[70vh]">
        Loading artworks... Please wait.
      </div>
    );
  }

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-semibold text-center mb-12 lobster-regular">
        Featured Artworks
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {artworks.map((artwork) => (
          <div
            key={artwork._id}
            className="group relative bg-gradient-to-t from-transparent to-black rounded-2xl overflow-hidden shadow-xl transition-all duration-500 transform hover:scale-105"
          >
            <div className="overflow-hidden aspect-[4/5] rounded-t-2xl">
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-in-out"
                loading="lazy"
              />
            </div>

            <div className="p-5 flex flex-col justify-between h-[120px] bg-white dark:bg-[#1E1E1E] opacity-90 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white line-clamp-2">
                  {artwork.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  by {artwork.artist?.name || "Unknown Artist"}
                </p>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <Link
                  to={`/artwork/${artwork._id}`}
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline transition-all duration-200"
                >
                  View Details
                </Link>

                <div className="flex items-center gap-2 text-gray-400 dark:text-gray-300">
                  {artwork.likesCount > 0 && (
                    <span className="text-xs">{artwork.likesCount}</span>
                  )}
                  <Heart size={16} className="fill-red-500 stroke-none" />
                  <Like />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Display;
