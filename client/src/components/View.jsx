import React from 'react';
import { useNavigate } from 'react-router-dom';

const View = ({ characterInformation }) => {
  const imageSize = 'standard_fantastic';
  const navigate = useNavigate();

  if (characterInformation && characterInformation.results && characterInformation.results.length === 0) {
    return (
      <div>
        <h1 className='text-[4vmin]'>O personagem especificado não foi encontrado 😔</h1>
      </div>
    );
  }

  return (
    <div className='w-full h-full'>
      <div className='w-full h-full flex flex-wrap p-10 md:p-5 justify-center items-center align-middle'>

        {characterInformation &&
          characterInformation.results.map((data) => {
            return (
              <div
                key={data.id}
                className='relative p-2 group cursor-pointer'
                onClick={() => navigate(`/${data.id}`)}
              >
                <img
                  className='w-50 h-50 object-cover rounded-md transition-transform transform group-hover:scale-105'
                  src={`${data.thumbnail.path}/${imageSize}.${data.thumbnail.extension}`}
                  alt={data.name}
                />
                <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white py-1 px-2 rounded-b-md transition-opacity opacity-0 group-hover:opacity-100'>
                  {data.name}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default View;
