import React from 'react';


const NotFound = ({onShowAll}) => {
  
  return (
    <div>
        
        <div className='mt-20'>
          <h1 className='text-4xl font-bold text-center '>OOps!!No Apps Found</h1>
          <div className='flex items-center justify-center'>
       <button onClick={onShowAll} className='btn weight-hover text-white text-xl mt-10 mb-10 bg-[linear-gradient(125.07deg,_rgba(99,46,227,1)_0%,_rgba(159,98,242,1)_100%)] p-6 rounded-xl'> Show All</button>
     </div>

        </div>
     
    </div>
  );
};

export default NotFound; 