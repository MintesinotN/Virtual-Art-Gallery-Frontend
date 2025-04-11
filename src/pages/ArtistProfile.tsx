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
      <p className="text-red-500 text-center mt-20">Failed to load artist data.</p>
    );

  if (!artist) {
    return (
      <div className="text-center text-gray-600 mt-20">
        Artist not found
      </div>
    );
  }

  return (
    <div className="dark:bg-[#121212] dark:text-gray-200 min-h-screen bg-gray-50 text-gray-900">
      {/* Artist Profile Section */}
      <section className="max-w-4xl mx-auto py-20 px-8 flex flex-col sm:flex-row items-center gap-12">
        {/* Profile Picture */}
        <div className="w-52 h-52 rounded-full border-4 border-gray-200 shadow-sm overflow-hidden">
          <img
            src={artist.profilePic}
            alt={artist.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Artist Info */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-3xl font-semibold mb-4">{artist.name}</h2>
          <p className="text-lg text-gray-600">{artist.bio}</p>
        </div>
      </section>

      {/* Artworks Gallery */}
      <section className="dark:bg-[#010101] bg-white py-20 px-8">
        <h3 className="text-3xl font-semibold text-center dark:text-gray-100 text-gray-900 mb-12">Artworks</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {artworks.map((artwork: artworks) => (
            <div
              key={artwork._id}
              className="dark:shadow-gray-950 relative group rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105"
            >
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-64 object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-2xl font-semibold text-white">{artwork.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArtistProfile;
