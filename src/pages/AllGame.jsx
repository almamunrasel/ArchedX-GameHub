import React, {  useState,useEffect } from 'react';
import { useLoaderData } from 'react-router';
import AuthContext from '../Context/AuthContext';

import AliveLoader from '../Components/AliveLoader';
import Games from '../Components/Games';
import NotFound from './NotFound';

const AllGame = () => {
  const games=useLoaderData();
  const [pageloading,setPageLoading]=useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredApps, setFilteredApps] = useState(games);
   useEffect(() => {
    setPageLoading(true);

    const timer = setTimeout(() => {
      const results = games.filter(
        (app) =>
          app.title.toLowerCase().includes(searchText.toLowerCase()) ||
          app.companyName?.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredApps(results);
      setPageLoading(false);
    }, 300); // small delay for smoother animation

    return () => clearTimeout(timer);
  }, [searchText, games]);

  console.log("this is from all game page",filteredApps);
  
 
  return (
    <div>
      {
        pageloading && (
          <div className='fixed inset-0 flex justify-center items-center bg-black/20 z-50'>
            <AliveLoader size={4}/>
          </div>
        )
      }
       <div className="text-center mt-10">
        <p className="font-bold text-3xl">Our All Games</p>
        <p className="text-[#627382] p-2">
          Explore All Games on the Market developed by us. We code for Millions
        </p>
      </div>
        {/* Search and count */}
      <div className="flex justify-between items-center mt-10">
        <div>
          <p className="font-semibold text-xl">{filteredApps.length} Apps Found</p>
        </div>
        <div className="relative">
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              placeholder="Search Apps..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="pl-8"
            />
          </label>

          {/* Loading indicator inside search */}
         
        </div>
      </div>

       {/* Results or NotFound */}
      <div className="mt-10">
        {filteredApps.length === 0 ? (
          <NotFound onShowAll={() => setSearchText('')} />
        ) : (
          <Games data={filteredApps} />
        )}
      </div>



      
    </div>
  );
};

export default AllGame;