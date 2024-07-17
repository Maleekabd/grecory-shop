import { useEffect } from "react";

const Text = () => {

  return (
    <div className=" relative bg-emerald-700 h-72 flex items-center justify-center">
      <span className="absolute left-96 top-10 h-16 w-16 rounded-full bg-emerald-400"></span>
      <span className="absolute left-20 top-44 h-10 w-10 rounded-full bg-emerald-400"></span>
      <span className="absolute left-10 top-10 h-10 w-10 rounded-full bg-emerald-400"></span>
      <span className="absolute right-52 top-44 h-20 w-20 rounded-full bg-emerald-400"></span>
      <span className="absolute right-96 top-36 h-10 w-10 rounded-full bg-emerald-400"></span>
     <h1 className="text-5xl text-white z-[2]">Make This Day Great ! </h1>
      <span className="absolute right-16 top-28 h-10 w-10 rounded-full bg-emerald-400"></span>
      <span className="absolute left-44 top-60 h-10 w-10 rounded-full bg-emerald-400"></span>
      <span className="absolute left-72 top-28 h-10 w-10 rounded-full bg-emerald-400"></span>
      <span className="absolute right-56 top-10 h-16 w-16 rounded-full bg-emerald-400"></span>
      <span className="absolute left-10 top-10 h-10 w-10 rounded-full bg-emerald-400"></span>
    </div>
  );
};

export default Text;
