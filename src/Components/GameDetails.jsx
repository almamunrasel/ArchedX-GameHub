import React from 'react';
import { useLoaderData, useParams } from 'react-router';

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
            <a
              href={game.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-full md:w-auto"
            >
              Install / Play Now
            </a>
          </div>

        </div>
      </div>
    </div>
   
  );
};

export default GameDetails;