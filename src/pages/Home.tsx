import Explore from "@/components/Explore";
import Display from "@/components/Display";

const Home: React.FC = () => {
  type Artist = {
    name: string;
    title?: string;
    image: string;
  };

  const Artists: Artist[] = [
    {
      name: "Pablo Picasso",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/98/Pablo_picasso_1.jpg",
    },
    {
      name: "Michelangelo",
      image:
        "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQWgUUwNIOxGyvuo7_2_I4vGhsJFr6-zUgtACdANGpDwKzmymBDN8m4xMVmVZ_ew2C5",
    },
    {
      name: "Leonardo da Vinci",
      image:
        "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSn9ASPssbShveAIP6lPRx9FqqQFcSOfMgbR4HwVpkm5qdof7PUUmRbCsaFpCRGhnbJ",
    },
  ];

  const Artworks: Artist[] = [
    {
      name: "Michelangelo",
      title: "Sistine Chapel ceiling",
      image:
        "https://www.dutchfinepaintings.com/wp-content/uploads/2024/05/Sistina-interno-765x1030.jpg",
    },
    {
      name: "Leonardo da Vinci",
      title: "Madonna and Child",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Madonna_benois_01.jpg",
    },
    {
      name: "Pablo Picasso",
      title: "The Old Guitarist",
      image:
        "https://upload.wikimedia.org/wikipedia/en/b/bc/Old_guitarist_chicago.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#121212] text-gray-900 dark:text-gray-200">
      {/* Hero Section */}
      <section className="relative bg-[url('/assets/homebackground.jpg')] dark:bg-[url('/assets/darkhomebackground2.jpg')] bg-cover bg-no-repeat h-screen bg-center flex items-center justify-center text-center px-6 text-white">
        <div className="bg-black/60 p-10 rounded-lg backdrop-blur-sm max-w-3xl">
          <h1 className="rum-raisin-regular text-5xl font-bold mb-4">
            Experience Art Like Never Before
          </h1>
          <p className="text-lg mb-6">
            Discover breathtaking artworks, connect with legendary artists, and
            immerse yourself in a world of creativity.
          </p>
          <a
            href="#explore"
            className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow-md hover:scale-105 transition"
          >
            Explore Now
          </a>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="py-20 px-6 bg-white dark:bg-[#1A1A1A]">
        <h2 className="text-4xl font-semibold text-center mb-12 lobster-regular">
          Featured Artworks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Artworks.map((art) => (
            <div
              key={art.name}
              className="group relative overflow-hidden rounded-lg shadow-md bg-white dark:bg-[#1E1E1E] hover:shadow-xl transition"
            >
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white w-full">
                <h3 className="text-xl font-semibold">{art.title}</h3>
                <p className="text-sm">by {art.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Explore and Display Sections */}
      <div id="explore" className="scroll-mt-[15vh]">
        <Explore />
        <Display />
      </div>

      {/* Featured Artists */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-[#181818]">
        <h2 className="text-4xl font-semibold text-center mb-12 lobster-regular">
          Legend Artists
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Artists.map((artist) => (
            <div
              key={artist.name}
              className="group overflow-hidden rounded-lg shadow-md bg-white dark:bg-[#1E1E1E] text-center"
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{artist.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Painter, Sculptor, Printmaker, Ceramicist, Theatre Designer
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
