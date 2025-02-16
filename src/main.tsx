import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './components/navbar/navbar.tsx'
import './i18n.ts'
import Variants from './components/navbar/moitonSideNavbar/variants/variant.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Variants></Variants>
    <App />
  </StrictMode>,
)
