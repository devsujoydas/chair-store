import React, { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // ১ সেকেন্ড পর hide হবে

    return () => clearTimeout(timer); // cleanup
  }, []);

  if (!loading) return null;

  return (
    <div className='fixed w-full h-full bg-[#3B5D50] z-50 flex justify-center items-center'>
      <AiOutlineLoading3Quarters className='text-white text-5xl animate-spin'/>
    </div>
  );
};

export default Loader;
