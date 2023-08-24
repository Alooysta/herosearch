import React from 'react';
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'

const Sobre = () =>{
  const {id} = useParams();
  const [aboutData, setAboutData] = useState({});
  const imageSize = ''

useEffect(()=>{
  const fetchData = async() =>{
    const response = await axios.post('http://localhost:5000/personagem', {id})
    setAboutData(response.data.data)
    console.log(aboutData)
  }

  fetchData()
}, [id])




  return(
    <div>
      {aboutData && aboutData.results.map((data)=>{
        return(
          <img src={`${data.thumbnail.path}/${imageSize}.${data.thumbnail.extension}`} alt={data.name} />
        )


      })}
    </div>
  )
}

export default Sobre


