import React from "react";
import useSWR from "swr";
import axios from "axios";
import { useParams } from "react-router-dom";

type artworks = {
  _id: string;
  title: string;
  imageUrl: string;
};

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const ArtistProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, error } = useSWR(
    id ? `http://localhost:5000/api/users/artist/${id}` : null,
    fetcher
  );

  const { artist, artworks } = data || {};

  if (error)
    return (
      <p className="text-red-500 min-h-[70vh] text-center">
        Failed to load artist data.
      </p>
    );

  if (!artist) {
    return (
      <div className="text-center text-gray-500 mt-20 min-h-[70vh]">
        Artist not found
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] bg-gray-100 dark:bg-[#121212] text-gray-900 dark:text-gray-200">
      {/* Artist Info Section */}
      <div className="bg-[url(/assets/background1.jpg)] bg-no-repeat bg-cover sm:mx-12 md:mx-24 lg:mx-46 bg-white dark:bg-[#1E1E1E]">
        <section
          className="bg-no-repeat bg-cover sm:mx-12 md:mx-24 lg:mx-46 pt-16 bg-gray-900 dark:bg-[#1E1E1E] text-center text-white"
          style={{ backgroundImage: `url(${artist.profilePic})` }}
        >
          <img
            src={artist.profilePic}
            alt={artist.name}
            className="w-48 h-48 rounded-full mx-auto border-4 border-white"
          />
          <div className="bg-gradient-to-t from-black/100 to-black/0">
            <h2 className="text-4xl font-semibold mt-4">{artist.name}</h2>
            <p className="text-lg max-w-2xl mx-auto mt-2">{artist.bio}</p>
          </div>
        </section>
      </div>

      {/* Artworks Gallery */}
      <section className="py-16 px-6">
        <h3 className="text-2xl font-semibold text-center">Artworks</h3>
        <div className="columns-1 sm:columns-2 md:columns-4 md:max-lg:-space-x-2 space-y-3 sm:mx-12 lg:mx-8 xl:mx-24 mt-8">
          {artworks.map((artwork: artworks) => (
            <div
              key={artwork._id}
              className="relative bg-white dark:bg-[#1E1E1E] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute text-white bottom-0 p-3 text-center bg-gradient-to-t from-black/100 to-black/0 w-full">
                <h4 className="text-lg font-semibold">{artwork.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArtistProfile;
