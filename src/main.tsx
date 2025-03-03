import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.tsx'
import Navbar from './components/navbar/navbar.tsx'
import './i18n.ts'
import store from './redux/store/store.ts'
import Footer from './components/footer/footer.tsx'


createRoot(document.getElementById('root')!).render(
  
  <Provider store={store}>
    <Navbar />
    <App />
    <Footer />
  </Provider>,
)
