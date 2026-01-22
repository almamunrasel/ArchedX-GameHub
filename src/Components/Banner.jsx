import React, {  useState } from 'react';
import { Link } from 'react-router';
import PopularGames from './PopularGames';
import { motion, AnimatePresence } from "framer-motion";




const Banner = ({games}) => {

  
   const [currentIndex, setCurrentIndex] = useState(0);

  const total = games.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const selectSlide = (index) => {
    setCurrentIndex(index);
  };

  const featuredGame = games[currentIndex];
  

   return (

    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
     <div className="flex gap-15 relative md:flex-row flex-col  ">
      {/* Main Featured Image */}
      <div className="flex-1 relative hover:scale-105 transition ">
        {/* <img
          src={featuredGame.coverPhoto}
          alt={featuredGame.title}
          className="w-full  my-4 object-cover md:h-[450px]  rounded-lg shadow-lg transition duration-500 cursor-pointer"
        /> */}
        <Link to={`/gameDetails/${featuredGame.id}`}>
          <img
            src={featuredGame.coverPhoto}
            alt={featuredGame.title}
            className="w-full my-4 object-cover md:h-[450px] rounded-lg shadow-lg transition duration-500 cursor-pointer"
          />
        </Link>

       


        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 btn btn-circle btn-lg shadow-lg bg-base-300 hover:bg-base-200"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 btn btn-circle btn-lg shadow-lg bg-base-300 hover:bg-base-200"
        >
          ❯
        </button>
      </div>

      {/* Right panel: Thumbnails + Info */}
      <div className="w-full md:w-1/3 flex flex-col gap-3 mt-4 md:mt-0 hover:scale-105 transition">
        {/* Game Title */}
        <h2 className="text-xl font-semibold">{featuredGame.title}</h2>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 gap-2">
          {games.map((game, idx) => (
            <img
              key={game.id}
              src={game.coverPhoto}
              alt={game.title}
              className={`w-full h-20 object-cover rounded cursor-pointer transition-transform duration-300 ${
                idx === currentIndex ? "ring-2 ring-secondary scale-105" : ""
              }`}
              onClick={() => selectSlide(idx)}
            />
          ))}
        </div>

        {/* Info Panel */}
        <div className="mt-2 p-2 bg-base-200 rounded text-sm">
          <span className="font-semibold">Now Available</span>
          <div className="text-xs text-accent">
            {featuredGame.category} • {featuredGame.ratings} ⭐
          </div>
          <div className="mt-1 text-xs">{featuredGame.developer}</div>
        </div>
      </div>
    </div>
    </motion.div>
   
  );
   
};

export default Banner;