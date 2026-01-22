import React from 'react';
import { Link } from 'react-router';

const Game = ({game}) => {
  return (
    
    <div>
      <div className="card bg-base-300 hover:scale-105 transition cursor-pointer">
              <figure>
                <img className='p-3 rounded-2xl w-full' src={game.coverPhoto} alt={game.title} />
              </figure>
              <div className='flex justify-between items-center'>
              <div className="card-body ">
                  <h3 className="card-title">{game.title}</h3>
                  <p>Rating: ⭐ {game.ratings}</p>
                  <p className="text-sm text-accent">
                    {game.category}
                  </p>
                </div>
                <div>
                  <h3 className="card-title pr-3">{game.developer}</h3>
                </div>
              </div>
            </div>
      
    </div>
  );
};

export default Game;