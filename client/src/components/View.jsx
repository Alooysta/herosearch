import React from 'react'
import { useNavigate } from 'react-router-dom'

const View = ({characterInformation}) => {

    const imageSize = 'standard_fantastic'
    const navigate = useNavigate();


    if (characterInformation && characterInformation.results && characterInformation.results.length === 0){
      return(
        <div>
          <h1 className='text-[4vmin]'>O personagem especificado não foi encontrado 😔</h1>
        </div>
      )
    }
    
  return (
    <div className='w-full h-full'>
      <div className='w-full h-full flex flex-wrap p-10 md:p-5 justify-center items-center align-middle'>



        {characterInformation && characterInformation.results.map((data)=>{

            return(
                <img className='p-2' key={data.id} onClick={()=>navigate(`/${data.id}`)}  src = {`${data.thumbnail.path}/${imageSize}.${data.thumbnail.extension}`} alt = {characterInformation.name} />
            )
        })}
        </div>
    </div>
  )
}

export default View