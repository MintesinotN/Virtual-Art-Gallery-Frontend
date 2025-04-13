import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Artwork: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: artwork, error } = useSWR(
    id ? `http://localhost:5000/api/artworks/${id}` : null,
    fetcher
  );

  if (error)
    return (
      <p className="text-red-500 min-h-[70vh] text-center">
        Failed to load artwork data.
      </p>
    );

  if (!artwork) {
    return (
      <div className="text-center text-gray-500 mt-20 min-h-[70vh]">
        Loading artwork...
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] bg-gray-50 dark:bg-[#121212] text-gray-900 dark:text-gray-100">
      {/* Artwork Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white dark:bg-[#1E1E1E] rounded-xl shadow-lg">
          {/* Artwork Image */}
          <div className="flex justify-center items-center relative p-4">
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30 rounded-xl"></div>
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              className="w-full h-96 object-contain rounded-xl transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Artwork Details */}
          <div className="p-6 space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              {artwork.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              by {artwork.artist?.name || "Unknown Artist"}
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              {artwork.description}
            </p>

            {/* Additional Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-500 dark:text-gray-400">
              <div>
                <h3 className="font-semibold text-lg text-gray-700 dark:text-gray-200">Year</h3>
                <p>{new Date(artwork.createdAt).getFullYear()}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-700 dark:text-gray-200">Category</h3>
                <p>{artwork.category}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-6 mt-8">
              <button className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition duration-300 transform hover:scale-105">
                Add to Favorites
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-gray-200 text-gray-900 dark:text-white font-semibold rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-transparent transition duration-300 transform hover:scale-105">
                Share
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Artwork;
