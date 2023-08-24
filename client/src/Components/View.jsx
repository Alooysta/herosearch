import React from 'react'
import { useNavigate } from 'react-router-dom'

export const View = ({infoPersoangem}) => {   

    const imageSize = 'standard_fantastic'
    const navigate = useNavigate();

  return (
    <div className='w-full h-full'>
        {infoPersoangem && infoPersoangem.results.map((data)=>{
        return(
            <img key={data.id} onClick={()=>navigate(`/${data.id}`)}  src= {`${data.thumbnail.path}/${imageSize}.${data.thumbnail.extension}`} alt = {infoPersoangem.name} />
        )
      })}
    </div>
  )
}

export default View