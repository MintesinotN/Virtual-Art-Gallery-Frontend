import React from "react";
// import { useParams } from "react-router-dom";

const Artwork: React.FC = () => {
  // const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-[80vh] bg-gray-100 dark:bg-[#121212] text-gray-900 dark:text-gray-200">
      {/* Artwork Details Section */}
      <section className="py-16 px-6">
        <div className="bg-[url(/assets/background1.jpg)] bg-no-repeat bg-center bg-cover max-w-5xl mx-auto bg-white dark:bg-[#1E1E1E] rounded-xs shadow-lg overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Madonna_benois_01.jpg"
            alt="Artwork"
            className="max-sm:w-[80vw] max-md:w-[60vw] w-[40vw] mx-auto max-sm:max-h-96 max-h-120 object-contain"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold">Artwork Title</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">by Artist Name</p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              This is a detailed description of the artwork, its inspiration, medium, and the story behind it.
            </p>

            {/* Additional Info */}
            <div className="flex max-sm:justify-between sm:gap-30">
              <div>
                <h3 className="text-lg font-semibold">Year</h3>
                <p className="text-gray-700 dark:text-gray-400">2023</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Category</h3>
                <p className="text-gray-700 dark:text-gray-400">Abstract</p>
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
