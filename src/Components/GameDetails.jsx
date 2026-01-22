import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { motion, AnimatePresence } from "framer-motion";

const GameDetails = () => {
  const {id}=useParams();
  const games=useLoaderData();
  console.log(id,games);

  const game=games.find(singlegame=>singlegame.id == id);
  
  if(!game){
    return(
      <div className='text-center py-20'>
        <h2 className='text-6xl'>OOPs Game Not Found!</h2>
      </div>
    )
  }
 
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >

    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-base-200 p-6 rounded-lg shadow-lg">

        {/* Cover Image */}
        <div>
          <img
            src={game.coverPhoto}
            alt={game.title}
            className="w-full h-[420px] object-cover rounded-lg"
          />
        </div>

        {/* Game Info */}
        <div className="flex flex-col justify-between">

          <div>
            <h1 className="text-3xl font-semibold mb-3">
              {game.title}
            </h1>

            <p className="text-accent mb-2">
              Developer: <span className="text-base-content">{game.developer}</span>
            </p>

            <p className="text-accent mb-2">
              Category: <span className="text-base-content">{game.category}</span>
            </p>

            <p className="mb-4">
              ⭐ <span className="font-semibold">{game.ratings}</span> / 5
            </p>

            <p className="text-sm leading-relaxed text-accent">
              {game.description}
            </p>
          </div>

          {/* Action Button */}
          <div className="mt-6">
            <AnimatePresence>

            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="btn btn-secondary px-8 w-full md:w-auto"
            >
            <a
              href={game.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
             
            >
              Install / Play Now
            </a>
            </motion.button>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
    </motion.div>
   
  );
};

export default GameDetails;