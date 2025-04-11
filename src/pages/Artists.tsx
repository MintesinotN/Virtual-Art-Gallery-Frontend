import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";

type artists = {
  _id: string;
  name: string;
  profilePic: string;
  bio: string;
};

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Artists: React.FC = () => {
  const { data: artists, error } = useSWR(
    "http://localhost:5000/api/users/artists",
    fetcher
  );

  if (error)
    return (
      <p className="text-red-500 min-h-[70vh] text-center">
        Failed to load artist data.
      </p>
    );

  return (
    <div className="min-h-[80vh] bg-gray-100 dark:bg-[#121212] text-gray-900 dark:text-gray-200">
      {/* Header */}
      <section className="relative py-24 px-6 sm:px-12 md:px-24 lg:px-48 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-[#1a1a1a] dark:to-[#2a2a2a] text-center overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4 animate-fade-in-up">
            Meet Our Artists
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in-up delay-100">
            Step into a world of creativity and explore the stories behind the
            brushstrokes of our talented global artists.
          </p>
          <div className="mt-8 flex justify-center space-x-2 animate-fade-in-up delay-200">
            <span className="w-2 h-2 bg-purple-500 rounded-full" />
            <span className="w-2 h-2 bg-pink-500 rounded-full" />
            <span className="w-2 h-2 bg-yellow-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-6 sm:mx-12 md:mx-16 lg:mx-8 xl:mx-32 gap-8">
          {artists?.map((artist: artists) => (
            <div
              key={artist._id}
              className="relative rounded-2xl backdrop-blur-md bg-white/70 dark:bg-white/5 shadow-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] group border border-gray-200 dark:border-gray-700"
            >
              {/* Header - Artist Info */}
              <div className="flex items-center gap-4 p-6">
                <img
                  src={artist.profilePic}
                  alt={artist.name}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-white dark:border-gray-600 shadow-lg"
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                    {artist.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Featured Artist
                  </p>
                </div>
              </div>
              {/* Bio Section */}
              <div className="px-6 pb-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                <p className="line-clamp-3">{artist.bio}</p>
              </div>
              {/* CTA Button */}
              <div className="px-6 pb-6">
                <Link
                  to={`/artist/${artist._id}`}
                  className="inline-block w-full text-center bg-purple-600 hover:bg-purple-700 transition-colors text-white py-2 rounded-md font-medium text-sm"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Artists;
