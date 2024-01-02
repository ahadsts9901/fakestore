import React from 'react'
import "./App.css"
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import ProductPage from './pages/ProductPage/ProductPage'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/:productId" element={<ProductPage />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </>
  )
}

export default App