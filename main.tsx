import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Szamologep from './Szamologep.tsx'
import Homero from './Homero.tsx'
import BMI from './BMI.tsx'
import Penzvalto  from './Penzvalto.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/szamologep' element={<Szamologep />}></Route>
        <Route path='/homero' element={<Homero />}></Route>
        <Route path='/bmi' element={<BMI />}></Route>
        <Route path='/penzvalto' element={<Penzvalto />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
