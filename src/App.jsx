import React, { useEffect } from 'react'
import HomePage from './pages/HomePage'
import { Route, Routes, useLocation } from 'react-router-dom'
import SignUp from './pages/SignUp'
import LoginPage from './pages/LoginPage';

function App() {

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() =>{
      window.scrollTo(0, 0)
    }, [pathname])
    return null;
  }

  return (
    <>
    <ScrollToTop />
    <Routes location={location} key={location.pathname}>
      <Route index element={ <HomePage /> } />
      <Route path='/SignUp' element={ <SignUp /> } />
      <Route path='/LogIn' element={ <LoginPage /> } />
    </Routes>
    </>
  )
}

export default App
