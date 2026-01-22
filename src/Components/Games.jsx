import React from 'react';
import Game from './Game';
import { Link } from 'react-router';
import { motion, AnimatePresence } from "framer-motion"

const Games = ({data}) => {
  console.log('this is games page',data);


  return (
    <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}>
    <div className=' grid grid-cols-1 gap-5 justify-items-center  mt-10 md:grid-cols-2 lg:grid-cols-4'>
      {
        data.map(game=> <Link key={game.id} to={`/gameDetails/${game.id}`} ><Game  game={game}></Game></Link>)
      }

      
    </div>
    </motion.div>
  );
};

export default Games;