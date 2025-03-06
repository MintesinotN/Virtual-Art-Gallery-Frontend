import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";

type artworks = {
  _id: string;
  artist: {
    name: string;
  };
  title: string;
  imageUrl: string;
};

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Display: React.FC = () => {
  // type artists = {
  //     name: string;
  //     title?: string;
  //     image: string;
  // }

  // const Artworks:artists[] = [
  //   {
  //     name:"Michelangelo",
  //     title:"Sistine Chapel ceiling",
  //     image:"https://www.dutchfinepaintings.com/wp-content/uploads/2024/05/Sistina-interno-765x1030.jpg"
  //   },
  //   {
  //     name:"Leonardo da Vinci",
  //     title:"Mona Lisa",
  //     image:"https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
  //   },
  //   {
  //     name:"Michelangelo",
  //     title:"Sistine Chapel ceiling",
  //     image:"https://www.dutchfinepaintings.com/wp-content/uploads/2024/05/Sistina-interno-765x1030.jpg"
  //   },
  //   {
  //     name:"Leonardo da Vinci",
  //     title:"Mona Lisa",
  //     image:"https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
  //   },
  //   {
  //     name:"Pablo Picasso",
  //     title:"The Old Guitarist",
  //     image:"https://upload.wikimedia.org/wikipedia/en/b/bc/Old_guitarist_chicago.jpg"
  //   },
  //   {
  //     name:"Michelangelo",
  //     title:"Sistine Chapel ceiling",
  //     image:"https://www.dutchfinepaintings.com/wp-content/uploads/2024/05/Sistina-interno-765x1030.jpg"
  //   },
  //   {
  //     name:"Pablo Picasso",
  //     title:"The Old Guitarist",
  //     image:"https://upload.wikimedia.org/wikipedia/en/b/bc/Old_guitarist_chicago.jpg"
  //   },
  //   {
  //     name:"Michelangelo",
  //     title:"Sistine Chapel ceiling",
  //     image:"https://www.dutchfinepaintings.com/wp-content/uploads/2024/05/Sistina-interno-765x1030.jpg"
  //   },
  //   {
  //     name:"Pablo Picasso",
  //     title:"The Old Guitarist",
  //     image:"https://upload.wikimedia.org/wikipedia/en/b/bc/Old_guitarist_chicago.jpg"
  //   },
  //   {
  //     name:"Michelangelo",
  //     title:"Sistine Chapel ceiling",
  //     image:"https://www.dutchfinepaintings.com/wp-content/uploads/2024/05/Sistina-interno-765x1030.jpg"
  //   },
  //   {
  //     name:"Leonardo da Vinci",
  //     title:"Mona Lisa",
  //     image:"https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
  //   },
  //   {
  //     name:"Michelangelo",
  //     title:"Sistine Chapel ceiling",
  //     image:"https://www.dutchfinepaintings.com/wp-content/uploads/2024/05/Sistina-interno-765x1030.jpg"
  //   },
  //   {
  //     name:"Leonardo da Vinci",
  //     title:"Mona Lisa",
  //     image:"https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
  //   },
  //   {
  //     name:"Pablo Picasso",
  //     title:"The Old Guitarist",
  //     image:"https://upload.wikimedia.org/wikipedia/en/b/bc/Old_guitarist_chicago.jpg"
  //   },
  //   {
  //     name:"Michelangelo",
  //     title:"Sistine Chapel ceiling",
  //     image:"/assets/background1.jpg"
  //   },
  //   {
  //     name:"Leonardo da Vinci",
  //     title:"Mona Lisa",
  //     image:"https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
  //   }
  // ]

  const { data: artworks, error } = useSWR(
    `http://localhost:5000/api/artworks`,
    fetcher
  );

  if (error)
    return (
      <p className="text-red-500 min-h-[70vh] text-center">
        Failed to load artwork data.
      </p>
    );

  if (!artworks) {
    return (
      <div className="text-center text-gray-500 mt-20 min-h-[70vh]">
        Artwork not found
      </div>
    );
  }

  return (
    <div className="py-16 p-6">
      <div className="columns-1 sm:columns-3 md:columns-4 sm:-space-x-3.5 max-xl:space-y-0.5 space-y-0.5 max-w-6xl sm:max-md:mx-8 mx-auto">
        {/* Sample Artwork Cards */}
        {artworks?.map((artwork: artworks) => (
          <div
            key={artwork._id}
            className="group h-fit relative bg-white dark:bg-[#1E1E1E] rounded-xs shadow-lg overflow-hidden duration-300 hover:contrast-120"
          >
            <img
              src={artwork.imageUrl}
              alt={artwork.artist?.name}
              className="min-h-50 max-h-120 w-full object-cover"
            />
            <div className="hidden group-hover:block montecarlo-regular p-2 absolute bottom-0 text-white bg-gradient-to-t from-black/100 to-black/0 w-full">
              <h3 className="text-xl font-semibold">{artwork.title}</h3>
              <p>by {artwork.artist?.name}</p>
              <Link
                to={`/artwork/${artwork._id}`}
                className="text-purple-500 hover:underline mt-2 inline-block"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
