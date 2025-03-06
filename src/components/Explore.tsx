import React from 'react'

const Explore: React.FC = () => {
  return (
    <div>
    {/* Explore Section Header */}
    <section className="bg-[url(./assets/explore.jpg)] bg-no-repeat bg-center bg-cover sm:mx-12 md:mx-24 lg:mx-46 mb-18 sm:rounded-sm py-16 px-6 bg-gray-900 dark:bg-[#1E1E1E] text-white text-center">
      <h2 className="rum-raisin-regular text-4xl font-semibold mb-4">Explore Our Gallery</h2>
      <p className="text-lg max-w-2xl mx-auto mb-8">
        Browse through a wide selection of stunning artworks, carefully curated to inspire and captivate you.  
        Discover masterpieces from talented artists across the world.
      </p>
    </section>
    </div>
  )
}

export default Explore