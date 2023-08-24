import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import View from './View';

export const Search = () => {
  const navigate = useNavigate();

  const pageRefresh = () => {
    navigate(0);
  };

  const [character, setCharacter] = useState('');
  const [characterData, setCharacterData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sendData = await axios.post('http://localhost:5000', { character });
    setCharacterData(sendData.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='w-full h-full text-center p-5 cursor-pointer text-white'>
          <Link to='/marvel-app' onClick={pageRefresh}>
            <h1 className='p-5 text-[7.5vmin] font-bold cursor-pointer text-white transition duration-300 transform hover:scale-105'>
              PERSONAGENS MARVEL
            </h1>
          </Link>
          <input
            className='my-5 border border-white rounded-md transition duration-300 hover:border-blue-500 focus:border-blue-500 outline-none px-4 py-2 w-72 focus:ring-2 focus:ring-blue-500'
            onChange={(e) => setCharacter(e.target.value)}
            type='text'
            required
            onFocus={(e) => {
              e.target.classList.add('animate-pulse');
            }}
            onBlur={(e) => {
              e.target.classList.remove('animate-pulse');
            }}
          />
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full p-1.5 py-3 px-6'>
            Buscar
          </button>
          <View characterInformation={characterData.data} />
        </div>
        <div className='w-full h-full text-center text-white'>
          {characterData.attributionText}
        </div>
      </form>
    </div>
  );
};

export default Search;
