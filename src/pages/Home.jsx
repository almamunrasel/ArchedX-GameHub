import React, {} from 'react';
import Banner from '../Components/Banner';
import PopularGames from '../Components/PopularGames';
import { Link, useLoaderData } from 'react-router';
import Newsletter from './Newsletter';
import { motion, AnimatePresence } from "framer-motion";


const Home = () => {
  const data=useLoaderData();
  
   const games=[...data].sort((a,b)=>a.id - b.id).slice(0,8);
   const popularGames =[...data].sort((a,b)=>b.ratings - a.ratings).slice(0,3);
  return (
    <div>
       <section className='my-15'>
        <h2>FEATURED & RECOMMENDED</h2>

         <Banner games={games}></Banner>

      </section>

      <section>
        <h2 className='text-center text-5xl bold'>Popular Games</h2>

        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}>

                  <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
                        {
                        popularGames.map(popularGame=> <Link to={`/gameDetails/${popularGame.id}`}><PopularGames key={popularGame.id} popularGame={popularGame}></PopularGames></Link>)
                        
                        }

                  </div>



        </motion.div>

        
        <div className='mt-10'>
          <Newsletter></Newsletter>

        </div>
        
        


      </section>
      
    </div>
  );
};

export default Home;