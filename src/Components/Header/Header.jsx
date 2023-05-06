import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header>
            <Link to='/' className='logo'>Royal Films</Link>
            <nav>
                <Link to='/favoritos' className='favoritos'>Favoritos</Link>
            </nav>
        </header>
    )
}

export default Header