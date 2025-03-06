import Explore from "@/components/Explore";
import Display from "@/components/Display";

const Home: React.FC = () => {
  type artists = {
    name: string;
    title?: string;
    image: string;
  };

  const Artists: artists[] = [
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

  const Artworks: artists[] = [
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
      <section className="bg-[url(./assets/homebackground.jpg)] dark:bg-[url(./assets/darkhomebackground2.jpg)] bg-cover bg-no-repeat  h-[80vh] bg-[center] flex flex-col items-center justify-center text-center px-6 bg-gray-900 dark:bg-[#1E1E1E] text-white">
        <h1 className="rum-raisin-regular text-5xl font-bold mb-4">
          Experience Art Like Never Before
        </h1>
        <p className="text-lg mb-6 max-w-2xl">
          Discover breathtaking artworks, connect with talented artists, and
          immerse yourself in a world of creativity.
        </p>
        <a
          href="#explore"
          className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow-md transition transform hover:scale-105 select-none"
        >
          Explore Now
        </a>
      </section>

      {/* Featured Artworks */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8 lobster-regular">
          Featured Artworks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 max-xl:gap-3 gap-6 max-w-6xl sm:max-md:mx-24 mx-auto">
          {/* Sample Artwork Cards */}
          {Artworks.map((art) => (
            <div
              key={art.name}
              className="mb-4 h-fit relative bg-white dark:bg-[#1E1E1E] rounded-xs shadow-lg overflow-hidden duration-300 hover:contrast-125"
            >
              <img src={art.image} alt="Artwork" className="max-h-120 w-full" />
              <div className="montecarlo-regular px-2 absolute bottom-0 p-4 text-white bg-gradient-to-t from-black/100 to-black/0 w-full">
                <h3 className="text-xl font-semibold">{art.title}</h3>
                <p>by {art.name}</p>
                {/* <Link to="/artwork/1" className="text-purple-500 hover:underline mt-2 inline-block">
                  View Details
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div id="explore" className="scroll-mt-[20vh] mb-8">
        <Explore />
        <Display />
      </div>

      {/* Featured Artists */}
      <section className="py-16 px-6 bg-gray-200 dark:bg-[#181818]">
        <h2 className="text-3xl font-semibold text-center mb-8 lobster-regular">
          Legend Artists
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3  max-xl:gap-3 gap-6 max-w-6xl sm:max-md:mx-24 mx-auto">
          {/* Sample Artist Profiles */}
          {Artists.map((artist: artists) => (
            <div
              key={artist.name}
              className="group h-fit max-h-96 relative bg-white dark:bg-[#1E1E1E] rounded-xs shadow-lg overflow-hidden text-center"
            >
              <img
                src={artist.image}
                alt="Artist"
                className="mx-auto object-fill"
              />
              <div className="hidden group-hover:block px-4 py-2 absolute bottom-0 text-white bg-gradient-to-t from-black/100 to-black/0 w-full">
                <h3 className="text-lg font-semibold">{artist.name}</h3>
                <p className="text-sm">
                  Painter, Sculptor, Printmaker, Ceramicist, and Theatre
                  designer
                </p>
                {/* <Link to="/artist/1" className="text-gray-200 mt-2 inline-block">
                View Profile
              </Link> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
