import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Provider } from 'react-redux'
import './index.css'
import App from './App.tsx'
import Navbar from './components/navbar/navbar.tsx'
import './i18n.ts'
import Variants from './components/navbar/moitonSideNavbar/variants/variant.tsx'
import store from './redux/store/store.ts'
import RightSideBar from './components/navbar/motionRightSideNavbar/rightSideBar/rightSideBar.tsx'


createRoot(document.getElementById('root')!).render(
  
  <Provider store={store}>
    <Navbar />
    <Variants></Variants>
    
    <App />
  </Provider>,
)
