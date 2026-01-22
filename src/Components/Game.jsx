import React from 'react';
import { Link } from 'react-router';

const Game = ({game}) => {
  return (
    
    <div>
<div className="card bg-base-300 hover:scale-105 transition cursor-pointer h-full flex flex-col">
  <figure>
    <img 
      className='p-3 rounded-2xl w-full h-48 object-cover' 
      src={game.coverPhoto} 
      alt={game.title} 
    />
  </figure>
  
  {/* flex-grow ensures this section fills the remaining space */}
  <div className='flex flex-grow justify-between items-center'>
    <div className="card-body">
      <h3 className="card-title line-clamp-1">{game.title}</h3>
      <p>Rating: ⭐ {game.ratings}</p>
      <p className="text-sm text-accent">
        {game.category}
      </p>
    </div>
    <div className="pr-4">
      <h3 className="text-sm font-semibold opacity-70">{game.developer}</h3>
    </div>
  </div>
</div>
      
    </div>
  );
};

export default Game;