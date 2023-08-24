import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'



const About = () => {
    const {id} = useParams();
    const [aboutData, setAboutData] = useState({});
    const imageSize = 'standard_fantastic'
    const navigate = useNavigate()

    const goBack = ()=>{
        navigate(-1)
    }

    useEffect(()=>{
        const fetchData = async() =>{
        const response = await axios.post('http://localhost:5000/characterinfo', {id})
        setAboutData(response.data.data)

        }

        fetchData();
    }, [id]);

    useEffect(()=>{
        
    },[aboutData]);

    return(
        <div>
            {aboutData.results && aboutData.results.map((data)=>{
                return(
                    <>
                    <div className='p-3 text-white'>
                        <div className='flex justify-center'>
                    <img key={data.id} src={`${data.thumbnail.path}/${imageSize}.${data.thumbnail.extension}`} alt = {data.name} />
                    </div>
                    <h1 className='text-center text-[8vmin] py-3 font-bold'>{data.name}</h1>
                    <p className='px-5 text-center text-[3.5vmin]'>{data.description ? data.description :"A descrição não está disponível na API 😔"}</p>
                    </div>
                    <div>
                        </div>
                    <div className='text-white'>
                        <h1 className='py-5 text-center text-[3.75vmin] font-bold'>Quadrinhos do(a) {data.name}</h1>
                    <ul className='p-3 flex flex-wrap justify-center'>
                            {data.comics.items.map((comics)=>{
                                return(
                                    <div>
                                        <li className='text-center py-3 md:p-5'>
                                            <p className='text-[2.5vmin]' key = {comics.id} >`{comics.name}</p>
                                        </li>
                                    </div>
                                )
                            })}


                    </ul>
                    <div className='text-center w-full h-full'>
                        <button onClick={goBack} className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full p-1.5 py-3 px-6'>Pagina Inicial</button>
                    </div>
                    </div>



                </>
                )
            })}
        </div>
    )
}

export default About