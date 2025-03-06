import React from "react";
import { Link } from "react-router-dom";

const artists = [
  {
    id: 1,
    name: "John Doe",
    bio: "A visionary abstract artist with a passion for vibrant colors.",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/9/98/Pablo_picasso_1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    bio: "Specializes in modern portrait art with deep emotional expressions.",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/9/98/Pablo_picasso_1.jpg",
  },
  {
    id: 3,
    name: "Emily Brown",
    bio: "A landscape painter capturing the beauty of nature.",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/9/98/Pablo_picasso_1.jpg",
  },
  {
    id: 4,
    name: "Michael Lee",
    bio: "A digital artist pushing the boundaries of creativity.",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/9/98/Pablo_picasso_1.jpg",
  },
];

const Artists: React.FC = () => {
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
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="bg-[url(/assets/background1.jpg)] bg-no-repeat bg-center bg-cover bg-white dark:bg-[#1E1E1E] rounded-sm shadow-lg pt-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={artist.avatar}
                alt={artist.name}
                className="w-36 h-36 rounded-full"
              />
              <h3 className="text-xl font-semibold mt-4">{artist.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {artist.bio}
              </p>
              <Link
                to={`/artist/${artist.id}`}
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
