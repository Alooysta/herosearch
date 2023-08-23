import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Sobre = () => {

    const {id} = useParams
    const [dataSobre, setDataSobre] = useState({});

  return (
    <div></div>
  )
}

export default Sobre