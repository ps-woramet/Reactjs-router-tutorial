import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, NavLink, Routes, Route, Navigate} from 'react-router-dom'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Welcome from './pages/Welcome'
import Profile from './pages/Profile'

function App() {
  const [loggedIn, setLoggedIn] = useState(null)

  function handleLogin(){
    setLoggedIn(true)
    console.log(loggedIn)
  }
  function handleLogout(){
    setLoggedIn(false)
    console.log(loggedIn)
  }

  let activeClassName = "nav-active"

  return (
    <BrowserRouter>
      <div className='container'>
        <nav>
          <div>
            <NavLink end to = "/" className={({isActive})=> isActive ? activeClassName : undefined}>Home</NavLink>
            <NavLink to = "/about" className={({isActive})=> isActive ? activeClassName : undefined}>About</NavLink>
            <NavLink to = "/contact" className={({isActive})=> isActive ? activeClassName : undefined}>Contact</NavLink>
            <NavLink to = "/dashboard" className={({isActive})=> isActive ? activeClassName : undefined}>Dashboard</NavLink>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={loggedIn ?  <Navigate to = "/welcome"/>:<Home login = {handleLogin}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Welcome' element={loggedIn ? <Welcome logout={handleLogout}/>:<Navigate to = "/"/>}>
              <Route path='settings' element={<p>This is the nested settings route</p>} />
          </Route>
          <Route path='/dashboard' element={<Navigate to = "/" state={"From dashboard"}/>}/>
          <Route path='/profile'>
            <Route path=':userId' element={<Profile/>}/>
          </Route>
          <Route path='*' element={<Error/>}/>
        </Routes>
        <footer>
          <div>footer</div>
        </footer>
        </div>
    </BrowserRouter>
  )
}

export default App
