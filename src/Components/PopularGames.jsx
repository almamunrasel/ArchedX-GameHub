import React from 'react';

const PopularGames = ({popularGame}) => {
  
  return (
    <div>
      <div className="card bg-base-300 hover:scale-105 transition cursor-pointer">
              <figure>
                <img className='p-3 rounded-2xl w-full' src={popularGame.coverPhoto} alt={popularGame.title} />
              </figure>
              <div className='flex justify-between items-center'>
              <div className="card-body ">
                  <h3 className="card-title">{popularGame.title}</h3>
                  <p>Rating: ⭐ {popularGame.ratings}</p>
                  <p className="text-sm text-accent">
                    {popularGame.category}
                  </p>
                </div>
                <div>
                  <h3 className="card-title pr-3">{popularGame.developer}</h3>
                </div>
              </div>
            </div>
    </div>
  );
};

export default PopularGames;