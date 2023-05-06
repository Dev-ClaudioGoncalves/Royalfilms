import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../Components/Header/Header';
import api from '../../Services/api';
import './Detalhes.css'

function Detalhes() {

    const [film, setFilm] = useState([])
    const [loading, setLoading] = useState(true)
    const [alert, setAlert] = useState('')
    const navigate = useNavigate()

    const { id } = useParams();


    const salvarFilme = () => {
        const myList = localStorage.getItem('@royalfilms');

        let filmesSalvos = JSON.parse(myList) || [];

        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === film.id)

        if (hasFilme) {
            setAlert('Este filme já está na lista de Favoritos')

        } else {
            filmesSalvos.push(film);
            localStorage.setItem('@royalfilms', JSON.stringify(filmesSalvos))
            setAlert('Filme salvo.')
        }
    }

    const loadDetalheFilm = async () => {
        await api.get(`/movie/${id}`, {
            params: {
                api_key: 'c2936ecde0cd9fcaa3d1fdf14e054925',
                language: 'pt-BR'
            }
        }).then((resp) => {
            setFilm(resp.data)
            setLoading(false)
        }).catch(() => {
            navigate('/', { replace: true })
            return
        })

    }

    useEffect(() => {
        loadDetalheFilm()
    }, [])


    if (loading) {
        return (
            <div className='loading'>
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return (
        <div>
            <Header />
            <div className="filme-info">
                <div className='container-info'>
                    <h1>{film.title}</h1>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`} />
                        <div>
                            <h3>Sinopse:</h3>
                            <span>{film.overview}</span>
                            <br /><br /> <br />
                            <strong>Avaliação: <span className='nota' style={{ color: film.vote_average <= 5 ? 'red' : '#eca407' }}>{film.vote_average.toFixed(1)}</span> / <span className='nota-total'>10</span></strong>
                            <div className='buttons'>
                                <button className='salvar' onClick={salvarFilme}>Salvar</button>
                                <button className='trailer'><a href={`https://youtube.com/results?search_query=${film.title}`} target="blank">Trailer</a></button>
                            </div>
                            <div className='alerta'>
                                {alert}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detalhes