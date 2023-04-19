import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const FetchData = ({ cat }) => {
    const [data, setData] = useState("");

    const fetchData = async () => {
        await axios
            .get(
                cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=3f769ce9977b4903b99ce619c6bc9843`
                    : 'https://newsapi.org/v2/top-headlines?country=in&apiKey=3f769ce9977b4903b99ce619c6bc9843'
            )
            .then((res) => setData(res.data.articles));
    };

    useEffect(() => {
        fetchData();
    }, [cat])

  return (
    <div className='container my-4'>
        <h3>
            <u>
                TOP HEADLINES
            </u>
        </h3>
        <div className='container d-flex justify-content-center align-items-left flex-column my-3'>
            {data ? data.map((items, index) => (
                <>
                <div className='container my-3' style={{ width: "600px", boxShadow: "2px 2px 10px silver"}}>
                    <h5>{items.title}</h5>
                    <img src={items.urlToImage} alt="/" className='img-fluid' style={{ width: 'auto', height: '300px', objectFit: 'cover'}} />
                    <p>{items.content}</p>
                    <Link to={items.url} target="_blank" style={{marginBottom: "30px"}}>View More</Link>
                </div>
                </>
            )) : "LOADING..."}
        </div>
    </div>
  )
}

export default FetchData