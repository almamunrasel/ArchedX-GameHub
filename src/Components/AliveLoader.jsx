import React from 'react';
import { IoLogoAppleAppstore } from "react-icons/io5";

const AliveLoader = ({ text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <div className="flex items-center gap-3">
        <IoLogoAppleAppstore className="text-6xl text-blue-500 animate-spin" />
        <span className="text-3xl font-bold ">{text}</span>
      </div>
    </div>
  );
};

export default AliveLoader;