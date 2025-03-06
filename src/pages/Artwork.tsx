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
        Artwork not found
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] bg-gray-100 dark:bg-[#121212] text-gray-900 dark:text-gray-200">
      {/* Artwork Details Section */}
      <section className="py-16 px-6">
        <div className="bg-[url(/assets/background1.jpg)] bg-no-repeat bg-center bg-cover max-w-5xl mx-auto bg-white dark:bg-[#1E1E1E] rounded-xs shadow-lg overflow-hidden">
          <img
            src={artwork.imageUrl}
            alt={artwork.title}
            className="max-sm:w-[80vw] max-md:w-[60vw] w-[40vw] mx-auto max-sm:max-h-96 max-h-120 object-contain"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold">{artwork.title}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              by {artwork.artist.name}
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              {artwork.description}
            </p>

            {/* Additional Info */}
            <div className="flex max-sm:justify-between sm:gap-30">
              <div>
                <h3 className="text-lg font-semibold">Year</h3>
                <p className="text-gray-700 dark:text-gray-400">
                  {new Date(artwork.createdAt).getFullYear()}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Category</h3>
                <p className="text-gray-700 dark:text-gray-400">
                  {artwork.category}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:scale-105 transition">
                Add to Favorites
              </button>
              <button className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-md shadow-md hover:scale-105 transition">
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
