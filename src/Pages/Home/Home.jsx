import React from 'react'
import Header from '../../Components/Header/Header'
import Filmes from '../../Components/Filmes/Filmes'
import Footer from '../../Components/Footer/Footer'
import './Home.css'

function Home() {
    return (
        <div className='container'>
            <Header />
            <Filmes />
            <Footer />
        </div>
    )
}

export default Home