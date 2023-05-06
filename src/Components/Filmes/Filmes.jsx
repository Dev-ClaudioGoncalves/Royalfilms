import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import api from '../../Services/api'
import './Filmes.css'

function Filmes() {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadFilms = async () => {
        const resp = await api.get('movie/now_playing', {
            params: {
                api_key: 'c2936ecde0cd9fcaa3d1fdf14e054925',
                language: 'pt-BR',
                page: 1,
            }
        })
        setFilms(resp.data.results);
        setLoading(false)
    }


    useEffect(() => {
        loadFilms();
    }, [])


    if(loading){
        return(
            <div className='loading'>
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return (
        <div className='container-filmes'>
            <h3>Lançamentos: </h3>
            <div className="container-main">
                {films.map((item) => (
                    <div key={item.id} className='container-films'>
                        <div>
                            <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} />
                        </div>
                        <Link className='link-filme' to={`/filme/${item.id}`}>{item.title}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Filmes