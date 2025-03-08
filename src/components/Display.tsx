import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";

type artworks = {
  _id: string;
  artist: {
    name: string;
  };
  title: string;
  imageUrl: string;
};

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Display: React.FC = () => {
  const { data: artworks, error } = useSWR(
    `http://localhost:5000/api/artworks`,
    fetcher
  );

  if (error)
    return (
      <p className="text-red-500 min-h-[70vh] text-center">
        Failed to load artwork data.
      </p>
    );

  if (!artworks) {
    return (
      <div className="text-center text-gray-500 mt-20 min-h-[70vh]">
        Artwork is loading
      </div>
    );
  }

  return (
    <div className="py-16 p-6">
      <div className="columns-1 sm:columns-3 md:columns-4 sm:-space-x-3.5 max-xl:space-y-0.5 space-y-0.5 max-w-6xl sm:max-md:mx-8 mx-auto">
        {/* Sample Artwork Cards */}
        {artworks?.map((artwork: artworks) => (
          <div
            key={artwork._id}
            className="group h-fit relative bg-white dark:bg-[#1E1E1E] rounded-xs shadow-lg overflow-hidden duration-300 hover:contrast-120"
          >
            <img
              src={artwork.imageUrl}
              alt={artwork.artist?.name}
              className="min-h-50 max-h-120 w-full object-cover"
            />
            <div className="hidden group-hover:block montecarlo-regular p-2 absolute bottom-0 text-white bg-gradient-to-t from-black/100 to-black/0 w-full">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{artwork.title}</h3>
                <p>by {artwork.artist?.name}</p>
              </div>
              <Link
                to={`/artwork/${artwork._id}`}
                className="text-purple-500 hover:underline mt-2 inline-block"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
