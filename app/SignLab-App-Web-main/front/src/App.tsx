import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Topbar from './components/topbar/topbar.js';
import Translation from './views/translation/translation';
import Finished from './views/finished/finished';
import Notation from './views/notation/notation';
import Login from './views/log/login';
import { useEffect, useState } from 'react';
import Register from './views/log/register';
import Parameters from './views/parameters/parameters';

/**
 * It returns a BrowserRouter component that contains a Topbar component and a Routes component that
 * contains a Route component for each of the five pages
 */
const Router = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path='/' element={<Translation />} />
        <Route path='/translation' element={<Translation />} />
        <Route path='/finished' element={<Finished />} />
        <Route path='/notation' element={<Notation />} />
        <Route path='/parameters' element={<Parameters />} />
      </Routes>
    </BrowserRouter>
  )
}

/**
 * The Log function returns a BrowserRouter component that contains a Routes component that contains a
 * Route component that contains a Login component
 */
const Log = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

/* A function that returns a component that contains a Router component if the user is logged in or a
Log component if the user is not logged in. */
function App() {
  const [isLogged, setL] = useState(false)

  /* It checks if the user is logged in. If the user is logged in, it sets the state of the component
  to
  true. */
  useEffect(() => {
    if (localStorage.getItem('logged')) setL(true)
  }, [localStorage.getItem('logged')])

  /* Returning a component that contains a Router component if the user is logged in or a
  Log component if the user is not logged in. */
  return (<>
    {isLogged ? <Router /> : <Log />}
  </>
  );
}

export default App;
