import React from 'react'

export const View = ({infoPersoangem}) => {   

    const imageSize = 'standard_fantastic'

  return (
    <div className='w-full h-full'>
        {infoPersoangem && infoPersoangem.results.map((data)=>{
        return(
            <img key={data.id} src= {`${data.thumbnail.path}/${imageSize}.${data.thumbnail.extension}`} alt = {infoPersoangem.name} />
        )
        })}
    </div>
  )
}

export default View