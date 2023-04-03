import React from 'react'
import '../App.css';

const Header = () => {
  return (
    <div 
    className="rounded-xl p-5 bg-white bg-opacity-10 m-2 justify-between text-gray-300 font-bold 
    flex flex-row space-between"
    >
        <h1 className="text-bold text-xl">
          Notes Keeper
        </h1>
        <div>
          <button className="bg-color from-cyan-400 to-sky-600">
            Home
          </button>
        </div>
    </div>
  )
}

export default Header;