import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Detalhes from './Pages/Detalhes/Detalhes';
import Error from './Pages/Error/Error';
import Favoritos from './Pages/Favoritos/Favoritos';

const RoutesApp = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='filme/:id' element={<Detalhes />} />
            <Route path='favoritos' element={<Favoritos />} />

            <Route path='*' element={<Error />} />
        </Routes>
    )
}

export default RoutesApp;