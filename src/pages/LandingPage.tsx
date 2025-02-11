import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {

  const display = [
    {
      title:"Company Owner",
      image:"https://res.cloudinary.com/dikboipqc/image/upload/v1739038778/profile_pictures/yvn5dpjgkrslfl2ccu9n.jpg"
    },
    {
      title:"Celebrity Art",
      image:"https://res.cloudinary.com/dikboipqc/image/upload/v1738774762/cld-sample.jpg"
    },
    {
      title:"Nature Display",
      image:"https://res.cloudinary.com/dikboipqc/image/upload/v1738774755/samples/landscapes/nature-mountains.jpg"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="h-[80vh] flex flex-col justify-center items-center text-center p-6 bg-cover bg-center">
        <h1 className="max-sm:text-4xl text-5xl font-bold mb-4">Discover Timeless Art</h1>
        <p className="text-lg mb-6 max-w-2xl">
          Experience breathtaking artworks, connect with artists, and curate your collection.
        </p>
        <Link
          to="/signup"
          className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Featured Artworks */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Featured Artworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {display.map((art, index) => (
            <div key={index} className="max-h-fit bg-white dark:bg-[#1E1E1E] shadow-lg rounded-lg overflow-hidden">
              <div className="p-4">
                <img src={art.image} alt="" />
                <h3 className="pt-4 text-xl font-semibold">{art.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="sm:rounded-sm sm:mx-16 md:mx-32 lg:mx-48 xl:mx-64 sm:mb-16 py-16 bg-gray-900 text-white dark:bg-[#1A1A1A] dark:text-gray-300 text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Join the Art Movement</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Become part of an exclusive art community. Showcase your creations, discover stunning artworks, and connect with artists worldwide.
        </p>
        <Link
          to="/signup"
          className="inline-block bg-gray-200 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          Sign Up Now
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;
