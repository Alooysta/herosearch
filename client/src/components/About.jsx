import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const About = () => {
    const { id } = useParams();
    const [aboutData, setAboutData] = useState({});
    const imageSize = 'standard_fantastic';
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.post('http://localhost:5000/characterinfo', { id });
            setAboutData(response.data.data);
        };

        fetchData();
    }, [id]);

    return (
        <div className='flex justify-center'>
            {aboutData.results && aboutData.results.map((data) => {
                return (
                    <div className='flex' key={data.id}>
                        <div className='p-3 text-white bg-blue-500 rounded-lg flex flex-col shadow-xl'>
                            <div className='flex justify-center'>
                                <img
                                    src={`${data.thumbnail.path}/${imageSize}.${data.thumbnail.extension}`}
                                    alt={data.name}
                                    className='w-[300px] h-auto rounded-full'
                                />
                            </div>
                            <h1 className='text-center text-[8vmin] py-3 font-bold'>{data.name}</h1>
                            <p className='px-5 text-center text-[3.5vmin]'>{data.description ? data.description : "A descrição não está disponível na API 😔"}</p>
                        </div>
                        <div className='ml-5'>
                            <h1 className='text-white py-5 text-center text-[3.75vmin] font-bold'>Quadrinhos do(a) {data.name}</h1>
                            {data.comics.items.length > 0 ? (
                                <ul className='p-3 flex flex-wrap justify-center max-h-[400px] overflow-y-auto'>
                                    {data.comics.items.map((comics) => (
                                        <li className='text-white text-center py-3 md:p-5 hover:text-blue-500 transition duration-300 ease-in-out' key={comics.id}>
                                            <a
                                                href={`https://www.google.com/search?q=${encodeURIComponent(comics.name)}`}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='text-[2.5vmin] hover:underline'
                                            >
                                                {comics.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className='text-white text-center'>Nenhum quadrinho disponível 😔.</p>
                            )}
                            <div className='text-center w-full'>
                                <button onClick={goBack} className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full p-1.5 py-3 px-6'>Pagina Inicial</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default About;
