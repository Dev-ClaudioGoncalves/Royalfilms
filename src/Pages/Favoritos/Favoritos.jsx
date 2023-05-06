import React from 'react'
import './Favoritos.css'
import Header from '../../Components/Header/Header'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Favoritos() {

    const [films, setFilms] = useState([]);


    useEffect(() => {
        const myList = localStorage.getItem('@royalfilms')
        setFilms(JSON.parse(myList) || [])
    }, [])


    function excluir(id) {
        let filtroFilmes = films.filter((item) => {
            return (item.id !== id)
        })

        setFilms(filtroFilmes)
        localStorage.setItem('@royalfilms', JSON.stringify(filtroFilmes))
    }

    return (
        <div>
            <Header />
            <ul>
                <h3 className='favoritos-h3'>Favoritos: </h3>
                {films.map((item) => (
                    <div key={item.id} className='container-fav'>
                        <li>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`} className='link-fav'>Ver detalhes</Link>
                                <button onClick={() => excluir(item.id)}>Excluir</button>
                            </div>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Favoritos