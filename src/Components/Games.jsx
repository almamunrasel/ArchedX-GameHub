import React from 'react';
import Game from './Game';

const Games = ({data}) => {
  console.log('this is games page',data);


  return (
    <div className=' grid grid-cols-1 gap-10 justify-items-center  mt-10 md:grid-cols-2 lg:grid-cols-4'>
      {
        data.map(game=> <Game key={game.id} game={game}></Game>)
      }

      
    </div>
  );
};

export default Games;