import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import Category from './pages/category'
import Structure from './pages/structure-layout'
import Home from './pages/home'
import ProductNavigation from './pages/product-navigation'
import CategoryListItems from './pages/category-list-items'
import FindStore from './pages/find-store'
import Product from './pages/product'
import About from './pages/about'
import Support from './pages/support'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Structure />}>
          <Route index element={<Home />} />
          <Route path="produtos" element={<ProductNavigation />}>
            <Route index element={<CategoryListItems />} />
            <Route path="categoria/:category" element={<Category />} />
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="sobre" element={<About />} />
          <Route path="encontrar" element={<FindStore />} />
          <Route path="suporte" element={<Support />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
