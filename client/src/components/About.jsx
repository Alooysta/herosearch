import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'


const About = () => {
    const {id} = useParams();
    const [aboutData, setAboutData] = useState({});
    const imageSize = 'standard_fantastic'

    useEffect(()=>{
        const fetchData = async() =>{
        const response = await axios.post('http://localhost:5000/characterinfo', {id})
        setAboutData(response.data.data)

        }

        fetchData();
    }, [id]);

    useEffect(()=>{
        console.log(aboutData);
    },[aboutData]);

    return(
        <div>
            {aboutData.results && aboutData.results.map((data)=>{
                return(
                    <>
                    <div>
                        <div>
                    <img key={data.id} src={`${data.thumbnail.path}/${imageSize}.${data.thumbnail.extension}`} alt = {data.name} />
                    </div>
                    <h1>{data.name}</h1>
                    <p>{data.description}</p>
                    </div>
                    <div>
                        </div>
                    <div>
                        <h1>Quadrinhos do(a) {data.name}</h1>
                    <ul>
                            {data.comics.items.map((comics)=>{
                                return(
                                    <div>
                                        <li>
                                            <p key = {comics.id} >`{comics.name}</p>
                                        </li>
                                    </div>
                                )
                            })}


                    </ul>
                    </div>



                </>
                )
            })}
        </div>
    )
}

export default About