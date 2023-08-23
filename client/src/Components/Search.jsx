import React from 'react';
import axios from 'axios';
import { useState } from 'react'
import { View } from './View';

const Search = () => {

  const [personagem, setPersonagem] = useState('');
  const [personagemData, setPersonagemData] = useState({});

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const envioData = await axios.post('http://localhost:5000', {personagem})
    setPersonagemData(envioData.data)
    console.log(personagemData)



  }


  return (
    <div>
    <form onSubmit={handleSubmit}>
        <div className='w-full h-full text-center p-5 cursor-pointer'>
            <h1 className='p-5 text-[7.5vmin] font-bold'>PERSONAGENS MARVEL</h1>
            <input className='border border-black rounded-md' onChange={e=>setPersonagem(e.target.value)} type='text' />
            <button className='rounded-md bg-green-500'>Buscar</button>
            <View infoPersoangem = {personagemData.data} nome = {personagem}/>
        </div>
        <div className='w-full h-full text-center'>
            
        </div>
    </form>
    </div>
  )
}

export default Search