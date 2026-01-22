import React from 'react';
import Game from './Game';
import { Link } from 'react-router';

const Games = ({data}) => {
  console.log('this is games page',data);


  return (
    <div className=' grid grid-cols-1 gap-5 justify-items-center  mt-10 md:grid-cols-2 lg:grid-cols-4'>
      {
        data.map(game=> <Link key={game.id} to={`/gameDetails/${game.id}`} ><Game  game={game}></Game></Link>)
      }

      
    </div>
  );
};

export default Games;