import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import PaginaPrincipal from './pages/PaginaPrincipal'
import './index.css'
import Inicio from './pages/Inicio'
import Produtos from './pages/Produtos'
import Sobre from './pages/Sobre'
import OndeEncontrar from './pages/OndeEncontrar'
import Suporte from './pages/Suporte'
import Produto from './pages/Produto'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />}>
          <Route index element={<Inicio />} />
          <Route path="produtos" element={<Produtos />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="encontrar" element={<OndeEncontrar />} />
          <Route path="suporte" element={<Suporte />} />
          <Route path="produtos/:id" element={<Produto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
