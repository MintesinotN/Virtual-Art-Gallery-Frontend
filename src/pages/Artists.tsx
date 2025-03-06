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
      <section className="bg-[url(./assets/lightartistpage.jpg)] dark:bg-[url(./assets/artistpage.jpg)] bg-no-repeat bg-cover bg-center py-16 px-6 text-center sm:mx-12 md:mx-24 lg:mx-46 bg-white dark:bg-[#1E1E1E] dark:text-white">
        <h2 className="text-4xl font-semibold">Meet Our Artists</h2>
        <p className="text-lg max-w-2xl mx-auto mt-4">
          Discover talented artists from around the world and explore their
          stunning artworks.
        </p>
      </section>

      {/* Artists Grid */}
      <section className="py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-6 sm:mx-12 md:mx-16 lg:mx-8 xl:mx-32 gap-8">
          {artists?.map((artist: artists) => (
            <div
              key={artist._id}
              className="bg-[url(/assets/background1.jpg)] bg-no-repeat bg-center bg-cover bg-white dark:bg-[#1E1E1E] rounded-sm shadow-lg pt-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={artist.profilePic}
                alt={artist.name}
                className="w-36 h-36 rounded-full"
              />
              <h3 className="text-xl font-semibold mt-4">{artist.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {artist.bio}
              </p>
              <Link
                to={`/artist/${artist._id}`}
                className="text-gray-400 dark:text-gray-300 bg-gradient-to-t from-black/100 to-black/0 w-full text-center py-2"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Artists;
